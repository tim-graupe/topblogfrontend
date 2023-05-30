import React, { useState } from "react";

export const NewEntry = () => {
  const [title, settitle] = useState("");
  const [content, setcontent] = useState("");
  const jsonData = {
    title: title,
    content: content,
  };

  const handleClick = () => {
    fetch("https://topblogbackend-production.up.railway.app/entries", {
      method: "POST",
      mode: "cors",
      body: JSON.stringify(jsonData),
    });
  };
  return (
    <form>
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
      <button onClick={handleClick}>Submit</button>
    </form>
  );
};
