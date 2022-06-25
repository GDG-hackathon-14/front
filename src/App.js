import React, { Component } from "react";
import GlobalStyle from "./GlobalStyle";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Splash from "./pages/splash";

const App = () => {
  return (
    <div className="App">
      <GlobalStyle />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />}></Route>
          <Route path="/main" element={<Splash />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
