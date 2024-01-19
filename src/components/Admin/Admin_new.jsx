import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";

const Form = styled.form`
  label {
    display: block;
    font-weight: bold;
  }
`;

const Admin_new = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch,
  } = useForm();
  const onValid = (data) => {
    console.log(data);
    axios.post(`http://192.168.50.16:9090/admin`, data).then((res) => res);
    setValue("title", "");
    setValue("author", "");
    setValue("pubDate", "");
    setValue("description", "");
    setValue("isbn13", "");
    setValue("priceSales", "");
    setValue("priceStandard", "");
    setValue("mallType", "");
    setValue("stockStatus", "");
    setValue("mileage", "");
    setValue("cover", "");
    setValue("categoryId", "");
    setValue("categoryName", "");
    setValue("publisher", "");
    setValue("salesPoint", "");
    alert("도서등록완료");
  };
  return (
    <Form onSubmit={handleSubmit(onValid)}>
      <div>
        <label htmlFor="">title</label>
        <input {...register("title", { required: true })} type="text" />
      </div>
      <div>
        <label htmlFor="">author</label>
        <input {...register("author", { required: true })} type="text" />
      </div>
      <div>
        <label htmlFor="">pubDate</label>
        <input {...register("pubDate", { required: true })} type="text" />
      </div>
      <div>
        <label htmlFor="">description</label>
        <input {...register("description", { required: true })} type="text" />
      </div>
      <div>
        <label htmlFor="">isbn13</label>
        <input {...register("isbn13", { required: true })} type="text" />
      </div>
      <div>
        <label htmlFor="">priceSales</label>
        <input {...register("priceSales", { required: true })} type="text" />
      </div>
      <div>
        <label htmlFor="">priceStandard</label>
        <input {...register("priceStandard", { required: true })} type="text" />
      </div>
      <div>
        <label htmlFor="">mallType</label>
        <input {...register("mallType", { required: true })} type="text" />
      </div>
      <div>
        <label htmlFor="">stockStatus</label>
        <input {...register("stockStatus", { required: true })} type="text" />
      </div>
      <div>
        <label htmlFor="">mileage</label>
        <input {...register("mileage", { required: true })} type="text" />
      </div>
      <div>
        <label htmlFor="">cover</label>
        <input {...register("cover", { required: true })} type="text" />
      </div>
      <div>
        <label htmlFor="">categoryId</label>
        <input {...register("categoryId", { required: true })} type="text" />
      </div>
      <div>
        <label htmlFor="">categoryName</label>
        <input {...register("categoryName", { required: true })} type="text" />
      </div>
      <div>
        <label htmlFor="">publisher</label>
        <input {...register("publisher", { required: true })} type="text" />
      </div>
      <div>
        <label htmlFor="">salesPoint</label>
        <input {...register("salesPoint", { required: true })} type="text" />
      </div>
      <button type="submit">도서등록하기</button>
    </Form>
  );
};

export default Admin_new;
