import React from 'react';
import HeaderCategoryList from './HeaderCategoryList';

export default function AllCategory() {
  return (
    <div className="allCategory">
      <div className="mainNav">
        <HeaderCategoryList
          mall={'국내도서'}
        />
        <HeaderCategoryList
          mall={'외국도서'}
        />
        <HeaderCategoryList
          mall={'전자책'}
        />
      </div>
    </div>
  );
}
