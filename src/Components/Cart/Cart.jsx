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
      <div className="spent-time ms-3 mb-6">
        <p className="font-semibold text-blue-800 mt-5 text-2xl">
          Spent Time On Read : {read} min.
        </p>
      </div>
    </div>
  );
};

export default Cart;
