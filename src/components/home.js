import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome home!</h1>
      <ul>
        <li>
          <Link to={"/entries"}>Entries</Link>
        </li>
        <li>
          <Link to={"/new_entry"}>New entry</Link>
        </li>
        <li>
          <Link to={"/sign_up"}>Sign up</Link>
        </li>
        <li>
          <Link to={"/log-in"}>Login</Link>
        </li>
      </ul>
    </div>
  );
};
