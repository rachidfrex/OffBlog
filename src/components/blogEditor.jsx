import React, { memo } from 'react';
import { Link } from "react-router-dom";
import { Feather } from "lucide-react";
import bannerimg from "../assets/images/blog banner.png";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { EdidoreContext } from "./editorPage";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";  
import EditorJS from "@editorjs/editorjs";
import { tools } from "../components/tool.component";

function BlogEditor() {
  let {blog ,blog :{title ,image_url,content,category,user_id ,des },setBlog , 
textEditor , setTextEditor ,editorState , setEditorState}= useContext(EdidoreContext);


useEffect(() => {
  // console.log("textEditor", textEditor);
  setTextEditor(new EditorJS({
    holder:"textEditor",
    data: '',
    tools: tools,
    placeholder: "Let`s write a awesome blog post!"
  }))
   },[setTextEditor ])

 
  const [banner, setBanner] = useState(bannerimg); 


  // const handelBnnerUpload = (e) => {
  //   let img = e.target.files[0]; 
  //   console.log(img);
  //   if(img){
  //     let objectUrl = URL.createObjectURL(img);
  //     setBanner(objectUrl);
  //     toast.success("image uploaded successfully"); 
  //     setBlog({...blog, image_url: banner});
  //   }else{
  //     toast.error("image not uploaded");
  //     }
  // };
  const handelBnnerUpload = (e) => {
    let img = e.target.files[0]; 
    console.log(img);
    if(img){
      let objectUrl = URL.createObjectURL(img);
      setBanner(objectUrl);
      toast.success("image uploaded successfully"); 
      setBlog({...blog, image_url: objectUrl}); // set image_url to objectUrl directly
    }else{
      toast.error("image not uploaded");
    }
  };


  const handelTitleKeyDonw = (e) => {
    if(e.keyCode === 13){
      e.preventDefault();
    }
  };
  const handelTitleChange = (e) => {
    let title = e.target;
  title.style.height = "auto";
  title.style.height = title.scrollHeight + "px";
  setBlog({...blog, title: title.value});
  };
  useEffect(() => {
    console.log('blog', blog);
  }, [blog]);
  const handelPublishEvent = async () => {
    if(!blog.image_url.length){
      return toast.error("please upload a banner image");
    }
    if(!blog.title.length){
      return toast.error("please enter a title");
    }
    if(textEditor.isReady){
      textEditor.save().then(data => {
        console.log(data);
        if(data.blocks.length){
          setBlog({...blog, content: data});
          setEditorState("publish");
          console.log('blog 1',blog);
        }else{
          toast.error("please write some content ");
        }
      }).catch(err => {
        console.log(err);
        } )
    }
    console.log( 'blog 2 ',blog);
  }

  
 

  return (
    <>

      <nav className="navbar">
      <Toaster position="top-right" reverseOrder={false} />
        <Link to="/" className="flex-none w-5  ">
          <Feather />
        </Link>
        <p className="max-md:hiddnen text-black line-clamp-1 w-full">
          {title.length ? title : "new blog"}
        </p>
        <div className="flex gap-4 ml-auto">
          <button className="btn-dark py-2 text-sm"
          onClick={handelPublishEvent}
          >publish</button>
          <button className="btn-light py-2 text-sm">save draft</button>
        </div>
      </nav>
      <section>
        <div className="mx-auto max-w-[900px] w-full">
          <div className="relative aspect-video bg-white border-4 border-slate-300 hover:opacity-80">
            <label htmlFor="uploadBanner">
            <img src={blog.image_url ? blog.image_url : banner} alt="" className="z-20" />
              <input type="file" name="image" id="uploadBanner" accept=".png , .jpg ,jpeg " hidden onChange={handelBnnerUpload} />
            </label>
          </div>
          <div>
            <textarea
            defaultValue={title}
            placeholder="blog title "
            className="text-4xl font-medium w-full  h-20 border-none  outline-none resize-none mt-10 leading-tight placeholder:opacity-40 overflow-hidden focus:ring-0 "
             onKeyDown={handelTitleKeyDonw}
             onChange={handelTitleChange}
             name="" id=""  ></textarea>
             
          <hr className="w-full  opacity-80 my-5" />
          <div id="textEditor" className=""></div>
      

          </div>

        </div>
      </section>
    </>
  );
}

export default BlogEditor;
