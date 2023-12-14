import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useLocation, useParams } from "react-router-dom";
import SearchBookDetail from "./SearchBookDetail";
import SearchBookBuy from "./SearchBookBuy";
import SearchBookCheckIcons from "./SearchBookCheckIcons";
import SearchLeft from "./SearchLeft";
import SearchRight from "./SearchRight";
import SearchBookResult from "./SearchBookResult";
import SearchPagination from "./SearchPagination";
import SearchReview from "./SearchReview";
import SearchTabWrap from "./SearchTabWrap";

export default function Search() {
  const location = useLocation();
  const [booklist, setBookList] = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    setBookList(location.state.data);
  }, [location.state.data]);
  // console.log(location.state.data,'112')

  /*
	useEffect(() => {
		// 서버로부터 데이터 가져오기
		axios.get('http://127.0.0.1:9090/search')
		  .then(response => {
			// 가져온 데이터를 컴포넌트 상태에 저장
			setData(response.data);
			console.log(response.data); // 데이터 확인용
		  })
		  .catch(error => {
			console.error('Error fetching data:', error);
		  });
	  }, []); // 빈 배열을 전달하여 컴포넌트가 마운트될 때 한 번만 호출
	*/

  return (
    <>
      <SearchTabWrap />
      <SearchBookCheckIcons />
      {/* <div>1</div> */}
      {booklist &&
        booklist.map((book) => (
          <div key={book.bid}>
            {console.log(book)}

            <SearchBookDetail
              // title={book.title && book.title}
              title={book?.title}
              cover={book?.cover}
              publisher={book?.publisher}
              P_date={book?.P_date}
              author={book?.author}
              description={book?.description}
            />
            <SearchBookBuy
              pricestandard={book.pricestandard}
              pricesales={book.pricesales}
            />
          </div>
        ))}

      {/* 
				<SearchRight/> */}
      <SearchPagination />

      <SearchReview />
      <SearchPagination />
      <div className="bottomdiv">
        <img src="../img/power.png" className="bottomdivimg" alt="" />
      </div>
    </>
  );
}
