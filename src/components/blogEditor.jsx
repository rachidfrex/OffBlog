import React from "react";
import { Link } from "react-router-dom";
import { Feather } from "lucide-react";
import banner from "../assets/images/blog banner.png";

function BlogEditor() {
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
              <img src={banner} alt="" />
              <input type="file" name="image" id="uploadBanner" accept=".png , .jpg ,jpeg " hidden />
            </label>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogEditor;
