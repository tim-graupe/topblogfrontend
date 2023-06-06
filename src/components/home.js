import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="home-container">
      <h1>Welcome home!</h1>;<Link to={"/entries"}>Entries</Link>
    </div>
  );
};
