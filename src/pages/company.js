import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Container from "../components/Container";
import MainContainer from "../components/MainContainer";

const CompanyImage = styled.img`
  max-width: 100px;
  max-height: 100px;
  padding: 20px;
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

const NextButton = styled.div`
  width: 90%;
  border-radius: 10px;
  background-color: #1565c0;
  padding: 15px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: bold;
`;

function Company() {
  return (
    <Container>
      <Header title="뒤로가기" />
      <MainContainer>
        <div style={{ color: "#1565C0", fontWeight: "bold", fontSize: 20 }}>
          야나야
        </div>
        <div style={{ fontSize: 18 }}>회사를 선택해주세요</div>
        <div style={{ marginTop: 20 }}>
          <CompanyBox>
            <CompanyContainer>
              <CompanyImage src="/images/carrot.png" />
              <CompanyName>당근마켓</CompanyName>
            </CompanyContainer>
            <CompanyContainer>
              <CompanyImage src="/images/kurly.png" />
              <CompanyName>마켓컬리</CompanyName>
            </CompanyContainer>
            <CompanyContainer>
              <CompanyImage src="/images/house.png" />
              <CompanyName>오늘의집</CompanyName>
            </CompanyContainer>
          </CompanyBox>

          <CompanyBox>
            <CompanyContainer>
              <CompanyImage src="/images/gikple.png" />
              <CompanyName>긱플</CompanyName>
            </CompanyContainer>
            <CompanyContainer>
              <div
                style={{
                  width: "100px",
                  height: "100px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <CompanyImage src="/images/hanbit.jpeg" />
              </div>

              <CompanyName>한빛미디어</CompanyName>
            </CompanyContainer>
            <CompanyContainer>
              <CompanyImage src="/images/inflearn.png" />
              <CompanyName>인프런</CompanyName>
            </CompanyContainer>
          </CompanyBox>
        </div>
      </MainContainer>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        <NextButton onClick={() => {}}>다음으로</NextButton>
      </div>
    </Container>
  );
}

export default Company;
