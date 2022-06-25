import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import { useLocation, useNavigate } from "react-router-dom";

const PhotoDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 40px 16px;
  margin-bottom: 10px;
`;

const Photo = styled.div`
  background-color: #f1f1f5;
  background-image: ${(props) => props.path};
  width: 100px;
  height: 100px;
  border-radius: 6px;
`;

const Title = styled.div`
  color: #767676;
  margin: 10px 0;
  font-size: 14px;
`;

const DividedLine = styled.div`
  background-color: #90caf9;
  height: 1px;
  width: 100%;
  margin: 20px 0;
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

function Information({ match }) {
  const navigate = useNavigate();
  const location = useLocation();
  const [data, setData] = useState({
    compId: 1,
    profileImageUrl: "myimage",
    memberName: "dahye",
    email: "test@nate.com",
    phoneNumber: "01012341234",
    gender: 0,
    deptName: "IT개발팀",
    address: "서울 강남구 테헤란로",
    task: "프론트엔드",
    position: "사원",
    mbti: "ENFJ",
    links: ["http://blog.naver.com/test", "https://brunch.co.kr"],
    description: "안녕하세요",
    memberCustomUrl: "abcd12345@@!#!",
    hobby: "스케이트",
    techSkill: "java",
  });

  useEffect(() => {
    const code = location.search.split("=")[1];
    window.localStorage.setItem("memberCustomUrl", "1234");
    fetch(`//${code}`)
      .then((res) => res.json())
      .then((response) => {});
  }, [location]);

  return (
    <div>
      <Header title="내 정보"></Header>
      <MainContainer>
        {data && (
          <>
            <PhotoDiv>
              <Photo path={data.profileImageUrl} />
              <div style={{ marginTop: 10 }}>{data.memberName}</div>
              <div
                style={{
                  margin: "10px 0",
                  height: 1,
                  width: "160px",
                  backgroundColor: "#aaa",
                }}
              ></div>
              <div>{data.email}</div>
            </PhotoDiv>

            <div style={{ fontSize: "12px" }}>
              <Title>한줄 설명</Title>
              <div style={{ lineBreak: "pre-line" }}>{data.description}</div>
              <DividedLine />
              <Title>이메일</Title>
              <div>{data.email}</div>
              <Title>연락처</Title>
              <div>{data.phoneNumber}</div>
              <Title>사는 곳</Title>
              <div>{data.address}</div>
              <DividedLine />
              <Title>부서</Title>
              <div>{data.deptName}</div>
              <Title>직급</Title>
              <div>{data.position}</div>
              <Title>직무</Title>
              <div>{data.task}</div>
              <Title>기술스택</Title>
              <div>{data.techSkill}</div>
              <DividedLine />
              <Title>취미</Title>
              <div>{data.hobby}</div>
              <Title>MBTI</Title>
              <div>{data.mbti}</div>
              <Title>링크</Title>
              {data.links.map((link) => (
                <div>
                  <a>{link}</a>
                </div>
              ))}
            </div>
          </>
        )}
      </MainContainer>
      <div
        style={{
          width: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
          position: "sticky",
          bottom: "20px",
        }}
      >
        <NextButton
          onClick={() => {
            const code = window.localStorage.getItem("memberCustomUrl");
            navigate(`/qrcode?code=${code}`);
          }}
        >
          QR 코드
        </NextButton>
      </div>
    </div>
  );
}

export default Information;
