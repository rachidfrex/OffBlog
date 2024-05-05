import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { UserRound } from 'lucide-react';
import { LayoutDashboard } from 'lucide-react';
import { Lock } from 'lucide-react';

function Profile({setOpenProfile}) {
  const ref = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setOpenProfile(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setOpenProfile]);
  return (
    <div ref={ref}  className="  cursor-pointer  flex flex-col " >
      <ul className="flex flex-col  bg-white dropdownProfil ">
      <Link
          onClick={() => setOpenProfile(false)} 
           to="/dashboard/edit-profile" >
        <li className="hover:bg-gray-50 px-4 py-1 text-sm flex justify-start items-center gap-2  ">
          <UserRound size={15}/>
          Profile
        </li>
        </Link>
        <Link  onClick={() => setOpenProfile(false)}  to="/dashboard/user-blogs" >

        <li className="hover:bg-gray-50 px-4  py-1  flex gap-2  text-sm">
          <LayoutDashboard size={15}/>
        Dashboard
        </li>
        </Link>
        <Link  
          onClick={() => setOpenProfile(false)}
           to="/dashboard/change-password" >
        <li className="hover:bg-gray-50 px-4  flex gap-2 py-1 text-sm ">
          <Lock size={15}/>
          change password
        </li> </Link>
        <hr className="  mx-2 border-black/30 mt-2"/>
        <li className="hover:bg-gray-50 px-4  pt-2  ">log out</li>
      </ul>
    </div>
  );
}

export default Profile;
