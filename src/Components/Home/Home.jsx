import React, { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import "./Home.css";
import Cart from "../Cart/Cart";

const Home = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="blogs-container justify-center me-20">
      <div className="single-blog">
        {blogs.map((blog) => (
          <Blog 
            key={blog.id}
            blog={blog}
           ></Blog>
        ))}
      </div>
      <div>
        <Cart></Cart>
      </div>
    </div>
  );
};

export default Home;
