import React from "react";
import { Link } from "react-router-dom";
function Profile() {
  return (
    <div className="  cursor-pointer flex flex-col  text-sm ">
      <ul className="flex flex-col  dropdownProfil">
        <li className="hover:bg-gray-50 px-4 py-1 ">
          <Link to="/dashboard/edit-profile">Profile</Link>
        </li>
        <li className="hover:bg-gray-50 px-4  py-1   ">
          <Link to="/dashboard">Dashboard</Link>
        </li>
        <li className="hover:bg-gray-50 px-4  py-1  ">
          <Link to="/dashboard/change-password">Notifications</Link>
        </li> 
        <hr className="  mx-2 border-black/30 mt-2"/>
        <li className="hover:bg-gray-50 px-4  pt-2  ">log out</li>
      </ul>
    </div>
  );
}

export default Profile;
