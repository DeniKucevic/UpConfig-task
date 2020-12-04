import React from "react";
import Loader from "../Loader";
import OnePost from "../OnePost";
import notFound from "../../assets/icons/not-found-icon.svg";
import "./Posts.css";

const Posts = ({ posts, isLoading, queryStr }) => {
  return (
    <>
      {isLoading && <Loader />}
      <div className="posts-wrapper">
        {posts.length === 0 && queryStr.length > 0 && !isLoading ? (
          <label>
            <img src={notFound} alt="not_found" className="not-found-icon" />
            Looks like we found nothing...
          </label>
        ) : (
          posts.map((post) => {
            return (
              <OnePost
                body={post.body}
                id={post.id}
                title={post.title}
                userId={post.userId}
                key={post.id}
              />
            );
          })
        )}
      </div>
    </>
  );
};

export default Posts;
