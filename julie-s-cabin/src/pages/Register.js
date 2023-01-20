import React, { Fragment, useState, useHistory } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function Register() {
  const [email, setEmail] = useState("");
  const history = useHistory();

  const [password, setPassword] = useState("");

  const registerUser = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/register", {
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

    if (data.status === "ok") {
      history.push("/login");
    } else {
      alert("maybe duplicate email");
    }
    console.log(data);
  };

  return (
    <Fragment>
      <h1>Register</h1>
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

        <button type="submit">Register</button>
      </form>
    </Fragment>
  );
}

export default Register;
