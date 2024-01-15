import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components";
import CommonSlider from "../../common/CommonSlider";
import { setArrayInArray } from "../../util/array";

const CategoryHot = styled.div`
  margin-top: 20px;

  .hot_Container {
    margin: 0 auto;
    margin-top: 20px;
    padding: 20px 0 0 20px;
    width: 958px;
    height: 380px;
    border: solid 1px #d8d8d8;
  }

  .hot_banner_content {
    display: flex;
  }

  .hot_category {
    display: flex;
  }

  .hot_category h3 {
    flex: 1;
  }

  .hot_category_list {
    margin-right: 330px;
    display: flex;
  }

  .hot_category_list li {
    margin-left: 20px;
    cursor: pointer;
  }

  .hot_banner {
    width: 199px;
    height: 340px;
  }

  .hot_content_container {
    display: flex;
    width: 739px;
    height: 340px;
  }

  .hot_content {
    margin-left: 20px;
    width: 172px;
  }

  .hot_content_img {
    margin-left: 20px;
    padding-top: 25px;
    width: 125px;
    height: 179px;
  }

  .hot_content_text {
    margin: 16px 0 0 20px;
  }

  .hot_text_title {
    font-weight: bold;
    margin-bottom: 10px;
  }

  .hot_text_author {
    margin-bottom: 10px;
  }

  .hot_text_price {
    margin-bottom: 10px;
    font-weight: bold;
  }
`;

// const Pre = styled.div`
//   width: 40px;
//   height: 20px;
//   position: absolute;
//   left: 1%;
//   z-index: 3;
// `;

// const NextTo = styled.div`
//   width: 40px;
//   height: 20px;
//   position: absolute;
//   right: 1%;
//   z-index: 3;
// `;

// const Img = styled.img`
//   width: 100%;
// `;

// const thumbnailsSetting = {
//   dots: false,
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   nextArrow: (
//     <NextTo>
//       <Img src='/img/Slide/right-arrow.svg' />
//     </NextTo>
//   ),
//   prevArrow: (
//     <Pre>
//       <Img src='/img/Slide/left-arrow.svg' />
//     </Pre>
//   ),
// };

const hot_category_list = [
  {
    id: "literature",
    name: "문학",
    thumbnailList: ["banner_1.jpeg", "banner_2.jpeg"],
  },
  {
    id: "economic",
    name: "인문/경제",
    thumbnailList: ["economic_banner_1.jpeg", "economic_banner_2.jpeg"],
  },
  {
    id: "hobby",
    name: "교양/취미",
    thumbnailList: ["foreign_banner_1.jpeg", "foreign_banner_2.jpeg"],
  },
  {
    id: "kid",
    name: "유아동",
    thumbnailList: ["hobby_banner_1.jpeg", "hobby_banner_2.jpeg"],
  },
  {
    id: "foreign",
    name: "외국어 IT 공부 청소년",
    thumbnailList: ["kid_banner_1.jpeg", "kid_banner_2.jpeg"],
  },
];

const Hot = () => {
  /** useState */
  const [hotDataList, setHotDataList] = useState([]);
  const [dataList, setDataList] = useState([]);
  const [selectedData, setSelectedData] = useState({
    selectedId: "",
    thumbnailList: [],
    bookList: [],
  });

  /** useEffect */
  useEffect(() => {
    axios({
      method: "get",
      url: "http://127.0.0.1:9090/category/main/categoryHot",
    }).then((result) => {
      setHotDataList(result.data);
    });
  }, []);

  useEffect(() => {
    const getData = async () => {
      const { data } = await axios({
        method: "get",
        url: "/data/categoryMain/categoryHot.json",
      });

      const initId = data[0].category;
      const initThumbnailList = hot_category_list[0].thumbnailList;
      const initBookList = setArrayInArray({ array: data[0].item, len: 4 });

      setDataList(data);
      setSelectedData({
        id: initId,
        thumbnailList: initThumbnailList,
        bookList: initBookList,
      });
    };

    getData();
  }, []);

  const onClick = (id, index) => {
    const data = dataList.find((obj) => obj.category === id);

    const thumbnailList = hot_category_list[index].thumbnailList;
    const bookList = setArrayInArray({ array: data.item, len: 4 });

    setSelectedData({ id, thumbnailList, bookList });
  };

  return (
    <CategoryHot>
      <div className="hot_category">
        <h3>분야별 HOT</h3>
        <ul className="hot_category_list">
          {hot_category_list.map(({ id, name }, index) => (
            <li key={id} onClick={() => onClick(id, index)}>
              {name}
            </li>
          ))}
        </ul>
      </div>

      <div className="hot_Container">
        <div className="hot_banner_content">
          <CommonSlider
            data={selectedData.thumbnailList}
            renderItem={(soruce) => (
              <div key={soruce}>
                <img
                  className="hot_banner"
                  src={`/img/CategoryMain/categoryHot_img/${soruce}`}
                  alt=""
                />
              </div>
            )}
          />

          <CommonSlider
            data={selectedData.bookList}
            renderItem={({ id, renderList }) => (
              <div className="hot_content_container" key={id}>
                {renderList.map(({ img, title, author, price, annotation }) => (
                  <div className="hot_content">
                    <img className="hot_content_img" src={img} alt="" />
                    <ul className="hot_content_text">
                      <li className="hot_text_title">{title}</li>
                      <li className="hot_text_author grey">{author}</li>
                      <li className="hot_text_price">{price}</li>
                      <li className="grey">{annotation}</li>
                    </ul>
                  </div>
                ))}
              </div>
            )}
          />
        </div>
      </div>
    </CategoryHot>
  );
};

export default Hot;
