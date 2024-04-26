import React, { useEffect } from "react";
import { User, UserRound } from "lucide-react";
import { Mail } from "lucide-react";
import { useState } from "react";
import profile from "../assets/images/profil.jpg";
import { Link, Outlet } from "react-router-dom";
import { AtSign } from "lucide-react";

function Editeprofile() {
  const [textCounter, setTextCounter] = useState(200);
  const [user, setUser] = useState({});
  const [newUser, setNewUser] = useState({});
  const [profileImage, setProfileImage] = useState(
    `http://localhost:8000${user.profile_image}` || profile
  );
  const handleTextChange = (event) => {
    setTextCounter(200 - event.target.value.length);
  };

  const handleImageUpload = (event) => {
    if (event.target.files && event.target.files[0]) {
      setProfileImage(URL.createObjectURL(event.target.files[0]));
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
    };
    getUser();
  }, []);
  


const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [username, setUsername] = useState("");
const [bio, setBio] = useState("");
// const [profile_image, setProfile_image] = useState("");
  const handelUpdateData = async (e) => {
    e.preventDefault();
    
    let formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("username", username);
    formData.append("bio", bio);
    formData.append("profile_image", profileImage);
  
    // Get user id from local storage
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    const user_id = userInfo ? userInfo.user_id : null;
  
    let result = await fetch(`http://localhost:8000/api/user/${user_id}`, {
      method: "PUT",
      body: formData,
    });
    result = await result.json();
    console.log(result);
    
  }



  return (
    <>
      <div>
        <h1 className=" font-semibold  leading-tight text-start mt-2  ">
          Edite Profile
        </h1>
        <div className=" grid grid-cols-12   gap-5 mt-5">
          <div className=" col-span-2 flex flex-col  items-center">
            <img
              src={profileImage}
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
            <form onSubmit={handelUpdateData}>
              <div className="flex gap-5">
                <div className=" className={'absolute md:border-0 border-b w-full left-0 top-full mt-0.5 md:show bg-white  border-grey py-3 px-[5vw] md:block md:relative md:inset-0 md:p-0 md:w-auto ' + (search ? 'show' : 'hide')}">
                  <input
                    name="name"
                    type="text"
                    value={user.name}
                    onChange={(e)=>setName(e.target.value)}
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
                    onChange={(e)=>setEmail(e.target.value)}
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
                  onChange={(e)=>setUsername(e.target.value)}
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
                  onChange={(e)=>setBio(e.target.value)}
                  placeholder="bio"
                  maxLength="200"
                  className="w-full resize-none md:w-[515px] text-sm   bg-slate-100 bg-grey p-3  pl-6  rounded-lg placeholder:text-slate-500  "
                ></textarea>
                <span className=" text-sm text-slate-500  mt-1">
                  {textCounter} characters remaining
                </span>
              </div>
              <div className="mt-5">
                <button className="btn-dark py-2 text-sm">Save</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Editeprofile;