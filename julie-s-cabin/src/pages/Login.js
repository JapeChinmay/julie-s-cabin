import React, { Fragment, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    setEmail("");
    setPassword("");

    const data = await res.json();

    if (data.user) {
      alert("login success");
    } else {
      alert("please check ur email , pass");
    }
    console.log(data);
  };

  return (
    <Fragment>
      <h1>Login</h1>
      <form onSubmit={registerUser}>
        <input
          type="text"
          placeholder="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />

        <button type="submit">login</button>
      </form>
    </Fragment>
  );
}

export default Login;
