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
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 20px;
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
  box-shadow: 2px 6px 16px rgba(0, 0, 0, 0.08);
`;

const CompanyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin: 20px 0;
`;

const CompanyName = styled.div`
  margin: 10px;
  font-weight: bold;
`;

function Company() {
  return (
    <Container>
      <Header title="뒤로가기" />
      <Main>
        <div style={{ color: "#1565C0", fontWeight: "bold", fontSize: 20 }}>
          야나야
        </div>
        <div style={{ fontSize: 18 }}>회사를 선택해주세요</div>
        <div style={{ marginTop: 60 }}>
          <CompanyBox>
            <CompanyContainer>
              <CompanyImage src="/images/kurly.png" />
              <CompanyName>당근마켓</CompanyName>
            </CompanyContainer>
            <CompanyContainer>
              <CompanyImage src="/images/kurly.png" />
              <CompanyName>당근마켓</CompanyName>
            </CompanyContainer>
            <CompanyContainer>
              <CompanyImage src="/images/kurly.png" />
              <CompanyName>당근마켓</CompanyName>
            </CompanyContainer>
          </CompanyBox>

          <CompanyBox>
            <CompanyContainer>
              <CompanyImage src="/images/kurly.png" />
              <CompanyName>당근마켓</CompanyName>
            </CompanyContainer>
            <CompanyContainer>
              <CompanyImage src="/images/kurly.png" />
              <CompanyName>당근마켓</CompanyName>
            </CompanyContainer>
            <CompanyContainer>
              <CompanyImage src="/images/kurly.png" />
              <CompanyName>당근마켓</CompanyName>
            </CompanyContainer>
          </CompanyBox>
        </div>
      </Main>
    </Container>
  );
}

export default Company;
