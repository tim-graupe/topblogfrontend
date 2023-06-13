import React, { useState } from "react";

export const SignUp = () => {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [adminCode, setAdminCode] = useState("");
  function handleClick() {
    fetch("https://topblogbackend-production.up.railway.app/sign_up", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: username,
        password: password,
        adminCode: adminCode,
      }),
    }).then((response) => console.log(response));
  }

  return (
    <div className="sign-up-container">
      <label htmlFor="username">Username</label>
      <input
        name="username"
        placeholder="username"
        type="text"
        onChange={(e) => setUserName(e.target.value)}
      />
      <label htmlFor="password">Password</label>
      <input
        name="password"
        type="password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <label htmlFor="adminCode">Admin Code</label>
      <input
        name="adminCode"
        type="password"
        onChange={(e) => setAdminCode(e.target.value)}
      />
      <button onClick={handleClick}>Click</button>
    </div>
  );
};
