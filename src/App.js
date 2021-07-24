import React from "react";
import "./App.css";

import { HashRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import { UserContext } from "./Components/createcontext";

import Home from "./Components/home";
import CreateAccount from "./Components/createaccount";
import Login from "./Components/login";
import Deposit from "./Components/deposit";
import Withdraw from "./Components/withdraw";
import AllData from "./Components/alldata";
import NavBar from "./Components/navbar";

function App() {
  return (
    <HashRouter>
      <NavBar />
      <UserContext.Provider
        value={{
          users: [
            {
              name: "Test Tester",
              email: "test@test.com",
              password: "12345678",
              balance: 100,
            },
          ],
        }}
      >
        <Route path="/home/" exact component={Home} />
        <Route path="/createaccount/" component={CreateAccount} />
        <Route path="/login/" component={Login} />
        <Route path="/deposit/" component={Deposit} />
        <Route path="/withdraw/" component={Withdraw} />
        <Route path="/alldata/" component={AllData} />
      </UserContext.Provider>
    </HashRouter>
  );
}

export default App;
