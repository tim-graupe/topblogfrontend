import React, { useEffect, useState } from "react";

export const Reply = ({ props }) => {
  const [user, setuser] = useState("");
  const [content, setcontent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    props.replies === undefined ? setIsLoading(true) : setIsLoading(false);
  }, [props.replies]);
  const handleClick = (id) => {
    fetch(`https://topblogbackend-production.up.railway.app/entries/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user: user,
        content: content,
      }),
    }).then((response) => console.log(response));
    window.location.reload();
  };
  return (
    <div className="post-reply-container">
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        props.replies.map((reply) => {
          return (
            <div className="reply-card" key={reply.content}>
              <p>{reply.content}</p>
              <p className="date-p">
                Posted by {reply.user} on{" "}
                {new Date(reply.date_replied).toDateString()}
              </p>
            </div>
          );
        })
      )}
      <label>
        Username:
        <br></br>
        <input
          type="text"
          name="user"
          value={user}
          onChange={(e) => setuser(e.target.value)}
        />
      </label>
      <br></br>
      <label>Content:</label>
      <br></br>
      <textarea
        type="text"
        name="content"
        value={content}
        onChange={(e) => setcontent(e.target.value)}
      ></textarea>
      <br></br>
      <button
        onClick={() => {
          handleClick(props._id);
        }}
      >
        Submit reply
      </button>
    </div>
  );
};
