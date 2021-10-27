import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Button, LoginForm } from "react-customer-support";

function App() {
  const okay: string = "hey";

  const [user, setUser] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const loginHandler = () => {
    console.log("hey");
    console.log(`password ${password}`);
    console.log(`email ${user}`);
  };

  return (
    <div className="App">
      <Button name="ellie" />
      <LoginForm
        joinRoom={async (okay: string) => {
          console.log("hey");
        }}
        user={user}
        setUser={setUser}
        password={password}
        setPassword={setPassword}
        loginHandler={loginHandler}
        title="Custom Title Of Ellie"
      />
    </div>
  );
}

export default App;
