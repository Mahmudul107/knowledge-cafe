import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = (handleReadTime) => {
  const [blogs, setBlogs] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [readTime, setReadTime] = useState("");
  const [bookmarkedTitles, setBookmarkedTitles] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleBookmark = (blog) => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
    setBookmarkedTitles([...bookmarkedTitles, blog.blog_title]);
  };

  handleReadTime = (time) => {
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if (previousReadTime) {
      const totalReadTime = previousReadTime + time;
      localStorage.setItem("readTime", totalReadTime);
      setReadTime(totalReadTime);
    } else {
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }
  };

  return (
    <div className="blogs-container justify-center me-20">
      <div className="single-blog">
        {blogs.map((blog) => (
          <Blog
            key={blog.id}
            blog={blog}
            handleBookmark={handleBookmark}
            handleReadTime={handleReadTime}
          ></Blog>
        ))}
      </div>
      <div className="cart">
        <Cart readTime={readTime} bookmark={bookmark}></Cart>
        <div className="bookmarked-item ms-6">
          <p className="text-2xl font-bold pt-6">
            Bookmarked Blog : {bookmark.length}
          </p>
          <ul className="mt-4">
            {bookmarkedTitles.map((title, index) => (
              <li  className="w-80 h-24 font-semibold text-lg mt-9 mx-auto my-auto pt-4 rounded-lg bg-white border" key={index}>{title}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
