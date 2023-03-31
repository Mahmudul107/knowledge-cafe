import React from "react";
import "./Blog.css";

const Blog = (props) => {
  const {
    author_img,
    author_name,
    blog_title,
    published_date,
    read_time,
    blog_img,
  } = props.blog;
  return (
    <div className="blogs mb-10">
      <img className="mx-auto border" src={blog_img} alt="" />
      <div className="ps-5">
        <img className="w-10 rounded-full mt-8" src={author_img} alt="" />
        <div className="author-name mb-6 ms-3">
          <h3 className="font-bold">{author_name}</h3>
          <p>{published_date}</p>
        </div>
      </div>
      <div className="read-time flex gap-1">
        <p>{read_time} min read</p>
        <button>
          
        </button>
      </div>
      <div className="blog-title">
        <h1 className="font-bold text-2xl text-left mx-5">{blog_title}</h1>
      </div>
      <div className="mark-as-read mt-6">
        <a href="mark as read">Mark as read</a>
      </div>
    </div>
  );
};

export default Blog;
