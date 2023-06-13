import React, { useState } from "react";

export const NewEntry = () => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const [isPublished, setIsPublished] = useState(false);
  const jsonData = {
    title: title,
    content: content,
    isPublished: isPublished,
  };

  function handleClick() {
    fetch("https://topblogbackend-production.up.railway.app/new_entry", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    }).then((response) => console.log(response));
  }

  function handleChange() {
    isPublished ? setIsPublished(false) : setIsPublished(true);
  }

  return (
    <div>
      <label>
        Title:
        <input
          type="text"
          name="title"
          onChange={(e) => settitle(e.target.value)}
        />
      </label>
      <label>Content</label>
      <input
        type="text"
        name="content"
        onChange={(e) => setcontent(e.target.value)}
      ></input>
      <label for="isPublished">Mark for public view</label>
      <input
        type="checkbox"
        id="isPublished"
        name="isPublished"
        onClick={handleChange}
      ></input>
      <button
        onClick={() => {
          handleClick();
        }}
      >
        Submit
      </button>
    </div>
  );
};
