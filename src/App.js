import React, { Component } from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/splash";
import Main from "./pages/main";
import Company from "./pages/company";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/company" element={<Company />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
