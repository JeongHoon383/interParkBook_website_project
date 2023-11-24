import CategoryList_TopNav  from '../components/CategoryList/CategoryList_TopNav';
import CategoryList_Main from '../components/CategoryList/main/CategoryList_Main';
import styled from 'styled-components';

const CategoryListContainer = styled.div`
  font-size: 12px;
  color: #666;
`;

export default function CategoryList(){
  return(
    <CategoryListContainer>
      <CategoryList_TopNav />
      <CategoryList_Main />
    </CategoryListContainer>
  );
}