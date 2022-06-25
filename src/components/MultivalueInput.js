import React, { useState } from "react";
import styled from "styled-components";
import MultipleValueTextInput from "react-multivalue-text-input";

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

const inputstyle = {
  border: "none",
  width: "100%",
  padding: "10px 0",
  borderBottom: "1px solid #f1f1f5",
};

function MultivalueInput({ title, hint }) {
  const [multivalue, setMultivalue] = useState([]);
  return (
    <Div>
      <Title>{title}</Title>
      <MultipleValueTextInput
        style={inputstyle}
        onItemAdded={(item, allItem) => setMultivalue(allItem)}
        onItemDeleted={(item, allItem) => setMultivalue(allItem)}
        name="item-input"
        placeholder={hint}
      ></MultipleValueTextInput>
    </Div>
  );
}

export default MultivalueInput;
