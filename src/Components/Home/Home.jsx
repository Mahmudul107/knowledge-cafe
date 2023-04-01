import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = (handleReadTime) => {
  const [blogs, setBlogs] = useState([]);
  const [bookmark, setBookmark] = useState([]);
  const [readTime, setReadTime] = useState("");

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const handleBookmark = (blog) => {
    const newBookmark = [...bookmark, blog];
    setBookmark(newBookmark);
  }
  
  handleReadTime = (time) =>{
    const previousReadTime = JSON.parse(localStorage.getItem("readTime"));
    if(previousReadTime){
      const totalReadTime = previousReadTime + time;
      localStorage.setItem("readTime", totalReadTime)
      setReadTime(totalReadTime);
    }
    else{
      localStorage.setItem("readTime", time);
      setReadTime(time);
    }
  }

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
      </div>
    </div>
  );
};

export default Home;
