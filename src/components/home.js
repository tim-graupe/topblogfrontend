import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome home!</h1>;<Link to={"/entries"}>Entries</Link>
      <Link to={"/new_entry"}>New entry</Link>
      <Link to={"/log-in"}>Login</Link>
    </div>
  );
};
