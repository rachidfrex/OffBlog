import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { ChevronLeft } from "lucide-react";
import { ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../components/useContext";
import { useContext } from 'react';

function SlidCategoris() {
  const { setGetCategories } = useContext(UserContext);
  var settings = {

    dots: false,
    speed: 500,
    slidesToShow:5,
    slidesToScroll: 1,
    initialSlide: 0,
    swipeToSlide: true,
    infinite: true,
 
    
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
    const [categories, setCategories] = useState([]);
  //  get categories from the server function
    const getCategories = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/categories", {
          method: "GET",
        });
        const data = await response.json();
        console.log("data", data);
        setCategories(data);
        setGetCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    useEffect(() => {
      getCategories();
    }, []);
    console.log("hadi hiya categories", categories);


  return (
    <div className=" mt-10 mx-5 md:mx-10 lg:mx-20 max-w-[1600px] relative overflow-hidden ">
        <div className="flex w-full  justify-center items-center mt-10">
        <h1 className=" text-2xl lg:text-4xl font-semibold text-black leading-tight text-center ">
        Browse  New & Trending <br />  Categories
        </h1>
      </div>
      <div className="flex gap-5  justify-center md:justify-end  items-center w-full px-5 md:px-20 mt-5  ">
        <button className="text-black slick-arrow  bg-white rounded-full p-2  hover:-translate-x-1 transition duration-300 ease-in-out ">
          <ChevronLeft  />
        </button>
        <button className="text-black bg-white slick-arrow rounded-full p-2 hover:translate-x-1 transition duration-300 ease-in-out">
          <ChevronRight />
        </button>
        <Link to="/categories" className="bg-black text-sm  text-white text-md px-7 py-2 rounded-full  border-2 border-black hover:bg-white hover:text-black transform duration-200 ease-in-out">
          view all
        </Link>
      </div>
      
      
        {/* this is the cards  */}
        <div className="  flex justify-start items-center gap-4  overflow-hidden ">
          <div className="w-full h-fit  mt-5 flex flex-col  ">
          <Slider {...settings}>
            
            {
              categories.map((collection) => (
                <div className="relative px-2 ">
                <img
                  className="object-cover  rounded-2xl  aspect-[9/11] h-fit md:w-[260px] lg:w-[280px]  xl:w-[300px] 2xl:w-[340px]"
                  src={`http://localhost:8000${collection.image_url}`}
                  alt="collection1"
                />
                <div className="absolute bottom-5 translate-x-5 transform  text-start bg-white p-2 px-7 rounded-full shadow-lg  hover:bg-black hover:text-white transition duration-300 ease-in-out">
                <p className=" text-sm font-semibold">{collection.name}</p>
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
