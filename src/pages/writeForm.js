import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";
import TextInput from "../components/TextInput";
import EmailInput from "../components/EmailInput";
import OnelineInput from "../components/onelineInput";

const Div = styled.div``;

const PhotoDiv = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 16px;
`;
const PhotoTitle = styled.h1`
  width: 100%;
  font-size: 1rem;
  font-weight: 500;
`;
const Photo = styled.div`
  background-color: #f1f1f5;
  width: 30%;
  height: 90px;
  border-radius: 6px;
`;

function WriteForm() {
  return (
    <Div>
      <Header title="정보를 알려주세요."></Header>
      <MainContainer>
        <PhotoDiv>
          <PhotoTitle>사진</PhotoTitle>
          <Photo></Photo>
        </PhotoDiv>
        <TextInput title="이름" hint="홍길동"></TextInput>
        <TextInput title="성별" hint="남자"></TextInput>
        <OnelineInput></OnelineInput>
        <EmailInput />
        <TextInput title="연락처" hint="010-9999-9999"></TextInput>
        <TextInput title="사는 곳" hint="경기도 시흥시..."></TextInput>
        <TextInput title="부서" hint="디자인 팀"></TextInput>
        <TextInput title="직무" hint="UX designer"></TextInput>
        <TextInput title="취미" hint="탁구, 게임 등..."></TextInput>
        <TextInput title="직급" hint="사원"></TextInput>
      </MainContainer>
    </Div>
  );
}

export default WriteForm;
