import React from "react";
import { Table } from "react-bootstrap";

const Admin_user = ({ data }) => {
  function star(data, star) {
    let arr = data.split("");
    arr.reverse().splice(0, star);
    return arr.reverse().join("") + "**";
  }
  return (
    <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>이름</th>
          <th>유저아이디</th>
          <th>전화번호</th>
          <th>이메일</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((v, i) => (
            <tr>
              <td>{i + 1}</td>
              <td>{star(v.name, 2)}</td>
              <td>{star(v.id, 2)}</td>
              <td>{star(v.phone, 4)}**</td>
              <td>{v.email.replace(/(.{3}(?=@))/, "***")}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default Admin_user;
