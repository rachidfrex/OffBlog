import React from "react";
import { Instagram } from "lucide-react";
import { Facebook } from "lucide-react";
import { Twitter } from "lucide-react";
import { Youtube } from "lucide-react";

function Footer() {
  // make an amazing footer using tailwindcss
  return (
    <div>
      <div className="bg-black/90 text-white p-10 mt-20 mx-20 m-5 rounded-lg ">
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl">OffStore</h1>
            <div className="flex gap-2 mt-4">
              <p>
                <Instagram />
              </p>
              <p>
                <Facebook />
              </p>
              <p>
                <Twitter />
              </p>
              <p>
                <Youtube />
              </p>
            </div>
          </div>
          <div>
            <h1 className="text-xl">INFO </h1>
            <div className="flex flex-col gap-3 mt-4">
              <p>products</p>
              <p>collections</p>
              <p>about</p>
              <p>FAQ</p>
            </div>
          </div>
          <div>
            <h1 className="text-xl">RECOURCES </h1>
            <div className="flex flex-col gap-3 mt-4">
                <p>contact</p>
                <p>support</p>
                <p>privacy</p>
                <p>terms</p>
                <p>blog</p>
            </div>
          </div>
          <div className="flex flex-col justify-center  items-start ">
            <h1 className="text-xl"> 
                Subscribe to our newsletter
            </h1>
           <div className="flex gap-2">
           <input type="text" 
            className="  p-2 rounded-md w-full mt-4 text-black "
            />
            <button className="bg-white text-black p-2 rounded-md mt-4 ">Subscribe</button>
           </div>
          </div>

        </div>
        <div>
            <p className="text-center mt-10">
                &copy; 2021 OffStore. All rights reserved.
            </p>
        </div>

      </div>
    </div>
  );
}

export default Footer;
