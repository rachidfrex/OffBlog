import { Link } from "react-router-dom";
import { Feather } from "lucide-react";
import bannerimg from "../assets/images/blog banner.png";
import { useState } from "react";

function BlogEditor() {

  const [banner, setBanner] = useState(bannerimg); 

  const handelBnnerUpload = (e) => {
    let img = e.target.files[0]; 
    console.log(img);
    setBanner(URL.createObjectURL(img));
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
  };
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="flex-none w-5  ">
          <Feather />
        </Link>
        <p className="max-md:hiddnen text-black line-clamp-1 w-full">
          new blog
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
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogEditor;
