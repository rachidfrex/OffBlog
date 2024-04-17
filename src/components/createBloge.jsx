import React from "react";
import { useState } from "react";

function CreateBloge() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [user_id, setUser_id] = useState("");
  const [category_id, setCategory_id] = useState("");
  const [image, setImage] = useState("");
  return (
    <div className="flex flex-col gap-2 justify-center items-center h-screen">
      <div className=" max-w-[515px]  gap-2 flex flex-col w-full  ">
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
          value={user_id}
          onChange={(e) => setUser_id(e.target.value)}
          placeholder="user_id"
          className="md:w-auto text-sm w-full bg-slate-100 bg-grey p-3  pl-6 pr-[12%] md:pr-6 rounded-lg placeholder:text-slate-500 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 "
        />
        <input
          type="text"
          value={category_id}
          onChange={(e) => setCategory_id(e.target.value)}
          placeholder="category_id"
          className="md:w-auto text-sm w-full bg-slate-100 bg-grey p-3  pl-6 pr-[12%] md:pr-6 rounded-lg placeholder:text-slate-500 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 "
        />
        <input
          type="file"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          placeholder="image"
          className="md:w-auto text-sm w-full bg-slate-100 bg-grey p-3  pl-6 pr-[12%] md:pr-6 rounded-lg placeholder:text-slate-500 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 "
        />
      </div>
    </div>
  );
}

export default CreateBloge;
