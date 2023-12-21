import React from "react";
import { ImArrowDown } from "react-icons/im";
import { PiArrowElbowDownRightLight } from "react-icons/pi";
import { BsCart2 } from "react-icons/bs";
import { BsCreditCard } from "react-icons/bs";
import styled from "styled-components";

const Searchbookbuycontainer = styled.div`
  //border:4px solid cadetblue;
  float: right;
  padding-top: 12px;
  padding-left: 15px;

  clear: both;
  font-size: 9px;
  line-height: 12px;

  width: 150px;

  margin-top: 50px;
`;

const Searchbookbuyprices = styled.div`
  // border: 4px solid salmon;
  font-weight: 300;
`;

const Nodiscount = styled.p`
  color: #616060;
  border-bottom: 1px dotted lightgray;
  width: 90px;
`;

const Discountedpriceboxup = styled.div`
  color: #ce2929;
  font-weight: 200;
  display: flex;
  white-space: nowrap;
  font-family: "dotum", sans-serif;
`;
const Bookcartncard = styled.div`
  /* display:flex; */
  /* border-top: 2px; */
  // border : 5px solid red;
  justify-content: center;
  flex-wrap: wrap;
`;

const Salesindex = styled.p`
  margin-top: 7px;
  display: flex;
  flex-wrap: nowrap;
  gap: 3px;
  color: pink;
  clear: both;
`;

const Salesindexred = styled.p`
  color: #ce2929;
`;

const Discountpercentbox = styled.div`
  color: #2ba5e4;
  font-weight: 200;
  font-family: "dotum", sans-serif;
`;

const Discountpercent = styled.p`
  background: url(//qi-b.qoo10cdn.com/renewPark/reBookpark/search/bg_reply.gif)
    no-repeat 1px 3px;
  padding-left: 7px;
`;

const Addbookcart = styled.img`
  width: 90px;
  height: 15px;
`;
const Buynow = styled.img`
  width: 90px;
  height: 15px;
`;

export default function SearchBookBuy({
  book,
  priceStandard,
  priceSales,
  mileage,
  salesPoint,
}) {
  return (
    <>
      <Searchbookbuycontainer>
        <Searchbookbuyprices>
          <Nodiscount>{priceStandard}</Nodiscount>

          <Discountedpriceboxup>
            <p className="discountedprice">{priceSales}</p>
          </Discountedpriceboxup>

          <Discountpercentbox>
            <Discountpercent>650 (5%)</Discountpercent>
          </Discountpercentbox>
        </Searchbookbuyprices>

        <Bookcartncard>
          <Addbookcart
            src="https://qi-b.qoo10cdn.com/renewPark/search/btn_bookcart.gif"
            className="addbookcart"
            alt=""
          ></Addbookcart>

          <Buynow
            src="https://qi-b.qoo10cdn.com/renewPark/search/btn_buy.gif"
            className="buynow"
            alt=""
          ></Buynow>
        </Bookcartncard>

        <Salesindex>판매자수 {salesPoint}</Salesindex>

        <Salesindexred>{mileage}</Salesindexred>
      </Searchbookbuycontainer>
    </>
  );
}
