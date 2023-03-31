import React, { useEffect, useState } from 'react';
import './Home.css'

const Home = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect( () =>{
        fetch('data.json')
        .then( res => res.json())
        .then(data => setBlogs(data))
    }, [])

    return (
        <div className='gird grid-cols-1'>
            <div>
                <p>Blogs :{blogs.length}</p>
            </div>
            <div>
                <p>Spent Time On Read :</p>
            </div>
        </div>
    );
};

export default Home;