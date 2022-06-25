import React, { useState } from "react";
import styled from "styled-components";
const EmailDiv = styled.div`
  width: 100%;
  padding: 35px 16px 15px 16px;
`;
const EmailTitle = styled.h1`
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 10px;
`;
const EmailId = styled.input`
  border: none;
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f5;
  margin-right: 10px;
`;
const EmailInputDiv = styled.div`
  display: flex;
  align-items: center;
`;
const Select = styled.select`
  border: none;
  width: 40%;
  margin-left: 10px;
  border-bottom: 1px solid #f1f1f5;
  padding: 10px 0;
`;

const HideInput = styled.input`
  border: none;
  padding: 5px 0;
  background-color: #f1f1f5;
  margin-top: 5px;
  position: absolute;
  left: 53%;
`;

function EmailInput() {
  const [value, setValue] = useState("");
  function handleChange(e) {
    setValue(e.target.value);
  }

  return (
    <EmailDiv>
      <EmailTitle>이메일</EmailTitle>
      <EmailInputDiv>
        <EmailId placeholder="kkkkkk"></EmailId>
        <>@</>
        <Select onChange={handleChange}>
          <option value="">직접 입력</option>
          <option value="1">naver.com</option>
          <option value="2">gmail.com</option>
          <option value="3">daum.net</option>
          <option value="4">hanmail.net</option>
          <option value="5">nate.com</option>
        </Select>
      </EmailInputDiv>
      {value == "" ? <HideInput></HideInput> : null}
    </EmailDiv>
  );
}

export default EmailInput;
