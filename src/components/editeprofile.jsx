import React from "react";
import { UserRound } from "lucide-react";
import { Mail } from 'lucide-react';
import { useState } from "react";

function Editeprofile() {
    const [textCounter, setTextCounter] = useState(200);

    const handleTextChange = (event) => {
      setTextCounter(200 - event.target.value.length);
    };
    
  return (
    <div>

      <h1 className=" font-semibold  leading-tight text-start mt-2  ">
        Edite Profile
      </h1>
      <div className=" grid grid-cols-12   gap-5 mt-5">
        <div className=" col-span-2 flex flex-col  items-center">
          <img src="" alt="" className="w-32 h-32 border-2 rounded-full  " />
          <button className="btn-light py-2 text-sm mt-2 flex justify-center w-full">
            upload
          </button>
        </div>
        <div className=" col-span-8">
          <form action="">
            <div className="flex gap-5">
              <div className=" className={'absolute md:border-0 border-b w-full left-0 top-full mt-0.5 md:show bg-white  border-grey py-3 px-[5vw] md:block md:relative md:inset-0 md:p-0 md:w-auto ' + (search ? 'show' : 'hide')}">
                <input
                  type="text"
                  placeholder="name"
                  className="w-full md:w-auto text-sm bg-slate-100 bg-grey p-3  pl-6 pr-[12%] md:pr-6 rounded-lg placeholder:text-slate-500 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 "
                />
                <span className="absolute right-[8%]  md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2">
                  <UserRound size={15} />
                </span>
              </div>
              <div className=" className={'absolute md:border-0 border-b w-full left-0 top-full mt-0.5 md:show bg-white  border-grey py-3 px-[5vw] md:block md:relative md:inset-0 md:p-0 md:w-auto ' + (search ? 'show' : 'hide')}">
                <input
                  type="text"
                  placeholder="email"
                  className="w-full md:w-auto text-sm bg-slate-100 bg-grey p-3  pl-6 pr-[12%] md:pr-6 rounded-lg placeholder:text-slate-500 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 "
                />
                <span className="absolute right-[8%]  md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2">
                  <Mail size={15} />
                </span>
              </div>
            </div>
            <div className=" mt-5 className={'absolute md:border-0 border-b w-full left-0 top-full mt-0.5 md:show bg-white  border-grey py-3 px-[5vw] md:block md:relative md:inset-0 md:p-0 md:w-auto ' + (search ? 'show' : 'hide')}">
                <input 
                  type="text"
                  placeholder="email"
                  className="w-full md:w-[515px] text-sm pr-[12%]  bg-slate-100 bg-grey p-3  pl-6 md:pr-6 rounded-lg placeholder:text-slate-500 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 "
                />
                <span className="absolute right-[8%]  md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2">
                  <Mail size={15} />
                </span>
              </div>
              <div className="w-full mt-5 flex flex-col ">
                <textarea name="" id="" cols="62" rows="4"
                placeholder="bio"
                maxLength="200"
                onChange={handleTextChange}
                className="w-full md:w-[515px] text-sm   bg-slate-100 bg-grey p-3  pl-6  rounded-lg placeholder:text-slate-500 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50  "
                ></textarea>
                <span
                className=" text-sm text-slate-500  mt-1" 
                >
                 {textCounter} characters remaining
                </span>
              </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Editeprofile;
