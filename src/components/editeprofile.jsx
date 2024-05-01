import React, { useEffect } from "react";
import { User, UserRound } from "lucide-react";
import { Mail } from "lucide-react";
import { useState } from "react";
import profile from "../assets/images/profil.jpg";
import { Link, Outlet } from "react-router-dom";
import { AtSign } from "lucide-react";
import {toast , Toaster } from "react-hot-toast";
import axios from 'axios';
import { UserContext } from "./useContext";
import { useContext } from 'react';
import qs from 'qs';

function Editeprofile() {
  const { setUsercontext } = useContext(UserContext);
  const [textCounter, setTextCounter] = useState(200);
  const [user, setUser] = useState({});
  const [profileImage, setProfileImage] = useState(null);

  const handleTextChange = (event) => {
    setTextCounter(200 - event.target.value.length);
   
  };



  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      const imageFile = event.target.files[0];
      const imageUrl = URL.createObjectURL(imageFile);
      toast.success("Image uploaded successfully");
      setProfileImage(imageUrl);
      setUser({...user, profile_image: imageFile}); // store the file object instead of the file name
    }
  };


  
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    const user_id = userInfo ? userInfo.user_id : null;
    const getUser = async () => {
      let result = await fetch(`http://localhost:8000/api/user/${user_id}`, {
        method: "GET",
      });
      result = await result.json();
      console.log(result.user);
      console.log(user);
      setUser(result.user);
      setUsercontext(result.user);


    
    };
    getUser();
  }, []);




    async function updateUserInfo(e) {
    e.preventDefault();
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    const user_id = userInfo ? userInfo.user_id : null;
  
    // Create a new FormData instance
    const formData = new FormData();
  
    // Append the user data to the FormData instance
    formData.append('name', user.name);
    formData.append('email', user.email);
  
    // Append the profile image file to the FormData instance
    // Note: You need to store the profile image file in the state when it's selected
    if (user.profile_image) {
      // formData.append('profile_image', user.profile_image);
    formData.append('profile_image', user.profile_image);
      console.log("the image of the user profile",user.profile_image);
    }
    formData.append('_method', 'PUT');
  
    try {
      const response = await axios.post(`http://localhost:8000/api/user/${user_id}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
  
      console.log("the resultes",response.data);
      // You can update the local state with the updated user info
      toast.success("Profile updated successfully");
      setUser(response.data.user);
    } catch (error) {
      console.error('Error:', error.response.status, error.response.statusText);
      toast.error("Profile not updated");
    }
  
    // for (let pair of formData.entries()) {
    //   if(pair[0] === 'profile_image' && pair[1] instanceof File) {
    //     console.log(pair[0]+ ', '+ pair[1].name);
    //   } else {
    //     console.log(pair[0]+ ', '+ pair[1]);
    //   }
    // }
    
  }


  console.log("the new user info ",user);
  

  return (
    <>
      <div>
        <Toaster />
        <h1 className=" font-semibold  leading-tight text-start mt-2  ">
          Edite Profile
        </h1>
        <div className=" grid grid-cols-12   gap-5 mt-5">
          <div className=" col-span-2 flex flex-col  items-center">
            <img
              src={profileImage == null  ? `http://localhost:8000${user.profile_image}` : profileImage }
              alt=""
              className="w-32 h-32 border-2 rounded-full  object-center "
            />
            <label className="btn-light py-2 text-sm mt-2 flex justify-center w-full cursor-pointer">
              <input
                type="file"
                onChange={handleImageUpload}
                accept=".png, .jpg, .jpeg"
                hidden
              />
              Change Image
            </label>
          </div>
          <div className=" col-span-8">
            <form >
              <div className="flex gap-5">
                <div className=" className={'absolute md:border-0 border-b w-full left-0 top-full mt-0.5 md:show bg-white  border-grey py-3 px-[5vw] md:block md:relative md:inset-0 md:p-0 md:w-auto ' + (search ? 'show' : 'hide')}">
                  <input
                    name="name"
                    type="text"
                    value={user.name}
                    onChange={e => setUser({...user, name: e.target.value})}
                    placeholder="name"
                    className="w-full md:w-auto text-sm bg-slate-100 bg-grey p-3  pl-6 pr-[12%] md:pr-6 rounded-lg placeholder:text-slate-500 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 "
                  />
                  <span className="absolute right-[8%]  md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2">
                    <UserRound size={15} />
                  </span>
                </div>
                <div className=" className={'absolute md:border-0 border-b w-full left-0 top-full mt-0.5 md:show bg-white  border-grey py-3 px-[5vw] md:block md:relative md:inset-0 md:p-0 md:w-auto ' + (search ? 'show' : 'hide')}">
                  <input
                    name="email"
                    type="text"
                    value={user.email}
                    onChange={e => setUser({...user, email: e.target.value})}
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
                  name="username"
                  type="text"
                  value={user.username}
                  placeholder="user name"
                  className="w-full md:w-[515px] text-sm pr-[12%]  bg-slate-100 bg-grey p-3  pl-6 md:pr-6 rounded-lg placeholder:text-slate-500 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 "
                />
                <span className="absolute right-[8%]  md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2">
                  <AtSign size={15} />
                </span>
              </div>
              <div className="w-full mt-5 flex flex-col ">
                <textarea
                  name="bio"
                  cols="62"
                  rows="4"
                  value={user.bio}
                  onChange={handleTextChange}
                  placeholder="bio"
                  maxLength="200"
                  className="w-full resize-none md:w-[515px] text-sm   bg-slate-100 bg-grey p-3  pl-6  rounded-lg placeholder:text-slate-500  "
                ></textarea>
                <span className=" text-sm text-slate-500  mt-1">
                  {textCounter} characters remaining
                </span>
              </div>
              <div className="mt-5">
                <button className="btn-dark py-2 text-sm" onClick={updateUserInfo}>Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Editeprofile;