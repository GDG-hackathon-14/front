import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../components/Header";
import Container from "../components/Container";
import QRCode from "react-qr-code";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100%;
  padding: 20px;
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

function Qrcode() {
  const [code, userCode] = useState("dd");
  // useEffect(() => {
  //   fetch("")
  //     .then((res) => res.json())
  //     .then((response) => {});
  // }, []);

  return (
    <Container>
      <Header title="뒤로가기" />
      <Main>
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          {code && (
            <QRCode
              size={256}
              style={{ height: "200px", maxWidth: "100%", width: "100%" }}
              value={`http://172.20.10.8:3000/information?code=${code}`}
              viewBox={`0 0 256 256`}
            />
          )}
          <div style={{ margin: "30px 0 50px" }}>
            위의 링크를 카메라로 스캔해보세요!
          </div>
        </div>
      </Main>
    </Container>
  );
}

export default Qrcode;
