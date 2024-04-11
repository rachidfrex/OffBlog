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
function Blogs() {
    const blogs = [
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
    <div className="mt-10 mx-20  py-5  flex flex-col gap-5 justify-center items-center bg-white  rounded-lg shadow-sm  ">
      <div className=" bg-[url('/src/assets/images/bg-search.png')] w-full bg-cover bg-center bg-no-repeat relative ">
       <div className=" backdrop-blur-sm py-32 bg-white/30">
       <div className=" text-center flex flex-col gap-2 justify-center items-center">
          <h1 className="text-4xl  font-semibold text-black leading-tight text-center">
            Write your idea and spread it with the world
          </h1>
          <p className="text-slate-500 w-[550px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            and the world is potato
          </p>
            {/* this is the Search  */}
          <div className="flex gap-2 justify-center  items-center relative w-[700px]">
          <input
            type="text"
            className="p-[13px] border-2 w-full  rounded-md mt-4 text-slate-600 text-sm relative shadow-sm  "
            placeholder="Search for blogs..."
          />
          <button className="bg-black/90 text-sm border-2 border-black hover:bg-slate-100 hover:border-2 hover:text-slate-600 transform duration-100 ease-in text-white p-2 rounded-md mt-4 absolute right-1">
            Search now
          </button>
        </div>
        </div>
       </div>
      
       
      </div>
      <div className="w-full px-10">
        <h1 className="text-3xl flex py-5 flex-col justify-start items-start w-full text-black leading-tight text-center ">
          Editor's choice
        </h1>
        <div className="grid grid-cols-4 gap-4 py-5 ">
          {blogs.map((Blogs) => (
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
        {/* do the  pagination using tailwind */}
        <div className="flex justify-center items-center mt-5">
            <button className="bg-black text-white px-4 py-2 rounded-md mr-2">Previous</button>
            <button className="bg-black text-white px-4 py-2 rounded-md">Next</button>
            </div>
        </div>
      </div>
  );
}

export default Blogs;
