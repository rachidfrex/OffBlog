import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import collection1 from "../../assets/images/collection1.jpg";
import collection2 from "../../assets/images/collection2.jpg";
import collection3 from "../../assets/images/collection3.jpg";
import collection4 from "../../assets/images/collection4.jpg";
import { Plus } from "lucide-react";

function SlidCategoris() {
  var settings = {

    dots: false,
    infinite: true,
    loop: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
    
  };
  const collections = [
    {
        id: 0,
        image: collection1,
        type: "winter",
    },
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
    <div className=" mt-10 mx-5 md:mx-10 lg:mx-20 max-w-[1600px] relative overflow-hidden ">
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
        <h1 className="text-4xl font-semibold text-black leading-tight text-center ">
        Browse  New & Trending <br />  Categories
        </h1>
      </div>
      
        {/* this is the cards  */}
        <div className="  flex justify-start items-center gap-4  overflow-hidden ">
          <div className="w-full h-fit  mt-5 flex flex-col  ">
          <Slider {...settings}>
            {
              collections.map((collection) => (
                <div className="relative px-2 ">
                <img
                  className="object-cover  rounded-2xl  aspect-[9/11] h-fit md:w-[260px] lg:w-[280px]  xl:w-[300px] 2xl:w-[340px]"
                  src={collection.image}
                  alt="collection1"
                />
                <div className="absolute bottom-5 translate-x-5 transform  text-start bg-white p-2 px-7 rounded-full shadow-lg  hover:bg-black hover:text-white transition duration-300 ease-in-out">
                <p className=" text-sm font-semibold">{collection.type}</p>
              </div>
              
  
              </div>
              ))

            }
            </Slider>
          
          </div>
         
        </div>

      </div>
    
  );
}

export default SlidCategoris;
