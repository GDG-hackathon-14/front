import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import MainContainer from "../components/MainContainer";

const Div = styled.div``;

const Title = styled.h1`
  font-size: 1.2rem;
  font-weight: 700;
  color: #111111;
`;
const HeaderDiv = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 15px 0;
`;

const PhotoDiv = styled.div`
  width: 100%;
  display: flex;
  algi
`;
const PhotoTitle = styled.h1``;
const Photo = styled.div`
  background-color: #f1f1f5;
  width: 50%;
`;
const BackButton = styled.div``;
function WriteForm() {
  return (
    <Div>
      <Header title="정보를 알려주세요."></Header>
      <PhotoDiv>
        <PhotoTitle></PhotoTitle>
        <Photo>ff</Photo>
      </PhotoDiv>
    </Div>
  );
}

export default WriteForm;
