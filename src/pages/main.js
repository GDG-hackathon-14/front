import React, { useEffect, useState } from "react";
import Splash from "./splash";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Div = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.4),
      rgba(0, 0, 0, 0.4)
    ),
    url("${process.env.PUBLIC_URL}/images/main_background_image.png");
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  padding-top: 110%;
`;
const SubTitle = styled.div`
  font-size: 1rem;
`;
const Title = styled.div`
  font-size: 2rem;
`;
const TitleDiv = styled.div`
  color: white;
  font-weight: 700;
  padding-left: 16px;
`;
const StartButton = styled.button`
  padding: 15px 0;
  background-color: #1565c0;
  width: 90%;
  color: white;
  font-size: 1rem;
  font-weight: 700;
  margin-top: 30px;
  border-radius: 10px;
  border: none;
`;
const ButtonDiv = styled.div`
  display: flex;
  justify-content: center;
`;

function Main() {
  const [showSplash, setShowSplash] = useState(true);
  const [code, setCode] = useState();

  useEffect(() => {
    setTimeout(() => {
      setShowSplash(false);
    }, 3500);

    fetch("http://34.64.143.215:8080/api/member/login", {
      method: "post",
      body: JSON.stringify({
        email: "minah@nate.com",
        password: "1234",
      }),
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
        "Access-Control-Allow-Credentials": true,
      },
    })
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((response) => {
        console.log(response);
        const { memberId, memberCustomUrl } = response;
        window.localStorage.setItem("memberId", memberId);
        if (memberCustomUrl) {
          window.localStorage.setItem("memberCustomUrl", memberCustomUrl);
        }
      });

    // 로그인 처리
    // const { memberId, memberCustomUrl } = {
    //   memberId: "1",
    //   memberCustomUrl: "",
    // };
    // window.localStorage.setItem("memberId", memberId);
    // if (memberCustomUrl) {
    //   window.localStorage.setItem("memberCustomUrl", memberCustomUrl);
    //   setCode(memberCustomUrl);
    // }
  }, []);

  return (
    <Div>
      {showSplash ? <Splash /> : <></>}
      <TitleDiv>
        <SubTitle>야, 나야</SubTitle>
        <Title>
          함께 일하는 동료를
          <br />
          알고 싶을 때
        </Title>
      </TitleDiv>
      <ButtonDiv>
        <StartButton>
          {code ? (
            <Link
              to={`/information?code=${code}`}
              style={{ textDecoration: "none", color: "white" }}
            >
              내 정보 보기
            </Link>
          ) : (
            <Link
              to="/company"
              style={{ textDecoration: "none", color: "white" }}
            >
              시작하기
            </Link>
          )}
        </StartButton>
      </ButtonDiv>
    </Div>
  );
}

export default Main;
