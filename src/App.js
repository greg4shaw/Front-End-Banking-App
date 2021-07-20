import React from "react";
// import ReactBootstrap from "react-bootstrap";
import './App.css';

import { HashRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';

import Home from "./Components/home"
import CreateAccount from "./Components/createaccount"
import Login from "./Components/login"
import Deposit from "./Components/deposit"
import Withdraw from "./Components/withdraw"
import AllData from "./Components/alldata"
import NavBar from "./Components/navbar"

const UserContext = React.createContext(null);

function App()
  {
    return(
        
        <HashRouter>
            <NavBar/>
            <UserContext.Provider value={{users:[{name:'abel', email:'abel@mit.edu', password:'secret', balance:180}]}}>           
                <Route path="/" exact component={Home} />
                <Route path="/createaccount/" component={CreateAccount} />
                <Route path="/login/" component={Login} />
                <Route path="/deposit/" component={Deposit} />
                <Route path="/withdraw/" component={Withdraw} />
                <Route path="/alldata/" component={AllData} />
            </UserContext.Provider>
        </HashRouter>
      
    );
};


//   return (
//     <Spa></Spa>

//   );
// }


export default App;
