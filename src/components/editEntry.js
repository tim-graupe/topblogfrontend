import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const EditEntry = ({ props }) => {
  const [title, settitle] = useState(props.title);
  const [content, setcontent] = useState(props.content);
  const [isPublished, setIsPublished] = useState(props.isPublished);

  const id = useParams().id;
  const handleClick = (id) => {
    fetch(`https://topblogbackend-production.up.railway.app/entries/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        content: content,
        isPublished: false,
      }),
    }).then((response) => console.log(response));
  };

  function handleChange() {
    isPublished ? setIsPublished(false) : setIsPublished(true);
  }

  return (
    <div className="edit-form">
      <label>
        Title:
        <br></br>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => settitle(e.target.value)}
        />
      </label>
      <br></br>
      <label>Content</label>
      <br></br>
      <textarea
        type="text"
        name="content"
        value={content}
        onChange={(e) => setcontent(e.target.value)}
      ></textarea>
      <br></br>
      <label htmlFor="isPublished">Mark for public view</label>
      <input
        type="checkbox"
        id="isPublished"
        name="isPublished"
        defaultChecked={isPublished}
        onClick={handleChange}
      ></input>
      <br></br>
      <button
        onClick={() => {
          handleClick(props._id);
        }}
      >
        Submit
      </button>
    </div>
  );
};
