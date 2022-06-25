import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Container from "../components/Container";
import QRCode from "react-qr-code";
import MainContainer from "../components/MainContainer";
import TextInput from "../components/TextInput";
import OnelineInput from "../components/onelineInput";
import EmailInput from "../components/EmailInput";

const PhotoDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 16px;
  margin-bottom: 20px;
`;

const Photo = styled.div`
  background-color: #f1f1f5;
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

function Information() {
  return (
    <div>
      <Header title="내 정보"></Header>
      <MainContainer>
        <Title>사진</Title>
        <PhotoDiv>
          <Photo></Photo>
        </PhotoDiv>

        <div style={{ fontSize: "12px" }}>
          <Title>한줄 설명</Title>
          <div style={{ lineBreak: "pre-line" }}>
            세계적인 유망주인 가비(바르셀로나)부터 이미 슈퍼스타가 된 엘링
            홀란드(맨체스터 시티), 킬리안 음바페(파리 생제르맹) 등 수많은
            선수들이 나열됐다. 29살인 선수 중 몸값 1위도 소개됐는데, 손흥민의
            얼굴이 딱 등장했다.
          </div>
          <DividedLine />
          <Title>이메일</Title>
          <div>gakk@naver.com</div>
          <Title>연락처</Title>
          <div>010-0000-0000</div>
          <Title>사는 곳</Title>
          <div>경기도 시흥이 어쩌주 저쩌구 도시</div>
          <DividedLine />
          <Title>부서</Title>
          <div>디자인 팀</div>
          <Title>직무</Title>
          <div>UX designer</div>
          <Title>기술스택</Title>
          <div>redux, redux-saga 두줄주둘 게이스 ㅎㅎㅎㅎㅎㅎㅎ ㄷ두릊두줄</div>
          <DividedLine />
          <Title>취미</Title>
          <div>탁구, 게임 등등등....</div>
          <Title>MBTI</Title>
          <div>예시 문구 문구</div>
          <Title>링크</Title>
          <div>https://wwit.design/2022/05/28/trost/</div>
        </div>
      </MainContainer>
    </div>
  );
}

export default Information;
