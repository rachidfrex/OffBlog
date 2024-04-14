import React from 'react'
import { Lock } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';
function Changepassword() {
  return (
    <div 
    className=''
    >
         <h1 className=" font-semibold  leading-tight text-start mt-2  ">
          Change Password
        </h1>
        <div>
            <form action="" className="w-full md:w-[28rem] flex justify-start items-start flex-col gap-3">
            <div className=" mt-5 className={'absolute md:border-0 border-b w-full left-0 top-full mt-0.5 md:show bg-white  border-grey py-3 px-[5vw] md:block md:relative md:inset-0 md:p-0 md:w-auto ' + (search ? 'show' : 'hide')}">
                <input
                  type="text"
                  placeholder="old password"
                  className="w-full md:w-[515px] text-sm pr-[12%]  bg-slate-100 bg-grey p-3  pl-6 md:pr-6 rounded-lg placeholder:text-slate-500 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 "
                />
                <span className="absolute right-[8%]  md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2">
                  <Lock size={15} />
                </span>
            </div>
            <div className=" mt-5 className={'absolute md:border-0 border-b w-full left-0 top-full mt-0.5 md:show bg-white  border-grey py-3 px-[5vw] md:block md:relative md:inset-0 md:p-0 md:w-auto ' + (search ? 'show' : 'hide')}">
                <input
                  type="text"
                  placeholder="new password"
                  className="w-full md:w-[515px] text-sm pr-[12%]  bg-slate-100 bg-grey p-3  pl-6 md:pr-6 rounded-lg placeholder:text-slate-500 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 "
                />
                <span className="absolute right-[8%]  md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2">
                  <Lock size={15} />
                </span>
            </div>
            <div className=" mt-5 className={'absolute md:border-0 border-b w-full left-0 top-full mt-0.5 md:show bg-white  border-grey py-3 px-[5vw] md:block md:relative md:inset-0 md:p-0 md:w-auto ' + (search ? 'show' : 'hide')}">
                <input
                  type="text"
                  placeholder="confirm password"
                  className="w-full md:w-[515px] text-sm pr-[12%]  bg-slate-100 bg-grey p-3  pl-6 md:pr-6 rounded-lg placeholder:text-slate-500 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 "
                />
                <span className="absolute right-[8%]  md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2">
                  <LockKeyhole size={15} />
                </span>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Changepassword