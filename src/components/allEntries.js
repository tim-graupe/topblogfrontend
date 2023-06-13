import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export const AllEntries = () => {
  const [entries, setEntries] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  function deletePost(id) {
    fetch(`https://topblogbackend-production.up.railway.app/entries/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  useEffect(() => {
    const getAllEntries = () => {
      fetch("https://topblogbackend-production.up.railway.app/entries", {
        mode: "cors",
      })
        .then((response) => response.json())
        .then((response) => setEntries(response));
    };
    getAllEntries();
    setIsLoading(false);
  }, []);

  return (
    <div className="all-entries-container">
      {isLoading ? (
        <h1>Loading please wait....</h1>
      ) : (
        <ul className="entries-list-container">
          {entries.map((entry) => {
            return (
              <li key={entry._id}>
                <Link to={`/entries/${entry._id}`}>
                  {" "}
                  <h1>{entry.title}</h1>
                </Link>
                <p>{entry.content}</p>
                <p>{new Date(entry.date_posted).toDateString()}</p>
                <button onClick={() => deletePost(entry._id)}>Delete</button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};
