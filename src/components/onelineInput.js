import React from "react";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  padding: 35px 16px 15px 16px;
`;

const Title = styled.div`
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 10px;
`;

const Input = styled.textarea`
  border: none;
  padding: 10px 0;
  width: 100%;
  height: 110px;
  border-bottom: 1px solid #f1f1f5;
`;

function OnelineInput() {
  return (
    <Div>
      <Title>한줄설명</Title>
      <Input
        maxlength="100"
        placeholder="세계적인 유망주인 가비(바르셀로나)부터 이미 슈퍼스타가 된 엘링 홀란드(맨체스터 시티), 킬리안 음바페(파리 생제르맹) 등 수많은 선수들이 나열됐다. 29살인 선수 중 몸값 1위도 소개됐는데, 손흥민의 얼굴이 딱 등장했다."
      ></Input>
    </Div>
  );
}

export default OnelineInput;
