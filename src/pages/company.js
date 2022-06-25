import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Container from "../components/Container";

const Title = styled.h1`
  color: white;
  font-size: 30px;
`;

function Company() {
  return (
    <Container>
      <Header>
        <div>뒤로가기</div>
      </Header>
    </Container>
  );
}

export default Company;
