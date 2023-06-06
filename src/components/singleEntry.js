import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { NoPage } from "./noPage";
import { EditEntry } from "./editEntry";
export const SingleEntry = () => {
  const [entry, setEntry] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isOpen, setIsOpen] = useState(false);
  const id = useParams().id;

  function deleteEntry(id) {
    fetch(`https://topblogbackend-production.up.railway.app/entries/${id}`, {
      method: "DELETE",
      mode: "cors",
      headers: {
        "Content-type": "application/json",
      },
    });
  }

  const handleClick = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  // const editEntry = (id) => {
  //   fetch(`https://topblogbackend-production.up.railway.app/entries/${id}`, {
  //     method: "PUT",
  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       title: "test",
  //       content: "testing",
  //       isPublished: false,
  //     }),
  //   }).then((response) => console.log(response));
  // };

  useEffect(() => {
    const getEntry = () => {
      fetch(`https://topblogbackend-production.up.railway.app/entries/${id}`, {
        mode: "cors",
      })
        .then((response) => response.json())
        .then(
          (response) => setEntry(response[0])
          // setEntry(response.filter((entry) => entry._id === id)[0])
        );
    };
    getEntry();
    setIsLoading(false);
  }, []);

  return (
    <div id="single-entry-container">
      {entry === undefined ? (
        <NoPage />
      ) : (
        <div>
          <h1>{entry.title}</h1>
          <p>{entry.content}</p>
          <button onClick={() => deleteEntry(entry._id)}>Delete</button>
          <button onClick={() => handleClick()}>Edit</button>
          {isOpen ? <EditEntry props={entry} /> : null}
        </div>
      )}
    </div>
  );
};
