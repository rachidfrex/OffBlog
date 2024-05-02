import React, { useState } from "react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Youtube } from "lucide-react";

function Footer() {
  // make an amazing footer using tailwindcss
  const [isHovered, setIsHovered] = useState(false);

  return (
    // <div>
    //   <div className="bg-black/90 text-white p-10 mt-20 mx-20 m-5 rounded-lg ">
    //     <div className="flex justify-between">
    //       <div>
    //         <h1 className="text-xl">OffStore</h1>
    //         <div className="flex gap-2 mt-4">
    //           <p>
    //             <Instagram />
    //           </p>
    //           <p>
    //             <Facebook />
    //           </p>
    //           <p>
    //             <Twitter />
    //           </p>
    //           <p>
    //             <Youtube />
    //           </p>
    //         </div>
    //       </div>
    //       <div>
    //         <h1 className="text-xl">INFO </h1>
    //         <div className="flex flex-col gap-3 mt-4">
    //           <p>products</p>
    //           <p>collections</p>
    //           <p>about</p>
    //           <p>FAQ</p>
    //         </div>
    //       </div>
    //       <div>
    //         <h1 className="text-xl">RECOURCES </h1>
    //         <div className="flex flex-col gap-3 mt-4">
    //           <p>contact</p>
    //           <p>support</p>
    //           <p>privacy</p>
    //           <p>terms</p>
    //           <p>blog</p>
    //         </div>
    //       </div>
    //       <div className="flex flex-col justify-center  items-start ">
    //         <h1 className="text-xl">Subscribe to our newsletter</h1>
    //         <div className="flex gap-2">
    //           <input
    //             type="text"
    //             className="  p-2 rounded-md w-full mt-4 text-black "
    //           />
    //           <button className="bg-white text-black p-2 rounded-md mt-4 ">
    //             Subscribe
    //           </button>
    //         </div>
    //       </div>
    //     </div>
    //     <div>
    //       <p className="text-center mt-10">
    //         &copy; 2021 OffStore. All rights reserved.
    //       </p>
         
    //     </div>
    //   </div>
    // </div>
    

<footer className="bg-black/90 rounded-lg shadow  m-4">
    <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
            <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
                
                <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">offBlog</span>
            </a>
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">About</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">FAQ</a>
                </li>
                <li>
                    <a href="#" className="hover:underline me-4 md:me-6">Blogs</a>
                </li>
                <li>
                    <a href="#" className="hover:underline">Contact</a>
                </li>
            </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a href="/" className="hover:underline">offBlog™</a>. All Rights Reserved.</span>
    </div>
</footer>


  );
}

export default Footer;
