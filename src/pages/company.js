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
  width: 100%;
  padding: 0 20px;
`;

const CompanyImage = styled.img`
  width: 100px;
  height: 100px;
`;

const CompanyContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const CompanyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

function Company() {
  return (
    <Container>
      <Header title="뒤로가기" />
      <Main>
        <CompanyBox>
          <CompanyContainer>
            <CompanyImage src="/images/kurly.png" />
            <div style={{ marginTop: 10 }}>당근마켓</div>
          </CompanyContainer>
          <CompanyContainer>
            <CompanyImage src="/images/kurly.png" />
            <div style={{ marginTop: 10 }}>당근마켓</div>
          </CompanyContainer>
          <CompanyContainer>
            <CompanyImage src="/images/kurly.png" />
            <div style={{ marginTop: 10 }}>당근마켓</div>
          </CompanyContainer>
        </CompanyBox>
      </Main>
    </Container>
  );
}

export default Company;
