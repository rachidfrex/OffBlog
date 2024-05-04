import React from 'react'
import { UserContext } from "../components/useContext";
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";

function MostPopilare() {
  const { getBlogs } = useContext(UserContext);
  console.log("getBlogs hado ze3ma ta9amax", getBlogs);


return (
    <div>
        <div className="flex justify-center items-center">
            {/* more free and premium Tailwind CSS components at https://tailwinduikit.com/ */}
            <div className="2xl:mx-auto 2xl:container lg:px-20 lg:py-16 md:py-12 md:px-6 py-9 px-4 w-96 sm:w-auto">
                <div role="main" className="flex flex-col items-center justify-center">
                    <h1 className="text-4xl font-semibold leading-9 text-center text-gray-800 ">This Week Blogs</h1>
                    {/* <p className="text-base leading-normal text-center text-gray-600 mt-4 lg:w-1/2 md:w-10/12 w-11/12">If you're looking for random paragraphs, you've come to the right place. When a random word or a random sentence isn't quite enough</p> */}
                </div>
                {/* hna kayba 3amal batatata */}
                
                    <div className="lg:flex items-stretch md:mt-12 mt-8">
                   
                     <div className="lg:w-1/2">
                     
                     <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6">
                     { getBlogs.slice(0, 1).map((blog) => (
                         <div className="sm:w-1/2 relative rounded-lg">
                             <div>
                                 <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{new Date(blog.created_at).toLocaleDateString()}</p>
                                 <div className="absolute bottom-0 left-0 p-6">
                                     <h2 className="text-lg font-semibold 5 text-white line-clamp-2">{blog.title}</h2>
                                     {/* <p className="text-base leading-4 text-white mt-2">Dive into minimalism</p> */}
                                     <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                         <p className="pr-2 text-sm font-medium leading-none"><Link to={`/Blog/${blog.id}`} className="text-sm">
                                            Read More
                                        </Link></p>
                                         <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                         </svg>
                                     </a>
                                 </div>
                             </div> 
                             <img src={`http://localhost:8000${blog.image_url}`}  className="   object-cover aspect-square rounded-md   " />
                         </div>
                        ))}
                     { getBlogs.slice(1, 2).map((blog) => (

                         <div className="sm:w-1/2 sm:mt-0 mt-4 relative">
                             <div>
                                 <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{new Date(blog.created_at).toLocaleDateString()}</p>
                                 <div className="absolute bottom-0 left-0 p-6">
                                     <h2 className="text-lg font-semibold 5 text-white line-clamp-2">{blog.title}</h2>
                                     <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                         <p className="pr-2 text-sm font-medium leading-none">
                                         <Link to={`/Blog/${blog.id}`} className="text-sm">
                                            Read More
                                        </Link>
                                         </p>
                                         <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                             <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                         </svg>
                                     </a>
                                 </div>
                             </div>
                             <img src={`http://localhost:8000${blog.image_url}`} className=" object-cover  aspect-square rounded-md  " alt="wall design" />
                         </div>
                         ))}
                     </div>
                     { getBlogs.slice(2, 3).map((blog) => (
                        
                     <div className="relative">
                         <div>
                             <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{new Date(blog.created_at).toLocaleDateString()}</p>
                             <div className="absolute bottom-0 left-0 md:p-10 p-6">
                                 <h2 className="text-xl font-semibold 5 text-white line-clamp-2">{blog.title}</h2>
                                 <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                     <p className="pr-2 text-sm font-medium leading-none"><Link to={`/Blog/${blog.id}`} className="text-sm">
                                            Read More
                                        </Link></p>
                                     <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                         <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                     </svg>
                                 </a>
                             </div>
                         </div>
                         <img src={`http://localhost:8000${blog.image_url}`} alt="sitting place" className="w-full mt-8 md:mt-6  aspect-square   rounded-md hidden sm:block" />
                         <img className="w-full mt-4 sm:hidden" src="https://i.ibb.co/6XYbN7f/Rectangle-29.png" alt="sitting place" />
                     </div>
                        ))}
             </div>
                   
                        <div className="lg:w-1/2 xl:ml-8 lg:ml-4 lg:mt-0 md:mt-6 mt-4 lg:flex flex-col justify-between">
                     { getBlogs.slice(3, 4).map((blog) => (

                            <div className="relative">
                                <div>
                                    <p className="md:p-10 p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{new Date(blog.created_at).toLocaleDateString()}</p>
                                    <div className="absolute bottom-0 left-0 md:p-10 p-6">
                                        <h2 className="text-lg font-semibold 5 text-white line-clamp-2">{blog.title}</h2>
                                        <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                            <p className="pr-2 text-sm font-medium leading-none">Read More</p>
                                            <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <img src={`http://localhost:8000${blog.image_url}`} alt="sitting place" className="w-full sm:block hidden aspect-square rounded-md" />
                                <img className="w-full sm:hidden" src="https://i.ibb.co/dpXStJk/Rectangle-29.png" alt="sitting place" />
                            </div>
                        ))}
                            <div className="sm:flex items-center justify-between xl:gap-x-8 gap-x-6 md:mt-6 mt-4">
                     { getBlogs.slice(4, 5).map((blog) => (

                                <div className="relative w-full">
                                    <div>
                                        <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{new Date(blog.created_at).toLocaleDateString()}</p>
                                        <div className="absolute bottom-0 left-0 p-6">
                                            <h2 className=" font-semibold 5 text-white line-clamp-2">{blog.title}</h2>
                                            <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                                <p className="pr-2 text-sm font-medium leading-none"><Link to={`/Blog/${blog.id}`} className="text-sm">
                                            Read More
                                        </Link></p>
                                                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <img  src={`http://localhost:8000${blog.image_url}`} className="w-full aspect-square rounded-md"  />
                                </div>
                            ))}
                     { getBlogs.slice(5, 6).map((blog) => (

                                <div className="relative w-full sm:mt-0 mt-4">
                                    <div>
                                        <p className="p-6 text-xs font-medium leading-3 text-white absolute top-0 right-0">{new Date(blog.created_at).toLocaleDateString()}</p>
                                        <div className="absolute bottom-0 left-0 p-6">
                                            <h2 className=" font-semibold 5 text-white line-clamp-2">{blog.title}</h2>
                                            <a href="javascript:void(0)" className="focus:outline-none focus:underline flex items-center mt-4 cursor-pointer text-white hover:text-gray-200 hover:underline">
                                                <p className="pr-2 text-sm font-medium leading-none"><Link to={`/Blog/${blog.id}`} className="text-sm">
                                            Read More
                                        </Link></p>
                                                <svg className="fill-stroke" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M5.75 12.5L10.25 8L5.75 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <img src={`http://localhost:8000${blog.image_url}`}className="w-full aspect-square rounded-md"  />
                                </div>
                            ))}
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>
);
}

export default MostPopilare