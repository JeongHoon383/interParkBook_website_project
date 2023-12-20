import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import CategoryList_Title from "./categoryList_Title";
import CategoryList_SubCaNav from "./CategoryList_SubCaNav";
import CategoryList_Sort from "./CategoryList_Sort";
import CategoryList_Products from "./product/CategoryList_Products";
import { useParams } from "react-router-dom";
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

export default function CategoryList_MainSection({userId}) {
  const parameterArr = useParams().categoryPath.split("_");
  const [bookData, setBookData] = useState([]);
  const [listQty, setListQty] = useState(20);
  const [currentPage, setCurrentPage] = useState(1);
  const [isSoldout, setIsSoldout] = useState("상품있음");
  const [checkList, setCheckList] = useState([]);
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [sortField, setSortField] = useState("pubDate");
  const [sortOption, setSortOption] = useState("desc");
  const [quantity, setQuantity] = useState([]);

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
    if (flag === "plus") {
      currentQty += 1;
    } else if (flag === "minus" && currentQty > 1) {
      currentQty -= 1;
    }
    copy[idx] = {
      "isbn13" : isbn13,
      "qty" : currentQty
    };
    setQuantity(copy);
  };


  // 카테고리별, 정렬별, 페이지별 품절여부별 상품목록 불러오기
  useEffect(() => {
    let startIndex = 0;
    let endIndex = 0;

    startIndex = (currentPage - 1) * listQty + 1;
    endIndex = currentPage * listQty;

    if(sortField) {
      axios(
        `http://127.0.0.1:9090/category/list/${parameterArr[0]}/${parameterArr[1]}/${parameterArr[2]}/${parameterArr[3]}/${parameterArr[4]}/${parameterArr[5]}/${startIndex}/${endIndex}/${sortField}/${sortOption}/${isSoldout}`
      ).then((result) => {
        setBookData(result.data);
        setQuantity(result.data.map(data => ({"isbn13":data.isbn13, "qty" : 1})));
      });
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
    parameterArr[5]
  ]);

  // const axiosData = async (parameterArr, listQty, currentPage, sortField, sortOption, isSoldout) => {
  //   const startIndex = (currentPage - 1) * listQty + 1;
  //   const endIndex = currentPage * listQty;

  //   const response = await axios.get(
  //     `http://127.0.0.1:9090/category/list/${parameterArr[0]}/${parameterArr[1]}/${parameterArr[2]}/${parameterArr[3]}/${parameterArr[4]}/${parameterArr[5]}/${startIndex}/${endIndex}/${sortField}/${sortOption}/${isSoldout}`
  //   );

  //   return { data: response.data };
  // } 

  // const { 
  //   isPending,
  //   error,
  //   data : bookData
  // } = useQuery({
  //   queryKey: [...parameterArr, listQty, currentPage, sortField, sortOption, isSoldout],
  //   queryFn: () => axiosData(parameterArr, listQty, currentPage, sortField, sortOption, isSoldout),
  //   onSuccess: ({ data }) => {
  //     console.log(data);
  //     setQuantity(data.map(data => ({ "isbn13": data.isbn13, "qty": 1 })));
  //   }
  // });

  //하위 컴포넌트(CategoryList_Sort) 전체선택/선택해제 핸들링이벤트
  const handleSelectAll = (flag) => {
    if (flag) {
        bookData.map(({isbn13, title, cover, priceSales, stockStatus}) =>
          !checkList.some(checkItem => checkItem[0] === isbn13) && !stockStatus.includes('품절')
            ? setCheckList((checkList) => [...checkList, [isbn13, userId, title, cover, priceSales]])
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
    const currentPageBookQty = bookData.filter(data => !data.stockStatus.includes('품절')).length;
    checkList.length === currentPageBookQty
      ? setIsCheckedAll(true)
      : setIsCheckedAll(false);
  }, [checkList, listQty]);

  //선택한 상품들 전부 카트에 담기
  const addToCartAll = () => {
    let axiosBookData = [];
    for(const checkItem of checkList) {
      for(const quantityItem of quantity) {
        if(checkItem[0] === quantityItem.isbn13) {
          axiosBookData.push([...checkItem, quantityItem.qty])
        }
      }
    }
    
    // axios.post('http://127.0.0.1:9090/category/list', axiosBookData)
    console.log(axiosBookData);
  };

  // if (isPending) {
  //   return <p>Loading...</p>;
  // }

  // if (error) {
  //   return <p>Error: {error.message}</p>;
  // }


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
            addToCartAll={addToCartAll}
          />
          <CategoryList_Products
            bookData={bookData}
            checkList={checkList}
            handleCheckList={handleCheckList}
            userId={userId}
            quantity={quantity}
            handleQuantity={handleQuantity}
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
            addToCartAll={addToCartAll}
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
