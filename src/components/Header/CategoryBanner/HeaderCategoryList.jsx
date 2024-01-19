import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

export default function HeaderCategoryList({ mall }) {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    axios
      .get(`http://192.168.50.16:9090/category/list/${mall}`)
      .then((result) => setCategory(result.data));
  }, []);

  const showCategoryList = (category) => {
    const arr = [];
    const repeat = Math.ceil(category.length / 20);

    for (let i = 0; i < repeat; i++) {
      const categoryArr = category.slice(20 * i, 20 * i + 20);
      arr.push(
        <ul key={i}>
          {categoryArr.map((item) => (
            <li key={item.firstD}>
              <Link to={`/category/list/${item.mall}_${item.firstD}`}>
                {item.firstD}
              </Link>
            </li>
          ))}
        </ul>
      );
    }

    return arr;
  };

  return (
    <div className="category">
      <h3>
        <Link to={`/category/main/${mall}`}>
          {category[0] && category[0].mall}
        </Link>
      </h3>
      <div className="categoryNav">{showCategoryList(category)}</div>
    </div>
  );
}
