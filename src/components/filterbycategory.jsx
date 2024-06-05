import React from 'react';
import { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';

// use params to get the category id
import { useParams } from 'react-router-dom';
const Filterbycategory = () => {
    const { id } = useParams();
    const [allblogs, setAllBlogs] = useState([]);
    const handelGetBlogsBytCategory = async () => {
        let blogs  = await fetch(`http://localhost:8000/api/category/${id}/blogs`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        blogs = await blogs.json();
        console.log("blogs", blogs);
        setAllBlogs(blogs);
        }
    useEffect(() => {
        handelGetBlogsBytCategory();
    }
    , []);
        
    return (
        <div className='flex flex-col justify-center items-center mx-5 h-full my-10'>
            <h1 className='flex justify-center items-center text-3xl font-bold'>
                Filter by category
            </h1>
            {/* <div className="py-5  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4 max-w-[1280px]">
          {allblogs.map((Blogs) => (
            <Link to={`/Blog/${Blogs.id}`} className="text-sm">
            <div key={Blogs.id} className="relative  rounded-lg bg-white">
              
              <div className=" ">
                <img
                  className="object-cover rounded-md   aspect-video w-full bg-black/30  "
                  src={`http://localhost:8000${Blogs.image_url}`}
                  alt={Blogs.title}
                />
              </div> 

        
              <div className=" mb-3 flex justify-end  items-center w-full">
                <div className="group text-black transition  duration-300 cursor-pointer text-sm">
                  <Link to={`/Blog/${Blogs.id}`} className="text-sm">
                    read more
                  </Link>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                </div>
              </div>
            </div>
             </Link>
          ))}
        </div> */}
         <div className="py-5  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4 max-w-[1280px]">
          {allblogs.map((Blogs) => (
            <Link to={`/Blog/${Blogs.id}`} className="text-sm">
            <div key={Blogs.id} className="relative  rounded-lg bg-white">
              
              <div className=" ">
                <img
                  className="object-cover rounded-md   aspect-video w-full bg-black/30  "
                  src={`http://localhost:8000${Blogs.image_url}`}
                  alt={Blogs.title}
                />
              </div> 
             
              <div className=" bottom-5 flex flex-col gap-2  items-start   text-start bg-white py-2 mt-1">
                {
                  Blogs.user && <div className="flex items-center gap-2">
                  <img
                    className="w-10 h-10 rounded-full"
                    src={`http://localhost:8000${Blogs.user.profile_image}`}
                    alt={Blogs.user.name}
                  />
                 <div>
                  <p className="text-xs font-semibold text-slate-600">
                      {Blogs.user.name}
                    </p>
                    <p className="text-xs    text-slate-600">
                      {new Date(Blogs.created_at).toLocaleDateString()}
                    </p>
                 </div>
                </div>
                }
                <div>
                  <p className="  font-semibold text-[14px] line-clamp-2 ">{Blogs.title}</p>
                  <p className="  line-clamp-2 text-slate-600 text-xs ">

                        { 
                  JSON.parse(Blogs.content).map((item, index) => (
                    item.type === 'paragraph' && <p
                    className='text-[13px] text-slate-500'
                   key={index}>{item.data.text}</p>

                  ))
                }
                  </p>
                </div>
              </div>

              {/* <div className="flex gap-2">
              {Blogs.categories.slice(0, 3).map((category, index) => (
                  <div className="flex items-center justify-start gap-2 mt-2" key={index}>
                    <div className={`py-0.5 px-2 rounded-full ${index === 0 ? 'bg-violet-200' : index === 1 ? 'bg-yellow-200' : 'bg-green-200'}`}>
                      <p className={`text-xs font-semibold ${index === 0 ? 'text-violet-600' : index === 1 ? 'text-yellow-600' : 'text-green-600'}`}>
                        {category.name}
                      </p>
                    </div>
                  </div>
                ))}
                {Blogs.categories.length > 3 && (
                  <div className="flex items-center justify-start gap-2 mt-2">
                    <div className="py-0.5 px-2 rounded-full bg-green-200">
                      <p className="text-xs font-semibold text-green-600">
                        +{Blogs.categories.length - 3}
                      </p>
                    </div>
                  </div>
                )}
              </div> */}

              <div className=" mb-3 flex justify-end  items-center w-full">
                <div className="group text-black transition  duration-300 cursor-pointer text-sm">
                  <Link to={`/Blog/${Blogs.id}`} className="text-sm">
                    read more
                  </Link>
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-300 h-0.5 bg-black"></span>
                </div>
              </div>
            </div>
             </Link>
          ))}
        </div>
           
        </div>
    );
}

export default Filterbycategory;
