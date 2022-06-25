import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Main from "./components/Main";
import Product from "./components/Product";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Main />
      <Product />
    </div>
  );
};

export default App;
