import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  const [user, setUser] = useState("");
  useEffect(() => {
    localStorage === null
      ? setUser(null)
      : setUser(JSON.parse(localStorage.user));
  }, []);
  return (
    <div className="home-container">
      <h1>Welcome back, {user.username}</h1>
      <ul>
        <li>
          <Link to={"/entries"}>Entries</Link>
        </li>
        <li>
          <Link to={"/new_entry"}>New entry</Link>
        </li>
        {/* <li>
          <Link to={"/sign_up"}>Sign up</Link>
        </li> */}
        <li>
          <Link to={"/log_in"}>Login</Link>
        </li>
      </ul>
    </div>
  );
};
