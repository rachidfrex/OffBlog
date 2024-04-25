import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { Heart } from "lucide-react";
import { Bookmark } from "lucide-react";

import Skeleton from "../components/Skeleton";

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
    console.log("blogs", blogs);
    setIsLoading(true);
  };

  useEffect(() => {
    handelGetBlogs();
  }, []);
  let image = allblogs.map((Blogs) => Blogs.image_url);
  console.log("image", image);
  return (
    <div>
      {!isLoading ? (
        // grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  grid-cols-1 gap-4 max-w-[1280px]
        <div className=" py-5  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  grid-cols-1 gap-4 max-w-[1280px]">
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      ) : (
        <div className="py-5  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  grid-cols-1 gap-4 max-w-[1280px]">
          {allblogs.map((Blogs) => (
            <div key={Blogs.id} className="relative  rounded-lg bg-white">
              <div className=" ">
                <img
                  className="object-cover rounded-md h-40  aspect-video w-full bg-black/30  "
                  src={`http://localhost:8000${Blogs.image_url}`}
                  alt={Blogs.title}
                />
              </div> 

              <div className=" bottom-5 flex justify-between  items-end   text-start bg-white py-2  ">
                <div>
                  <p className="  font-semibold ">{Blogs.title}</p>
                  <p className="  line-clamp-2 text-slate-600 text-xs ">

                                  {
                  JSON.parse(Blogs.content).map((item, index) => (
                    <p key={index}>{item.data.text}</p>
                  ))
                }
                  </p>
                </div>
              </div>

              <div className=" mb-3 flex justify-between gap-5 items-center ">
                <div className="group text-black transition mt-2 duration-300 cursor-pointer text-sm">
                  <Link to={`/Blog/${Blogs.id}`}>
                    {" "}
                    {/* Replace `blog.id` with the id of the blog post */}
                    read more
                  </Link>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default GetBlogs;
