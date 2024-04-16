import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Heart } from "lucide-react";
import { Bookmark } from "lucide-react";
import Tooltip from "@mui/material/Tooltip";
import Skeleton from '../components/Skeleton'

function GetBlogs() {
  const [allblogs, setAllBlogs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
  };

  useEffect(() => {
    handelGetBlogs();
  }, []);

  return (
    <div>
       { !isLoading ? (
        <div className="grid grid-cols-4 gap-4 py-5  ">
            <Skeleton />
            <Skeleton />
            <Skeleton />
            <Skeleton />
            
          </div>):(
            <div className="grid grid-cols-4 gap-4 py-5 ">
          {allblogs.map((Blogs) => (
            <div
              key={Blogs.id}
              className="relative  rounded-lg bg-white"
            >
              <div className=" ">
                <img
                  className="object-cover rounded-md h-40  aspect-video w-full bg-black/30  "
                  src={Blogs.image_url}
                  alt={Blogs.title}
                />
              </div>

              <div className=" bottom-5 flex justify-between  items-end   text-start bg-white py-2  ">
                <div>
                  <p className="  font-semibold ">{Blogs.title}</p>
                  <p className="  line-clamp-2 text-slate-600 text-xs ">
                    {Blogs.content}
                  </p>
                  
                </div>
                
                
              </div>
              
              <div className=" mb-3 flex justify-between gap-5 items-center ">
               

                <div className="group text-black transition mt-2 duration-300 cursor-pointer text-sm">
                  read more
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                </div>
              </div>
             
            </div>
          ))}
        </div>
            )
            }

      
    </div>
  );
}

export default GetBlogs;
