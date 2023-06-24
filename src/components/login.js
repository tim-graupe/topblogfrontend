import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Login = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [test, setTest] = useState(null);

  useEffect(() => {
    localStorage === null
      ? setTest(null)
      : setTest(JSON.parse(localStorage.user));
  }, []);
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://topblogbackend-production.up.railway.app/log_in",
        {
          method: "POST",
          mode: "cors",
          headers: {
            "Content-Type": "application/json",
          },
          // credentials: "include",
          body: JSON.stringify({
            username,
            password,
          }),
        }
      );
      const data = await response.json();
      console.log(data.user);
      if (data.message !== undefined) {
        setError(data.message);
      } else {
        // document.cookie = JSON.stringify(data.user);
        localStorage.setItem("user", JSON.stringify(data.user));
        setError(`Success! Welcome, ${username}!`);
        window.open("/", "_self");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h2>Admin Login</h2>
        {error && <div>{error}</div>}
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
        {/* <Link to={"/sign_up"}>New user?</Link> */}
      </form>
      <Link to="https://topblogbackend-production.up.railway.app/log_out">
        Logout
      </Link>
    </div>
  );
};
