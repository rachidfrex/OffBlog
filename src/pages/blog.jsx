import { ChevronLeft } from "lucide-react";
import login from "../assets/images/login.jpg";
import { Heart } from "lucide-react";
import { Bookmark } from "lucide-react";
import { Eye } from 'lucide-react';
function Blogs() {
  return (
    <div className="mt-10 mx-20  pt-5 flex flex-col gap-5 justify-center items-center bg-white  rounded-lg ">
      <div className="flex  justify-between items-center w-full px-5 transition duration-300 ease-out cursor-pointer">
        <div className="flex items-center justify-center ">
          <ChevronLeft />
          <p className="text-sm">Back</p>
        </div>
        <div className="flex  gap-5">
         <div className="flex gap-1">
          <Heart className="hover:text-red-500 cursor-pointer " /> 
          <p>12</p>
         </div >
         <div className="flex gap-1">
          <Bookmark className="hover:text-yellow-500 cursor-pointer" />
          <p>20</p>
          </div>
          <div className="flex gap-1">
          <Eye className="hover:text-blue-500 cursor-pointer" />
          <p>30</p>
          </div>
        </div>
      </div>
      <div className="flex gap-3 justify-center items-center  ">
        <span className=" border  px-5 py-[5px] bg-white  shadow-sm rounded-full  ">
          tage 1
        </span>
        <span className=" border  px-5 py-[5px]   bg-white shadow-sm rounded-full ">
          tage 2
        </span>
        <span className=" border px-5 py-[5px]   bg-white shadow-sm rounded-full ">
          tage 3
        </span>
      </div>
      {/* this is the blogs title */}
      <div className="">
        <h1 className="text-5xl flex  justify-center items-center text-center w-[700px]  font-semibold ">
          how to use message app to comunicate and share
        </h1>
      </div>
      {/* this is the blogs date realsed or write day  */}
      <div className="flex justify-center items-center gap-3">
        <p className="text-center text-slate-500  text-sm">March 20, 2021</p>
        <p className="text-center text-slate-500  text-sm">8:12 AM</p>
      </div>
      {/* this is the blogs image */}
      <div className="">
        <img
          src={login}
          className=" object-center  h-[480px]   w-full rounded-xl  aspect-video "
        />
      </div>
      {/* this is the blogs content */}
      <div className=" grid grid-cols-12 justify-start w-full  gap-5 px-10 py-10">
        <div className=" col-span-3">
          <h1 className="text-3xl font-bold mb-4">Table of Content</h1>
          <ul className="text-sm ">
            <li>Introduction</li>
            <li>Main Section</li>
            <li>Sub Section</li>
          </ul>
        </div>
        <div className="col-span-8 text-justify">
          <h1 className="text-3xl font-bold mb-4">Introduction</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            mauris vel nunc aliquam, id lacinia nisl tincidunt. Sed auctor, nisl
            nec consequat tincidunt, nunc nunc tincidunt urna, id lacinia nisl
            justo id mauris. Sed euismod mauris vel nunc aliquam, id lacinia
            nisl tincidunt. Sed auctor, nisl nec consequat tincidunt, nunc nunc
            tincidunt urna, id lacinia nisl justo id mauris.
          </p>
          <h2 className="text-2xl font-bold mt-6 mb-4">Main Section</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            mauris vel nunc aliquam, id lacinia nisl tincidunt. Sed auctor, nisl
            nec consequat tincidunt, nunc nunc tincidunt urna, id lacinia nisl
            justo id mauris. Sed euismod mauris vel nunc aliquam, id lacinia
            nisl tincidunt. Sed auctor, nisl nec consequat tincidunt, nunc nunc
            tincidunt urna, id lacinia nisl justo id mauris.
          </p>
          <h3 className="text-xl font-bold mt-6 mb-4">Sub Section</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            mauris vel nunc aliquam, id lacinia nisl tincidunt. Sed auctor, nisl
            nec consequat tincidunt, nunc nunc tincidunt urna, id lacinia nisl
            justo id mauris. Sed euismod mauris vel nunc aliquam, id lacinia
            nisl tincidunt. Sed auctor, nisl nec consequat tincidunt, nunc nunc
            tincidunt urna, id lacinia nisl justo id mauris.
          </p>
        </div>
      </div>
      {/* this is the blogs Comments */}
      <div className="flex justify-start items-center gap-5 px-32 w-full ">
        <h1 className="text-3xl font-bold">Comments (20)</h1>
        <div className="flex gap-5">
          <p>Sort by</p>
          <p>Top</p>
          <p>Newest</p>
          <p>Oldest</p>
          </div>
    </div>
      
    </div>
  );
}

export default Blogs;
