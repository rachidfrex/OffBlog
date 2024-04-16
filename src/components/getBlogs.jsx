import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Heart } from "lucide-react";
import { Bookmark } from "lucide-react";
import Tooltip from "@mui/material/Tooltip";

function GetBlogs() {
  const [allblogs, setAllBlogs] = useState([]);
  const handelGetBlogs = async () => {
    let blogs = await fetch("http://localhost:8000/api/getBlogs", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    blogs = await blogs.json();
    setAllBlogs(blogs);
    console.log( 'blogs', blogs);
  };

  useEffect(() => {
    handelGetBlogs();
  }, []);

  return (
    <div>
      {/* {allblogs.map((blog) => (
        <div key={blog.id}>
          <h1>{blog.title}</h1>
          <p>{blog.content}</p>
          <img src={blog.image_url} alt={blog.title} />
        </div>
      ))} */}
       <div className="grid grid-cols-4 gap-4 py-5 ">
          {allblogs.map((Blogs) => (
            <div
              key={Blogs.id}
              className="relative  rounded-lg bg-white"
            >
              <div className="p-3  ">
                <img
                  className="object-cover rounded-md  aspect-video w-full bg-black/30  "
                  src={Blogs.image_url}
                  alt={Blogs.title}
                />
              </div>

              <div className=" bottom-5 flex justify-between  items-end   text-start bg-white px-5 mb-3 ">
                <div>
                  <p className="  font-semibold ">{Blogs.title}</p>
                  <p className="  line-clamp-2 text-slate-600 text-xs ">
                    {Blogs.content}
                  </p>
                  
                </div>
                
                
              </div>
              
              <div className="px-5 mb-3 flex justify-between gap-5 items-center ">
                {/* <div className="flex  gap-5">
                
                  <Heart className="hover:text-red-500 cursor-pointer " />
                 
                  <Bookmark className="hover:text-black/50 cursor-pointer" />
                  
                </div> */}

                <div className="group text-black transition mt-2 duration-300 cursor-pointer text-sm">
                  read more
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                </div>
              </div>
             
            </div>
          ))}
        </div>
    </div>
  );
}

export default GetBlogs;
