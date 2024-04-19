import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function CreateBloge() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category_name, setCategory_name] = useState([]);
  const [image_url, setImage] = useState("");

  const navigate = useNavigate();

  const handelchageimage = (e) => {
    setImage(e.target.files[0]);
  };

  const submitdata = async (e) => {
    e.preventDefault();
  
    // Retrieve user-info from local storage and parse it
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    // Extract user_id from userInfo, or set it to null if userInfo is not available
    const user_id = userInfo ? userInfo.user_id : null;

  
    if (!title || !content || !user_id || category_name.length === 0 || !image_url) {
      toast.error("All fields are required.");
      return;
    }
    console.log(category_name)
  
    if (!user_id) {
      toast.error("User is not logged in.");
      return;
    }
  
    let formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("user_id", user_id);
    formData.append("categories", JSON.stringify(category_name));
    formData.append("image_url", image_url);
  
    let result = await fetch("http://localhost:8000/api/createBlog", {
      method: "POST",
      body: formData,
    });
    if (!result.ok) {
      toast.error(`Error: ${result.status}`);
      return;
    }

    result = await result.json();
  
    if (result.success) {
      console.log("result", result);
      toast.success(result.success);

      navigate("/about");
    } else {
      console.log("error:", result.error);
      toast.error(result.error);
    }
  };

  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <Toaster position="top-right" reverseOrder={false} />
      <div className=" max-w-[515px]  gap-2 flex flex-col w-full  ">
        <form
          action=""
          onSubmit={submitdata}
          className=" max-w-[515px]  gap-2 flex flex-col w-full  "
        >
          <h1>createBloge</h1>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="title"
            className="md:w-auto text-sm w-full bg-slate-100 bg-grey p-3  pl-6 pr-[12%] md:pr-6 rounded-lg placeholder:text-slate-500 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 "
          />
          <textarea
            name=""
            id=""
            value={content}
            onChange={(e) => setContent(e.target.value)}
            cols="62"
            rows="4"
            placeholder="content"
            className="w-full resize-none md:w-[515px] text-sm   bg-slate-100 bg-grey p-3  pl-6  rounded-lg placeholder:text-slate-500  "
          ></textarea>
          <input
            type="text"
            value={category_name.join(', ')}
            onChange={(e) => setCategory_name(e.target.value.split(','))}
            placeholder="category names (comma separated)"
            className="md:w-auto text-sm w-full bg-slate-100 bg-grey p-3  pl-6 pr-[12%] md:pr-6 rounded-lg placeholder:text-slate-500 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 "
          />
          <input
            type="file"
            name="image_url"
            onChange={handelchageimage}
            placeholder="image"
            className="md:w-auto text-sm w-full bg-slate-100 bg-grey p-3  pl-6 pr-[12%] md:pr-6 rounded-lg placeholder:text-slate-500 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 "
          />
          <button
            onClick={submitdata}
            type="submit"
            className="btn-light py-2 text-sm mt-2 flex justify-center w-full"
          >
            create
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateBloge;