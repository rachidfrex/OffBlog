import React from "react";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import collection1 from "../assets/images/collection1.jpg";
import collection2 from "../assets/images/collection2.jpg";
import collection3 from "../assets/images/collection3.jpg";
import collection4 from "../assets/images/collection4.jpg";
import { Plus } from "lucide-react";
function Categories() {
  const collections = [
    {
      id: 1,
      image: collection2,
      type: "elegeant",
    },
    {
      id: 2,
      image: collection3,
      type: "sports",
    },
    {
      id: 3,
      image: collection4,
      type: "wommen's",
    },
   ]
  return (
    <div className=" mt-10  px-20 relative overflow-hidden ">
      <div className="flex gap-5  justify-end  items-center w-full px-20 mt-10 ">
        <button className="text-black bg-white rounded-full p-2  hover:-translate-x-1 transition duration-300 ease-in-out ">
          <ChevronLeft />
        </button>
        <button className="text-black bg-white rounded-full p-2 hover:translate-x-1 transition duration-300 ease-in-out">
          <ChevronRight />
        </button>
        <button className="bg-black  text-white text-md px-7 py-2 rounded-full  border-2 border-black hover:bg-white hover:text-black transform duration-200 ease-in-out">
          view all 
        </button>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <h1 className="text-5xl font-semibold text-black leading-tight text-center ">
        Browse  New & Trending <br />  Categories
        </h1>
      </div>
      <div className="flex gap-5 justify-start items-center mt-10 relative ">
        {/* this is the cards  */}
        <div className=" flex justify-start items-center gap-4  overflow-hidden ">

          <div className="relative">
            <img
              className="object-cover  rounded-2xl  aspect-[17/11] w-[600px]"
              src={collection1}
              alt="collection1"
            />
            <div className="absolute bottom-5 translate-x-5 transform  text-start bg-white p-2 px-7 rounded-full shadow-lg  hover:hover:bg-black hover:text-white transition duration-300 ease-in-out">
            <p className=" text-md font-semibold">winter</p>
          </div>
          <div className="flex gap-1 absolute top-5 right-5 hover:bg-white rounded-full shadow-lg transition duration-300 ease-in-out   ">
           {/* this is the new button  */}
            <div className=" buttons-container btn     bg-white  rounded-full ">
                <p className="btn  test-completed text-md font-semibold ">  </p>
            </div>
              

              <div className=" text-start bg-white p-2 rounded-full  hover:rotate-90 transition duration-300 ease-in-out  hover:text-red-500   ">
              <Plus />
              
            </div>
          </div>

          </div>
            {
              collections.map((collection) => (
                <div className="relative">
                <img
                  className="object-cover  rounded-2xl  aspect-[9/11] w-[320px]"
                  src={collection.image}
                  alt="collection1"
                />
                <div className="absolute bottom-5 translate-x-5 transform  text-start bg-white p-2 px-7 rounded-full shadow-lg  hover:bg-black hover:text-white transition duration-300 ease-in-out">
                <p className=" text-md font-semibold">{collection.type}</p>
              </div>
              <div className="flex gap-1  absolute top-5 right-5 hover:bg-white rounded-full shadow-lg transition duration-300 ease-in-out    ">
               
                <div className="   text-start bg-white p-2 rounded-full px-7">
                    <p className=" text-md font-semibold"> Categorie </p>
                  </div>
                  <div className=" text-start bg-white p-2 rounded-full  hover:rotate-90 transition duration-300 ease-in-out hover:text-red-500   ">
                  <Plus />
                  
                </div>
              </div>
  
              </div>
              ))
            }
          
         
        </div>

      </div>
    </div>
  );
}

export default Categories;
