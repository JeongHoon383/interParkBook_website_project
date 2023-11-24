import { useState, useEffect } from "react";
import styled from "styled-components";
import axios from 'axios';
import CategoryList_Title from "./categoryList_Title";
import CategoryList_SubCaNav from "./CategoryList_SubCaNav";
import CategoryList_Sort from "./CategoryList_Sort";
import CategoryList_Products from './product/CategoryList_Products';

const MainLayout = styled.div`
  width: 770px;
  margin: 0 auto;
  padding-bottom: 30px;
`;

export default function CategoryList_Main(){
  const [data, setData] = useState([]);
  const [listQty, setListQty] = useState('20');
  const [currentPage, setCurrentPage] = useState(1);
  const [isSoldout, setIsSoldout] = useState('0');

  useEffect(() => {
    axios(`http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbgur65142158001&QueryType=itemNewAll&MaxResults=${listQty}&start=${currentPage}&outofStockfilter=${isSoldout}&SearchTarget=Book&output=JS&Version=20131101&Cover=MidBig&CategoryId=1196`)
    .then(result => setData(result.data))
  }, [listQty, currentPage, isSoldout]);
  //data.item에 isbn, isbn13, itemId 있음

  return(
    <MainLayout>
      <CategoryList_Title 
      title = {data.searchCategoryName}
      />
      <CategoryList_SubCaNav />
      <CategoryList_Sort 
      data = {data}
      listQty = {listQty}
      setListQty = {setListQty}
      currentPage = {currentPage}
      setCurrentPage = {setCurrentPage}
      isSoldout = {isSoldout}
      setIsSoldout = {setIsSoldout}
      />
      <CategoryList_Products 
      data = {data}
      />
      <CategoryList_Sort 
      data = {data}
      listQty = {listQty}
      setListQty = {setListQty}
      currentPage = {currentPage}
      setCurrentPage = {setCurrentPage}
      isSoldout = {isSoldout}
      setIsSoldout = {setIsSoldout}
      />
    </MainLayout>
  );
}