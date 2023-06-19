import React, { useState } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  // const [error, setError] = useState("");

  const isLogged = (req, res, next) => {
    if (req) {
      console.log(req.username);
    } else console.log("req.useer");
  };

  const handleLogin = (e) => {
    e.preventDefault();
    try {
      fetch("https://topblogbackend-production.up.railway.app/log-in", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      }).then((response) => console.log(response));
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Login</h2>
        {/* {error && <div>{error}</div>} */}
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
        <br></br>
        <Link to={"/sign_up"}>New user?</Link>
      </form>
      <button onClick={isLogged}>Click</button>
    </div>
  );
};
