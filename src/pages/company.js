import React, { useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Container from "../components/Container";
import MainContainer from "../components/MainContainer";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();
  const [company, setCompany] = useState();
  const [name, setName] = useState();

  const CompanyCotainers = ({ children, compId, compName }) => {
    return (
      <CompanyContainer
        onClick={() => {
          setCompany(compId);
          setName(compName);
        }}
      >
        {children}
      </CompanyContainer>
    );
  };

  return (
    <Container>
      <Header title="뒤로가기" />
      <MainContainer>
        <div style={{ color: "#1565C0", fontWeight: "bold", fontSize: 20 }}>
          야, 나야
        </div>
        <div style={{ fontSize: 18 }}>
          {name ? name : "재직하는 회사를 선택해주세요"}
        </div>
        <div style={{ marginTop: 20 }}>
          <CompanyBox>
            <CompanyCotainers compId={1} compName={"당근마켓"}>
              <CompanyImage src="/images/carrot.png" />
              <CompanyName>당근마켓</CompanyName>
            </CompanyCotainers>
            <CompanyCotainers compId={2} compName={"마켓컬리"}>
              <CompanyImage src="/images/kurly.png" />
              <CompanyName>마켓컬리</CompanyName>
            </CompanyCotainers>
            <CompanyCotainers compId={3} compName={"오늘의집"}>
              <CompanyImage src="/images/house.png" />
              <CompanyName>오늘의집</CompanyName>
            </CompanyCotainers>
          </CompanyBox>

          <CompanyBox>
            <CompanyCotainers compId={4} compName={"긱플"}>
              <CompanyImage src="/images/gikple.png" />
              <CompanyName>긱플</CompanyName>
            </CompanyCotainers>
            <CompanyCotainers compId={5} compName={"한빛미디어"}>
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
            </CompanyCotainers>
            <CompanyCotainers compId={6} compName={"인프런"}>
              <CompanyImage src="/images/inflearn.png" />
              <CompanyName>인프런</CompanyName>
            </CompanyCotainers>
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
        <NextButton
          onClick={() => {
            if (company) {
              navigate("/writeform");
              window.localStorage.setItem("company", company);
            }
          }}
        >
          다음으로
        </NextButton>
      </div>
    </Container>
  );
}

export default Company;
