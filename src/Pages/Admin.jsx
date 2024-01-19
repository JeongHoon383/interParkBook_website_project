import React, { useState } from "react";
import { Nav } from "react-bootstrap";
import Admin_user from "../components/Admin/Admin_user";
import { useQuery } from "@tanstack/react-query";
import styled from "styled-components";
import axios from "axios";
import Admin_new from "../components/Admin/Admin_new";
import Admin_delete from "../components/Admin/Admin_delete";

const Wrapper = styled.div`
  width: 60vw;
  margin: 10px auto;
`;

const Admin = () => {
  const [tab, setTab] = useState(1);
  const { isPending, error, data } = useQuery({
    queryKey: ["repoData"],
    queryFn: () =>
      axios.get(`http://192.168.50.16:9090/admin`).then((res) => res.data),
  });

  return (
    <Wrapper>
      {isPending ? (
        "로딩중"
      ) : (
        <Nav variant="tabs" defaultActiveKey="link-1">
          <Nav.Item>
            <Nav.Link onClick={() => setTab(1)} eventKey="link-1">
              회원정보
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setTab(2)} eventKey="link-2">
              도서등록
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link onClick={() => setTab(3)} eventKey="link-3">
              도서삭제
            </Nav.Link>
          </Nav.Item>

          {tab === 1 && <Admin_user data={data} />}
        </Nav>
      )}
      {tab === 2 && <Admin_new />}
      {tab === 3 && <Admin_delete />}
    </Wrapper>
  );
};

export default Admin;
