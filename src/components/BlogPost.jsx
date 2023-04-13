import React from "react";
import Base from "./nav/Base";

const BlogPost = ({ title, content, photoUrl }) => {
  return (
    <Base>
      <div className="blog-post">
        <h2>{title}</h2>
        <img src={photoUrl} alt="Blog post" />
        <p>{content}</p>
      </div>
    </Base>
  );
};

export default BlogPost;
