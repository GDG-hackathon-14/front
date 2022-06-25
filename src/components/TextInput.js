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

const Input = styled.input`
  border: none;
  width: 100%;
  padding: 10px 0;
  border-bottom: 1px solid #f1f1f5;
`;
function TextInput({ title, hint }) {
  return (
    <Div>
      <Title>{title}</Title>
      <Input placeholder={hint}></Input>
    </Div>
  );
}

export default TextInput;
