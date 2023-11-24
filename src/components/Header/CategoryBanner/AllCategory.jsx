import React from 'react';
import Domestic from './Domestic';
import Foreign from './Foreign';
import Goods from './Goods';

export default function AllCategory() {
  return (
    <div className="allCategory">
      <div className="mainNav">
        <Domestic />
        <Foreign />
        <Goods />
      </div>
    </div>
  );
}
