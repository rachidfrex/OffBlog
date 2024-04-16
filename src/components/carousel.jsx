import React, { startTransition } from "react";
import { useState } from "react";
import { useEffect } from "react";
import banner1 from "../assets/images/banner3.png";
import banner2 from "../assets/images/banner2.jpg";
import banner3 from "../assets/images/banner1.jpg";
import { MoveDownRight } from 'lucide-react';
import { MoveUpRight } from 'lucide-react';
import { ChevronLeft } from 'lucide-react';
import { ChevronRight } from 'lucide-react';
import gsap from "gsap";
import { useRef ,useLayoutEffect } from "react";
function Carousel() {
    // help me make a slider image wiche it will change the image "banner" every 5 seconds or when the user click on the right or left button
    // it should swich bettwen the images banner1, banner2, banner3
    // start 
    const [banner, setBanner] = useState(banner1);
    const [index, setIndex] = useState(0);
    const [show, setShow] = useState(false);
    const banners = [
      {
      id: 1,
      image: banner1,
      title: "Welcome to our website",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates, quidem, dolorum, quas doloremque quos quae quia quibusdam a ",
      },
      {
      id: 2,
      image: banner2,
      title: "Discover our latest collection",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates, quidem, dolorum, quas doloremque quos quae quia quibusdam a ",
      },
      {
      id: 3,
      image: banner3,
      title: "Get ready for the summer",
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam voluptates, quidem, dolorum, quas doloremque quos quae quia quibusdam a ",
      },
    ];
    const nextBanner = () => {
      setIndex((index + 1) % banners.length);
      setBanner(banners[index]);
      setShow(true);
    };
    const prevBanner = () => {
        setIndex((index - 1 + banners.length) % banners.length);
        setBanner(banners[index]);
        setShow(true);
        };
    useEffect(() => {
        const interval = setInterval(() => {
          nextBanner();
        }, 8000);
        return () => clearInterval(interval);
      }, [index]);

      const comp = useRef(null);
      useLayoutEffect(() => {
        let ctx = gsap.context(()=>{
          const tl = gsap.timeline();
          tl.from("#title-banner", {
            opacity: 0,
             }).to("#title-banner", {
            x: -100,
            duration: 0.5,
            opacity: 1,
            ease:"power1"
          })
          })
        
      }, []);
    
  return (
    <div className=" w-full relative px-10 md:px-20  overflow-hidden  rounded-lg mt-10  " ref={comp}>
      <div className="fade-in" key={index}>
        <img
          src={banners[index].image}
          alt="banner"
          className="  object-cover  h-[700px]   w-full rounded-xl    "
        />
      </div>
      <div>
        <div className="absolute top-20 translate-x-10 transform  text-start">
         <div
         id="title-banner"
         className="bg-black p-5 rounded-lg flex items-end gap-5 w-7/12"
         >
         <h1 id="title" className="text-6xl font-semibold text-white leading-tight line-clamp-2   ">
            {banners[index].title}
          </h1>
          <p
          className="border-2 w-11 h-11 border-white p-2 rounded-full text-white mb-3 hover:rotate-45 transition duration-500 ease-in-out" 
          >
          <MoveDownRight className="  " />
          </p>
         </div>

          <p className="text-white text-lg mt-5 w-7/12">
            {banners[index].content}
          </p>
        </div>
        
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2   ">
         <div className="flex flex-col gap-1  ">
         <div className="flex  gap-2 hover:bg-white rounded-full transition duration-500 ease-in-out   ">
         <button className=" bg-white  text-balck text-md px-5 py-3 rounded-full font-semibold">
            Read now
          </button>
          <button className="  bg-white  text-balck text-lg p-3 rounded-full font-semibold hover:rotate-45 transition duration-500 ease-in-out   ">
          <MoveUpRight />
          </button>
         </div>

          
         </div>
          </div> 
            <div className="absolute top-20 right-24 flex gap-5">
            <div className="p-3 rounded-full flex gap-4">
            <button 
            onClick={prevBanner}
            className="text-black bg-white rounded-full p-2  hover:-translate-x-1 transition duration-300 ease-in-out ">
            <ChevronLeft />
            </button>
           
            <button 
            onClick={nextBanner}
            className="text-black bg-white rounded-full p-2 hover:translate-x-1 transition duration-300 ease-in-out"
            >
            <ChevronRight />
            </button>
            </div>
            </div>
            

      </div>
    </div>
  );
}

export default Carousel;
