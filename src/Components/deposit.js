import React from "react";
import ReactBootstrap from "react-bootstrap";

function Deposit(props) {
    const [show, setShow] = React.useState(true);
    const [deposit, setDeposit] = React.useState("");
    const ctx = React.useContext(UserContext);
    //console.log(props) 

    function handleDeposit() {
      //console.log(props.LoginEmail);
      //console.log(ctx.users[0].email, ctx.users[0].password);
      ctx.users[0].balance = Number(ctx.users[0].balance) + Number(deposit);
      //console.log(ctx.users[0].balance)
      setShow(false);
    }
  
    function clearForm() {
      setDeposit("");
      setShow(true);
    }
  
    return (
      <Card
        bgcolor="success"
        header="Deposit"
        body={
          show ? (
            <>
              Balance {ctx.users[0].balance}
              <br />
              <br />
              Deposit Amount
              <br />
              <input
                type="input"
                className="form-control"
                id="deposit"
                placeholder="Deposit Amount"
                value={deposit}
                onChange={(e) => setDeposit(e.currentTarget.value)}
              />
              <br />
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleDeposit}
              >
                Deposit
              </button>
            </>
          ) : (
            <>
              <h5>Deposit Success</h5>
              <button type="submit" className="btn btn-light"
              onClick={clearForm}
              >
                New Deposit
              </button>
            </>
          )
        }
      />
    );
  }
  
  export default Deposit