import React, { useState } from "react";
import idIcon from "../../assets/icons/id-icon.svg";
import userIcon from "../../assets/icons/user-icon.svg";
import { getPostComments } from "../../services/posts_service";
import Comment from "./Comment";
import "./OnePost.css";

const OnePost = ({ body, id, userId, title }) => {
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);

  const clickComments = (id) => {
    if (showComments) {
      setShowComments(false);
      return;
    } else {
      setShowComments(true);
      getPostComments(id).then((res) => {
        setComments(res.data);
      });
    }
  };

  return (
    <div className="one-post-wrapper">
      <div className="post-card-header">
        <div className="post-id">
          <img src={idIcon} alt="id_icon" />
          <label>{id}</label>
        </div>
        <div className="post-id">
          <img src={userIcon} alt="user_icon" />
          <label>{userId}</label>
        </div>
      </div>
      <div className="post-card-body">
        <div className="post-title">
          <p>{title}</p>
        </div>
        <div className="post-body">
          <p>{body}</p>
          <button onClick={() => clickComments(id)}>
            {showComments ? "Close Comments" : "Open Comments"}
          </button>
        </div>
        {showComments && (
          <div className="post-comments">
            {comments.map((comment) => (
              <Comment
                key={comment.id}
                body={comment.body}
                mail={comment.email}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default OnePost;
