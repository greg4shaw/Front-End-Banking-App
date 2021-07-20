import React from "react";
//import ReactBootstrap from "react-bootstrap";
//import "../App"

function Withdraw() {
    const ctx = React.useContext(UserContext);
    return(
        <h1>Withdraw<br/>
            {JSON.stringify(ctx)}
        </h1>
    );
};

export default Withdraw