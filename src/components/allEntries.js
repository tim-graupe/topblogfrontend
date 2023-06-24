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
          {entries
            .filter((entry) => entry.isPublished)
            .map((entry) => {
              return (
                <li key={entry._id} className="all-entries-list">
                  <Link to={`/entries/${entry._id}`} className="links">
                    {" "}
                    <h1>{entry.title}</h1>
                  </Link>
                  <p>{entry.isPublished}</p>
                  <p>Posted on {new Date(entry.date_posted).toDateString()}</p>
                  <button
                    onClick={() => deletePost(entry._id)}
                    className="admin-controls"
                  >
                    Delete
                  </button>
                </li>
              );
            })}
        </ul>
      )}
    </div>
  );
};
