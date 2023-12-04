import axios from 'axios';
import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';

const CategoryHot = styled.div`
  margin-top: 20px;

  .hotContainer {
    margin: 0 auto;
    margin-top: 20px;
    padding: 20px;
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
    margin-right : 330px;
    display: flex;
  }

  .hot_category_list li{
    margin-left : 20px;
    cursor: pointer;
  }

  .hot_banner {
    width: 199px;
    height: 340px;
  }

  .hot_content_container {
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

const Pre = styled.div`
  width: 40px;
  height: 20px;
  position: absolute;
  left: 1%;
  z-index: 3;
`;

const NextTo = styled.div`
  width: 40px;
  height: 20px;
  position: absolute;
  right: 1%;
  z-index: 3;
`;

const Img = styled.img`
  width: 100%;
`;

const thumbnailsSetting = {
  dots: false,
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: (
    <NextTo>
      <Img src='/img/Slide/right-arrow.svg' />
    </NextTo>
  ),
  prevArrow: (
    <Pre>
      <Img src='/img/Slide/left-arrow.svg' />
    </Pre>
  ),
};

const categorySettings = {
  dots: false,
  infinite: true,
  slidesToShow: 4,
  slidesToScroll: 4,
  nextArrow: (
    <NextTo>
      <Img src='/img/Slide/right-arrow.svg' />
    </NextTo>
  ),
  prevArrow: (
    <Pre>
      <Img src='/img/Slide/left-arrow.svg' />
    </Pre>
  ),
};

const Hot = () => {
  /** useRef */
  const ref = useRef(null);

  /** useState */
  const [hotCategoryList, setHotCategoryList] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState({
    category: '',
    item: [],
  });
  const [categoryPage, setCategoryPage] = useState(1);
  const [thumbnails, setThumbnails] = useState([]);
  const [thumbnailPage, setThumbnailPage] = useState(1);

  /** useEffect */
  useEffect(() => {
    const getData = async () => {
      const { data } = await axios({
        method: 'get',
        url: '/data/categoryMain/categoryHot.json',
      });

      setHotCategoryList(data);
      setSelectedCategory(data[0]);
      setThumbnails(hot_category_list[0].thumbnails);
    };

    getData();
  }, []);

  const onClick = (id) => {
    const category = hotCategoryList.find((obj) => obj.category === id);

    ref.current.slickGoTo(0, true);

    setSelectedCategory(category);
    setCategoryPage(1);
  };

  const categoryAfterChange = (index) => {
    const page = index / 4;

    setCategoryPage(page + 1);
  };

  const thumbnailsAfterChange = (index) => {
    console.log(index);
  };

  const hot_category_list = [
    {
      id: 'literature',
      name: '문학',
      thumbnails: ['banner_1.jpeg', 'banner_2.jpeg'],
    },
    {
      id: 'economic',
      name: '인문/경제',
      thumbnails: ['economic_banner_1.jpeg', 'economic_banner_2.jpeg'],
    },
    {
      id: 'hobby',
      name: '교양/취미',
      thumbnails: ['foreign_banner_1.jpeg', 'foreign_banner_2.jpeg'],
    },
    {
      id: 'kid',
      name: '유아동',
      thumbnails: ['hobby_banner_1.jpeg', 'hobby_banner_2.jpeg'],
    },
    {
      id: 'foreign',
      name: '외국어 IT 공부 청소년',
      thumbnails: ['kid_banner_1.jpeg', 'kid_banner_2.jpeg'],
    },
  ];

  return (
    <CategoryHot>
      <div className='hot_category'>
        <h3>분야별 HOT</h3>
        <ul className='hot_category_list'>
          {hot_category_list.map(({ id, name }) => (
            <li key={id} onClick={() => onClick(id)}>
              {name}
            </li>
          ))}
        </ul>
      </div>
      <div className='hotContainer'>
        <div className='hot_banner_content'>
          <Slider {...thumbnailsSetting} afterChange={thumbnailsAfterChange}>
            {/* {thumbnails.map((source) => ( */}
              <div>
                <img
                  className='hot_banner'
                  src="/img/CategoryMain/categoryHot_img/banner_1.jpeg"
                  alt=''
                />
              </div>
            {/* ))} */}
          </Slider>
        
          <div className='hot_content_container'>
            <div style={{ textAlign: 'right' }}>
              {categoryPage}/{selectedCategory.item.length / 4}
            </div>
            <Slider
              ref={ref}
              {...categorySettings}
              afterChange={categoryAfterChange}
            >
              {selectedCategory.item.map(
                ({ img, title, author, price, annotation }, key) => (
                  <div key={key} className='hot_content'>
                    <img className='hot_content_img' src={img} alt='' />
                    <ul className='hot_content_text'>
                      <li className='hot_text_title'>{title}</li>
                      <li className='hot_text_author grey'>{author}</li>
                      <li className='hot_text_price'>{price}</li>
                      <li className='grey'>{annotation}</li>
                    </ul>
                  </div>
                )
              )}
            </Slider>
            
          </div>
        </div>
      </div>
    </CategoryHot>
  );
};

export default Hot;

