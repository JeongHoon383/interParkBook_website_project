import React from "react";
import styled from "styled-components";
import { FaTrashAlt } from "react-icons/fa";
import { useForm } from "react-hook-form";
import axios from "axios";

const Wrapper = styled.div``;

const Form = styled.form`
  display: flex;
  align-items: center;
  padding: 20px;
  label {
    font-weight: bold;
  }
  input {
    width: 35%;
    margin: 0 10px;
  }
  button {
    color: var(--main);
  }
`;

const Admin_delete = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
  } = useForm();

  const onValid = (data) => {
    setValue("isbn13", "");
    axios
      .post(`http://192.168.50.16:9090/admin/delete`, data)
      .then((res) => alert("도서삭제완료"));
  };
  return (
    <Wrapper>
      <Form onSubmit={handleSubmit(onValid)}>
        <label>ISBN13</label>
        <input
          {...register("isbn13")}
          type="text"
          placeholder="삭제하려는 도서의 isbn13을 입력하세요"
        />
        <button>
          <FaTrashAlt />
        </button>
      </Form>
    </Wrapper>
  );
};

export default Admin_delete;
