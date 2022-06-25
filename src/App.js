import React, { Component, useEffect, useState } from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Company from "./pages/company";
import Qrcode from "./pages/qrcode";
import WriteForm from "./pages/writeForm";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/company" element={<Company />}></Route>
          <Route path="/qrcode" element={<Qrcode />}></Route>
          <Route path="/write-form" element={<WriteForm />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
