import React from "react";
import ReactBootstrap from "react-bootstrap";

import Home from "./home"
import CreateAccount from "./createaccount"
import Login from "./login"
import Deposit from "./deposit"
import Withdraw from "./withdraw"
import Balance from "./balance"
import AllData from "./alldata"
import HashRouter from "./context"
import NavBar from "./context"
import UserContext from "./context"
//import ReactRouterDOM from "./context"
import Route from "./context"
import Card from "./context"

function Spa() {
    return(
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{users:[{name:'abel', email:'abel@mit.edu', password:'secret', balance:180}]}}>            
                <Route path="/" exact component={Home} />
                <Route path="/createaccount/" component={CreateAccount} />
                <Route path="/login/" component={Login} />
                <Route path="/deposit/" component={Deposit} />
                <Route path="/withdraw/" component={Withdraw} />
                <Route path="/balance/" component={Balance} />
                <Route path="/alldata/" component={AllData} />
            </UserContext.Provider>
        </HashRouter>
    );
};
export default Spa
//ReactDOM.render(<Spa/>,document.getElementById("root"));