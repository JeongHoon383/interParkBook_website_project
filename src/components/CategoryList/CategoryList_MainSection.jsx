import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import CategoryList_Title from "./categoryList_Title";
import CategoryList_SubCaNav from "./CategoryList_SubCaNav";
import CategoryList_Sort from "./CategoryList_Sort";
import CategoryList_Products from "./product/CategoryList_Products";
import { useNavigate, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";
import { cartState } from "../Cart/atom";
// import { useQuery } from '@tanstack/react-query';

const MainSection = styled.section`
  width: 770px;
  margin-bottom: 30px;
  .noDataNotice {
    width: 770px;
    text-align: center;
    font-size: 2em;
    border-radius: 4px;
    border: 2px solid #d8d8d8;
    span {
      line-height: 350px;
    }
  }
`;

export default function CategoryList_MainSection({ userId }) {
  const [bookData, setBookData] = useState([]);
  const [listQty, setListQty] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSoldout, setIsSoldout] = useState("상품있음");
  const [checkList, setCheckList] = useState([]);
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [sortField, setSortField] = useState("pubDate");
  const [sortOption, setSortOption] = useState("desc");
  const [quantity, setQuantity] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useRecoilState(cartState);
  const parameterArr = useParams().categoryPath.split("_");
  const navigate = useNavigate();

  const handleSortField = (data) => {
    setSortField(data);
  };
  const handleSortOption = (data) => {
    setSortOption(data);
  };
  const handleListQty = (data) => {
    setListQty(data);
  };
  const handleCurrentPage = (data) => {
    setCurrentPage(data);
  };
  const handleIsSoldout = (data) => {
    setIsSoldout(data);
  };
  const handleIsCheckedAll = (data) => {
    setIsCheckedAll(data);
  };
  const handleCheckList = (data) => {
    setCheckList(data);
  };
  const handleQuantity = (flag, isbn13, idx) => {
    let copy = [...quantity];
    let currentQty = quantity[idx] && quantity[idx].qty;
    if (flag === "plus" && currentQty < 10) {
      currentQty += 1;
    } else if (flag === "minus" && currentQty > 1) {
      currentQty -= 1;
    }
    copy[idx] = {
      isbn13: isbn13,
      qty: currentQty,
    };
    setQuantity(copy);
  };

  // 카테고리별, 정렬별, 페이지별 품절여부별 상품목록 불러오기
  useEffect(() => {
    let startIndex = 0;
    let endIndex = 0;

    startIndex = (currentPage - 1) * listQty + 1;
    endIndex = currentPage * listQty;

    if (sortField) {
      axios(
        `http://192.168.50.16:9090/category/list/${parameterArr[0]}/${parameterArr[1]}/${parameterArr[2]}/${parameterArr[3]}/${parameterArr[4]}/${parameterArr[5]}/${startIndex}/${endIndex}/${sortField}/${sortOption}/${isSoldout}`
      ).then((result) => {
        setBookData(result.data);
        setQuantity(
          result.data.map((data) => ({ isbn13: data.isbn13, qty: 1 }))
        );
      });
    }

    if (userId) {
      axios
        .get(`http://192.168.50.16:9090/wishlist/${userId}`)
        .then((result) => setWishlist(result.data));
    }
  }, [
    listQty,
    currentPage,
    isSoldout,
    sortField,
    sortOption,
    parameterArr[0],
    parameterArr[1],
    parameterArr[2],
    parameterArr[3],
    parameterArr[4],
    parameterArr[5],
  ]);

  //하위 컴포넌트(CategoryList_Sort) 전체선택/선택해제 핸들링이벤트
  const handleSelectAll = (flag) => {
    if (flag) {
      bookData.map(
        ({
          isbn13,
          title,
          cover,
          priceStandard,
          priceSales,
          mileage,
          stockStatus,
        }) =>
          !checkList.some((checkItem) => checkItem.isbn13 === isbn13) &&
          !stockStatus.includes("품절")
            ? setCheckList((checkList) => [
                ...checkList,
                {
                  isbn13: isbn13,
                  cover: cover,
                  title: title,
                  priceStandard: priceStandard,
                  priceSales: priceSales,
                  mileage: mileage,
                },
              ])
            : null
      );
      setIsCheckedAll(true);
    } else {
      setCheckList([]);
      setIsCheckedAll(false);
    }
  };

  //체크박스가 전부 체크됐을 때 IsCheckedAll true/false 변환
  useEffect(() => {
    const currentPageBookQty = bookData.filter(
      (data) => !data.stockStatus.includes("품절")
    ).length;
    checkList.length === currentPageBookQty
      ? setIsCheckedAll(true)
      : setIsCheckedAll(false);
  }, [checkList, listQty]);

  //선택한 상품들 전부 카트에 담기
  const handleAddCartAll = () => {
    if (checkList.length) {
      let axiosBookData = [];
      for (const checkItem of checkList) {
        for (const quantityItem of quantity) {
          if (checkItem.isbn13 === quantityItem.isbn13) {
            axiosBookData.push({ ...checkItem, qty: quantityItem.qty });
          }
        }
      }

      navigate("/cart");
      alert("추가완료");
      return setCart((prev) => [
        ...prev,
        ...axiosBookData.map((bookData) => ({
          cartId: Math.ceil(Math.random() * 10000),
          img: bookData.cover && bookData.cover,
          title: bookData.title && bookData.title,
          priceStandard: bookData.priceStandard && bookData.priceStandard,
          priceSales: bookData.priceSales && bookData.priceSales,
          mileage: bookData.mileage && bookData.mileage,
          count: bookData.qty && bookData.qty,
        })),
      ]);
    } else {
      alert("상품을 선택해주세요.");
    }
  };

  //선택한 상품들 찜하기
  const handleAddWishlistAll = () => {
    if (userId && checkList.length) {
      if (checkList.length) {
        const wishlistArr = checkList.map((checkItem) => ({
          isbn13: checkItem.isbn13,
          id: userId,
        }));
        axios
          .post("http://192.168.50.16:9090/wishlist/all", wishlistArr)
          .then((result) => {
            if (result.data === "이미 찜한 상품") {
              alert("이미 찜한 상품입니다.");
            } else {
              alert("찜한 상품 목록에 추가했습니다.");
              axios
                .get(`http://192.168.50.16:9090/wishlist/${userId}`)
                .then((result2) => setWishlist(result2.data));
            }
          })
          .catch((err) => console.log(err));
      }
    } else if (!userId) {
      let notice = window.confirm(
        "로그인 후 이용 가능합니다.\n로그인 하시겠습니까?"
      );
      if (notice) {
        navigate("/login");
      }
    } else if (!checkList.length) {
      alert("상품을 선택해주세요.");
    }
  };

  //클릭한 상품 찜하기
  const handleToggleWishlist = (currentBookData, setIsInWishlist) => {
    if (userId) {
      axios
        .post("http://192.168.50.16:9090/wishlist/", {
          isbn13: currentBookData.isbn13,
          id: userId,
        })
        .then((result) => {
          if (result.data === "찜하기 완료") {
            setIsInWishlist(true);
          } else {
            setIsInWishlist(false);
          }
        })
        .catch((err) => {
          console.log(err);
          alert("에러가 발생했습니다.\n잠시 후 다시 시도해주세요.");
        });
    } else {
      let notice = window.confirm(
        "로그인 후 이용 가능합니다.\n로그인 하시겠습니까?"
      );
      if (notice) {
        navigate("/login");
      }
    }
  };

  return (
    <MainSection>
      <CategoryList_Title bookData={bookData} />
      {bookData.length >= 1 ? (
        <>
          <CategoryList_SubCaNav />
          <CategoryList_Sort
            totalResults={bookData[0] && bookData[0].totalResults}
            sortField={sortField}
            handleSortField={handleSortField}
            sortOption={sortOption}
            handleSortOption={handleSortOption}
            listQty={listQty}
            handleListQty={handleListQty}
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
            isSoldout={isSoldout}
            handleIsSoldout={handleIsSoldout}
            handleSelectAll={handleSelectAll}
            isCheckedAll={isCheckedAll}
            handleIsCheckedAll={handleIsCheckedAll}
            handleCheckList={handleCheckList}
            parameterArr={parameterArr}
            handleAddCartAll={handleAddCartAll}
            handleAddWishlistAll={handleAddWishlistAll}
          />
          <CategoryList_Products
            bookData={bookData}
            checkList={checkList}
            handleCheckList={handleCheckList}
            quantity={quantity}
            handleQuantity={handleQuantity}
            handleToggleWishlist={handleToggleWishlist}
            wishlist={wishlist}
          />
          <CategoryList_Sort
            totalResults={bookData[0] && bookData[0].totalResults}
            sortField={sortField}
            handleSortField={handleSortField}
            sortOption={sortOption}
            handleSortOption={handleSortOption}
            listQty={listQty}
            handleListQty={handleListQty}
            currentPage={currentPage}
            handleCurrentPage={handleCurrentPage}
            isSoldout={isSoldout}
            handleIsSoldout={handleIsSoldout}
            handleSelectAll={handleSelectAll}
            isCheckedAll={isCheckedAll}
            handleIsCheckedAll={handleIsCheckedAll}
            handleCheckList={handleCheckList}
            parameterArr={parameterArr}
            handleAddCartAll={handleAddCartAll}
            handleAddWishlistAll={handleAddWishlistAll}
          />
        </>
      ) : (
        <div className="noDataNotice">
          <span>현재 카테고리에 해당하는 상품이 없습니다.</span>
        </div>
      )}
    </MainSection>
  );
}
