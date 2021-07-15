import React from "react";
//import ReactBootstrap from "react-bootstrap";
import UserContext from "./context"

function AllData() {
    const ctx = React.useContext(UserContext);
    return(
        <h1>All Data<br/>
            {JSON.stringify(ctx)}
        </h1>
    );
};

export default AllData