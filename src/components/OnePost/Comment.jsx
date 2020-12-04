import React from "react";

const Comment = ({ body, mail }) => {
  return (
    <div className="comment-header">
      <h3>
        {mail}
      </h3>
      <p>{body}</p>
      <hr></hr>
    </div>
  );
};

export default Comment;
