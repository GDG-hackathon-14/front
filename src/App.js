import React, { Component, useEffect, useState } from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./pages/main";
import Company from "./pages/company";
import Qrcode from "./pages/qrcode";
import WriteForm from "./pages/writeForm";
import Information from "./pages/infomation";

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
          <Route path="/information" element={<Information />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
