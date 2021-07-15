import React from "react";
import ReactBootstrap from "react-bootstrap";

function Balance() {
    const ctx = React.useContext(UserContext);
    return(
        <h1>Balance<br/>
            {JSON.stringify(ctx.users[0].email)}
        </h1>
    );
};

export default Balance