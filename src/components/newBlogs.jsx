import React from "react";
import product1 from "../assets/images/products/product1.jpg";
import product2 from "../assets/images/products/product2.png";
import product3 from "../assets/images/products/product3.jpg";
import product4 from "../assets/images/products/product4.png";
import product5 from "../assets/images/products/product5.png";
import product6 from "../assets/images/products/product6.jpg";
import product7 from "../assets/images/products/product7.jpg";
import product8 from "../assets/images/products/product8.jpg";
import product9 from "../assets/images/products/product9.jpg";
import product10 from "../assets/images/products/product10.jpg";
import { Heart } from "lucide-react";
import { Bookmark } from "lucide-react";
import Tooltip from "@mui/material/Tooltip";
import GetBlogs from "./getBlogs";
function NewBlogs() {
 

  return (
    <div className="mt-20 md:px-20 px-10 flex flex-col w-full items-center ">
      <div className="flex gap-5 justify-center items-center mb-10 ">
        <h1 className="text-5xl font-semibold text-black leading-tight text-center ">
          Discover our new <br /> Blogs
        </h1>
      </div>
      <div>
      <GetBlogs />
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
