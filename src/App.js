import React, {Component} from "react";
import logo from './logo.svg';
import './App.css';
import Login from "./components/login/index"
import Header from "./components/header/index";


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Login></Login>
    </div>
  );
}

export default App;
