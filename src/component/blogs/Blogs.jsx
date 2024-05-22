import { useEffect } from "react";
import { useState } from "react";
import Card from "../Card/Card";






const Blogs = ({handleAddToBookmark,markAsRead}) => {
    const [blogs,setBlogs]=useState([]);

    useEffect(()=>{
        fetch('blog.json')
        .then(res=>res.json())
        .then(data=>setBlogs(data))
    },[])
    return (

        <div className="md:w-2/3">

            {
            blogs.map((value,index)=><Card singleBlog={value} markAsRead={markAsRead} key={index} handleAddToBookmark={handleAddToBookmark}></Card>)
            }
          
            
        </div>
    );
};

export default Blogs;