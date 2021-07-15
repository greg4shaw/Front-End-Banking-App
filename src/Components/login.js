import React from "react";
//import ReactBootstrap from "react-bootstrap";
import UserContext from "./context"
import Card from "./context"

// function Login({ username, userPassword, handleInput }) {
function Login() {
  const [status, setStatus] = React.useState('');
  const [show, setShow] = React.useState(true);
  const [username, setUsername ] = React.useState('testuser');
  const [userPassword, setUserPassword ] = React.useState('testpass');
  console.log(username, userPassword);
  const ctx = React.useContext(UserContext);

  const handleInput = (event) => {
  //console.log(ctx.users[0].email)  
  console.log(ctx.users.length) 
  for (let i = 0; i < ctx.users.length; i++) {
    if (username === ctx.users[i].email && userPassword === ctx.users[i].password) {
    console.log('Yes')
    setShow(false);
  }else{
    setStatus("Incorrect username or password")
    console.log('No')
  }
  }
    console.log(username, userPassword)
  }

  function clearForm() {
    setUsername("");
    setUserPassword("");
    setShow(true);
  }

  return (
    <Card
    bgcolor="success"
    header="Login"
    body={
      show ? (
        <>
      <div>
          <input value={username} name='username' onChange={(e) => setUsername(e.currentTarget.value)}/>
          <input value={userPassword} name='userPassword' onChange={(e) => setUserPassword(e.currentTarget.value)}/>
          <br />
              <button
                type="submit"
                className="btn btn-light"
                onClick={handleInput}
              >Log On </button>
      </div>
      <h1>{status}</h1>
      </>
          ) : (
            <>
              <h5>Login Success</h5>
              <button type="submit" className="btn btn-light"
              onClick={clearForm}
              >
                Log Out
              </button>
            </>
          )
    }
    />
  )
}

export default Login


// function App() {
//   // const [username, setUsername ] = React.useState('testuser');
//   // const [userPassword, setUserPassword ] = React.useState('testpass');
//   const ctx = React.useContext(UserContext);

//   const handleInput = (event) => {
//     console.log(ctx.users[0].email)  
//     console.log(event.target.value)  
//     //if(event.target.name === 'username') {
//       //  if(event.target.value === ctx.users[0].email){
//           setUsername(event.target.value);
//         //}else{return};
//       // } else if (event.target.name === 'password') {
//       //       if(event.target.value === ctx.users[0].password){
//       //         setPassword(event.target.value);
//       //       };
//      //  }
//   };

  // return (
  //     <Login 
         
  //     />
  // )



// function Login() {
//   const [show, setShow] = React.useState(true);
//   const [loginEmail, setLoginEmail] = React.useState("");
//   const [loginPassword, setLoginPassword] = React.useState("");
//   const ctx = React.useContext(UserContext);

//   function handleLogin() {
//     console.log(loginEmail, loginPassword);
//     console.log(ctx.users[0].email, ctx.users[0].password);
//     var success = ctx.users.map((i) => {
//       if (i.email === loginEmail && i.password === loginPassword) {
//         console.log("true");
//         setShow(false);
//       } else {
//         console.log("false");
//        // setLoginEmail("");
//        // setLoginPassword("");
//       }
//     });
//   }

//   // function clearForm() {
//   //   setLoginEmail("");
//   //   setLoginPassword("");
//   //   setShow(true);
//   // }

//   return (
//     <>
    
//     <Card
//       bgcolor="warning"
//       header="Login"
//       body={
//         show ? (
//           <>
//             Email
//             <br />
//             <input
//               type="input"
//               className="form-control"
//               id="loginEmail"
//               placeholder="Enter email"
//               value={loginEmail}
//               onChange={(e) => setLoginEmail(e.currentTarget.value)}
//             />
//             <br />
//             Password
//             <br />
//             <input
//               type="input"
//               className="form-control"
//               id="loginPassword"
//               placeholder="Enter password"
//               value={loginPassword}
//               onChange={(e) => setLoginPassword(e.currentTarget.value)}
//             />
//             <br />
//             <button
//               type="submit"
//               className="btn btn-light"
//               onClick={handleLogin}
//             >
//               Login
//             </button>
//             </>
//         ) : (
//           <>
//             <h5>Login Success</h5>
//             <button type="submit" className="btn btn-light" 
//             //onClick={clearForm}
//             >
//               Log Out
//             </button>
//           </>
//         )
//       }
//     />
//   </>
//   );
// }
