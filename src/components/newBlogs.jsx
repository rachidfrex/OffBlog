import React from "react";
import GetBlogsV2 from "./getBlogsV2";
import GetBlogs from "./getBlogs";
function NewBlogs() {
  const [version, setVersion] = React.useState("v1");
 

  return (
    <div className="mt-20 md:px-20 px-5 flex flex-col w-full items-center ">
      <div className="flex gap-5 justify-center items-center mb-10 ">
        <h1 className="text-2xl lg:text-4xl font-semibold text-black leading-tight text-center ">
          Discover our new <br /> Blogs
        </h1>
      </div>
      <div className="flex w-full justify-end items-center gap-2">
      <button
      onClick={() => setVersion("v1")}
       className="bg-black text-white py-1  px-3" > v1 </button>
      <button
      onClick={() => setVersion("v2")} 
       className="bg-black text-white py-1  px-3" > v2</button>
      </div>
      <div style={{ display: version === "v1" ? "block" : "none" }}>
        <GetBlogs />
      </div>
      <div style={{ display: version === "v1" ? "none" : "block" }}>
        <GetBlogsV2 />
      </div>
      <div className="flex justify-center w-full">
        <button className="bg-black text-white p-2 rounded-full mt-10 px-10 border-2 hover:bg-white hover:border-2 hover:border-black hover:text-black transition duration-299 ease-in-out">
          Browse all
        </button>
      </div>
    </div>
  );
}

export default NewBlogs;
