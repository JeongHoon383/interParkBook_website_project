import { useEffect, useState } from 'react';
import CategoryList_TopNav  from '../components/CategoryList/CategoryList_TopNav';
import CategoryList_Main from '../components/CategoryList/main/CategoryList_Main';
import styled from 'styled-components';
import axios from 'axios';
import CategoryList_Products from '../components/CategoryList/main/product/CategoryList_Products';

const CategoryListContainer = styled.div`
  font-size: 12px;
  color: #666;
`;

export default function CategoryList(){
  const [data, setData] = useState([]);

  useEffect(() => {
    axios(' http://www.aladin.co.kr/ttb/api/ItemList.aspx?ttbkey=ttbgur65142158001&QueryType=itemNewAll&MaxResults=100&start=1&SearchTarget=Book&output=JS&Version=20131101&Cover=MidBig&CategoryId=1196')
    .then(result => setData(result.data))
  }, []);
  //data.item에 isbn, isbn13, itemId 있음
  return(
    <CategoryListContainer>
      <CategoryList_TopNav />
      <CategoryList_Main 
      data = {data}
      />
      <CategoryList_Products 
      data = {data}
      />
    </CategoryListContainer>
  );
}