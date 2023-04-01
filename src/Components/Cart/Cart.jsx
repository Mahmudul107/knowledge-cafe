import React, { useEffect, useState } from "react";
import "./Cart.css";


const Cart = ({readTime, bookmark}) => {
    const [read, setRead] = useState(readTime);

    useEffect( () =>{
        const getReadTime = localStorage.getItem("readTime")
        setRead(getReadTime)
    }, [readTime]);


  return (
    <div>
      <div className="spent-time ms-3">
        <p className="font-semibold text-blue-800 mt-5 text-2xl">
          Spent Time On Read : {read} min.
        </p>
      </div>
      <div className="bookmarked-item mt-8 ms-6">
        <p className="text-2xl font-bold">Bookmarked Blog : {}</p>
      </div>
    </div>
  );
};

export default Cart;
