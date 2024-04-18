import { Link } from "react-router-dom";
import { Edit, Feather } from "lucide-react";
import bannerimg from "../assets/images/blog banner.png";
import { useEffect, useState } from "react";
import { useContext } from "react";
import { EdidoreContext } from "./editorPage";
import { toast } from "react-hot-toast";
import { Toaster } from "react-hot-toast";  
import EditorJS from "@editorjs/editorjs";

function BlogEditor() {
  let {blog ,blog :{title ,image_url,content,category,user_id ,des },setBlog}= useContext(EdidoreContext);


  // useEffect
  useEffect(() => {
    let editor = new EditorJS({
      holder: "textEditor",
      data: '',
      // tools: tools,
      placeholder: "Let`s write",
    });
     },[])

  const [banner, setBanner] = useState(bannerimg); 


  const handelBnnerUpload = (e) => {
    let img = e.target.files[0]; 
    console.log(img);
    if(img){
      setBanner(URL.createObjectURL(img));
      toast.success("image uploaded successfully"); 
    }else{
      toast.error("image not uploaded");
      }



    setBlog({...blog, image_url: banner});

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
  console.log(blog);

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
          <button className="btn-dark py-2 text-sm">publish</button>
          <button className="btn-light py-2 text-sm">save draft</button>
        </div>
      </nav>
      <section>
        <div className="mx-auto max-w-[900px] w-full">
          <div className="relative aspect-video bg-white border-4 border-slate-300 hover:opacity-80">
            <label htmlFor="uploadBanner">
              <img src={banner} alt="" className="z-20"  />
              <input type="file" name="image" id="uploadBanner" accept=".png , .jpg ,jpeg " hidden onChange={handelBnnerUpload} />
            </label>
          </div>
          <div>
            <textarea
            placeholder="blog title "
            className="text-4xl font-medium w-full  h-20 border-none  outline-none resize-none mt-10 leading-tight placeholder:opacity-40 overflow-hidden focus:ring-0 "
             onKeyDown={handelTitleKeyDonw}
             onChange={handelTitleChange}
             name="" id=""  ></textarea>
          <hr className="w-full  opacity-80 my-5" />
          <div id="textEditor" className="">

          </div>
          </div>

        </div>
      </section>
    </>
  );
}

export default BlogEditor;
