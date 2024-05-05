import React from 'react'
import { UserContext } from "../components/useContext";
import { useContext } from 'react';
import { Link } from 'react-router-dom';


function GetBlogsV2() {
  const { getBlogs  } = useContext(UserContext);

  
  return (
    <div> 
     
      <div class=" py-5  grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 grid-cols-1 gap-4 max-w-[1280px]">
        {getBlogs.map((Blogs) => (
            <Link to={`/Blog/${Blogs.id}`} className="text-sm">

          <div key={Blogs.id} className='relative  rounded-lg bg-white  border-2  grid grid-cols-5 justify-start items-start w-full '>
            <div className='  col-span-2 p-2  '>
              <img
                className=' object-center  h-fit  min-h-[150px] aspect-square rounded-md sm:aspect-video w-full bg-black/30'
                src={`http://localhost:8000${Blogs.image_url}`}
                alt={Blogs.title}
              />
            </div>
            <div className=' p-3 col-span-3  flex  flex-col gap-2  '>
                <div className='flex gap-2 justify-start items-center'>
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
                </div>
                <div className=''>
                  <p className=' line-clamp-2 '>
                    {Blogs.title}
                  </p>
                </div>
                <div>
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

            </div>
          </Link>
        ))}
      </div>

    </div>
  )
}

export default GetBlogsV2