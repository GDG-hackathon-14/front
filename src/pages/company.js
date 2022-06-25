import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Container from "../components/Container";

const Title = styled.h1`
  color: white;
  font-size: 30px;
`;

const Main = styled.div`
  display: flex;
  flex: 1;
`;

function Company() {
  return (
    <Container>
      <Header title="뒤로가기" />
      <Main>
        <div>당근마켓</div>
      </Main>
    </Container>
  );
}

export default Company;
