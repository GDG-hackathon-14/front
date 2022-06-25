import React, { useState } from "react";
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
const Select = styled.select`
  border: none;
  width: 100%;
  margin-left: 10px;
  border-bottom: 1px solid #f1f1f5;
  padding: 10px 0;
`;

function MBTIInput() {
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }
  return (
    <Div>
      <Title>MBTI</Title>
      <Select onChange={handleChange}>
        <option value="1">INTJ</option>
        <option value="2">INTP</option>
        <option value="3">ENTJ</option>
        <option value="4">ENTP</option>
        <option value="5">INFJ</option>
        <option value="6">INFP</option>
        <option value="7">ENFJ</option>
        <option value="8">ENFP</option>
        <option value="9">ISTJ</option>
        <option value="10">ISFJ</option>
        <option value="11">ESTJ</option>
        <option value="12">ESFJ</option>
        <option value="13">ISTP</option>
        <option value="14">ISFP</option>
        <option value="15">ESTP</option>
        <option value="16">ESFP</option>
      </Select>
    </Div>
  );
}

export default MBTIInput;
