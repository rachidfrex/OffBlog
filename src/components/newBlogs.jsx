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
function NewBlogs() {
  const Blogs = [
    {
      id: 1,
      image: product1,
      name: "The best way to wear a suit",
      content:
        "the world of fashion is always changing and we are always on the cusp of it jnnj gre  regreg reg ergreg g reg.",
      likes: 12,
      saves: 20,
    },
    {
      id: 2,
      image: product2,
      name: "The best way to wear a suit",
      content:
        "the world of fashion is always changing and we are always on the cusp of it.",
    },
    {
      id: 3,
      image: product3,
      name: "The best way to wear a suit",
      content:
        "the world of fashion is always changing and we are always on the cusp of it.",
    },
    {
      id: 4,
      image: product4,
      name: "The best way to wear a suit",
      content:
        "the world of fashion is always changing and we are always on the cusp of it.",
    },
    {
      id: 5,
      image: product5,
      name: "The best way to wear a suit",
      content:
        "the world of fashion is always changing and we are always on the cusp of it.",
    },
    {
      id: 6,
      image: product6,
      name: "The best way to wear a suit",
      content:
        "the world of fashion is always changing and we are always on the cusp of it.",
    },
    {
      id: 7,
      image: product7,
      name: "The best way to wear a suit",
      content:
        "the world of fashion is always changing and we are always on the cusp of it.",
    },
    {
      id: 8,
      image: product8,
      name: "The best way to wear a suit",
      content:
        "the world of fashion is always changing and we are always on the cusp of it.",
    },
    {
      id: 9,
      image: product9,
      name: "The best way to wear a suit",
      content:
        "the world of fashion is always changing and we are always on the cusp of it.",
    },
    {
      id: 10,
      image: product10,
      name: "The best way to wear a suit",
      content:
        "the world of fashion is always changing and we are always on the cusp of it.",
    },
  ];

  return (
    <div className="mt-20 px-20">
      <div className="flex gap-5 justify-center items-center mb-10 ">
        <h1 className="text-5xl font-semibold text-black leading-tight text-center ">
          Discover our new <br /> Blogs
        </h1>
      </div>
      <div>
        <div className="grid grid-cols-4 gap-4  ">
          {Blogs.map((Blogs) => (
            <div
              key={Blogs.id}
              className="relative shadow-sm rounded-lg bg-white"
            >
              <div className="p-3  ">
                <img
                  className="object-cover rounded-md  aspect-video w-full bg-black/30  "
                  src={Blogs.image}
                  alt={Blogs.name}
                />
              </div>

              <div className=" bottom-5 flex justify-between  items-end   text-start bg-white px-5 mb-3 ">
                <div>
                  <p className=" text-lg font-semibold ">{Blogs.name}</p>
                  <p className="text-md  line-clamp-2 text-slate-600 ">
                    {Blogs.content}
                  </p>
                </div>
              </div>
              <div className="px-5 mb-3 flex justify-between gap-5 items-center ">
                <div className="flex  gap-5">
                <Tooltip title="likes" arrow>
                  <Heart className="hover:text-red-500 cursor-pointer " />
                  </Tooltip>
                  <Tooltip title="save" arrow>
                  <Bookmark className="hover:text-black/50 cursor-pointer" />
                  </Tooltip>
                </div>

                <div className="group text-black transition duration-300 cursor-pointer">
                  read more
                  <span class="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                </div>
              </div>
            </div>
          ))}
        </div>
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
