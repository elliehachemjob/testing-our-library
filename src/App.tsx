import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, LoginForm, SignUpForm } from "react-customer-support";

function App() {
  const okay: string = "hey";

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [sendEmailVerification, setSendEmailVerification] =
    useState<string>("");

  const loginHandler = () => {
    console.log("hey");
    console.log(`password ${password}`);
    console.log(`email ${user}`);
  };

  //copy paste this to see results

  // <LoginForm
  //       joinRoom={async (okay: string) => {
  //         console.log("hey");
  //       }}
  //       user={user}
  //       setUser={setUser}
  //       password={password}
  //       setPassword={setPassword}
  //       loginHandler={loginHandler}
  //       title="Custom Title Of Ellie"
  //     />

  const signUpHandler = () => {
    console.log("hey");
    console.log(`password ${password}`);
    console.log(`email ${user}`);
    console.log(`email ${setSendEmailVerification}`);
  };

  //test this 100% later

  //   <SignUpForm
  //   joinRoom={async (okay: string) => {
  //     console.log("hey");
  //   }}
  //   user={user}
  //   setUser={setUser}
  //   password={password}
  //   setPassword={setPassword}
  //   signUpHandler={signUpHandler}
  //   title="Custom Title Of Ellie"
  //   sendEmailVerification={sendEmailVerification}
  //   setSendEmailVerification={setSendEmailVerification}
  // />

  return <div className="App"></div>;
}

export default App;
