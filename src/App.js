import React from "react";
import ReactBootstrap from "react-bootstrap";
import logo from './logo.svg';
import './App.css';
import Spa from "./Components/index"
import Home from "./Components/home"
import CreateAccount from "./Components/createaccount"
import Login from "./Components/login"
import Deposit from "./Components/deposit"
import Withdraw from "./Components/withdraw"
import Balance from "./Components/balance"
import AllData from "./Components/alldata"
import HashRouter from "./Components/context"
import NavBar from "./Components/context"
import UserContext from "./Components/context"
import Route from "./Components/context"

function App() {
  return (
    <Spa></Spa>
  );
}


export default App;
