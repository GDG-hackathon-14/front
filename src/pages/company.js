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
      <Header title="뒤로가기" />
    </Container>
  );
}

export default Company;
