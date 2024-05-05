import GetBlogs from "../components/getBlogs";
import { useState , useEffect } from "react";
import { UserContext } from "../components/useContext";
import { useContext } from "react";
import { Link } from "react-router-dom";
function Blogs() {
  const { getBlogs } = useContext(UserContext);
  const [searchInput, setSearchInput] = useState('');
const [searchResults, setSearchResults] = useState([]);
function filterBlogs() {
  const filteredBlogs = getBlogs.filter(blog => blog.title.toLowerCase().includes(searchInput.toLowerCase()));
   setSearchResults(filteredBlogs);
  return filteredBlogs;
}
useEffect(() => {
  filterBlogs();
}
, [searchInput]);
console.log("searchResults", searchResults);

  return (
    <div className="md:mt-10 mx-5 md:mx-20 bg-white   flex flex-col gap-5 justify-center items-center   ">
      <div className="  w-full relative  rounded-xl     ">
       <div className=" py-32 ">
       <div className=" text-center flex flex-col gap-2 justify-center items-center">
          <h1 className="text-4xl  font-semibold text-black leading-tight text-center">
            Write your idea and spread it with the world
          </h1>
          <p className="text-slate-500 w-full md:w-[550px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            and the world is potato
          </p>
            {/* this is the Search  */}
          <div  className="flex gap-2 justify-center  items-center relative w-full md:w-[700px]">
          <input

            type="text"
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="p-[13px] border-2 w-full  rounded-md mt-4 text-slate-600 text-sm relative shadow-sm  "
            placeholder="Search for blogs..."
          />
          <button className="bg-black/90 text-sm border-2 border-black hover:bg-slate-100 hover:border-2 hover:text-slate-600 transform duration-100 ease-in text-white p-2 rounded-md mt-4 absolute right-1">
            Search now
          </button>
        </div>
        </div>
       </div>
      </div>
      <div className="w-full ">
       <div 
       className="flex  gap-5 justify-between items-center w-full"
       >
        <h1 className="   text-4xl flex py-5 flex-col justify-start items-start w-full text-black leading-tight text-center ">
            recently added blogs
          </h1>
          {/* <div>
            <select className="px-10 py-2 rounded-md border-2 border-black text-slate-600">
              <option value="default">store  by</option>
              <option value="name">Name</option>
              <option value="date">Date</option>
              <option value="category">Category</option>
            </select>
          </div> */}
       </div>
       {
          searchInput === '' 
          ?
        <GetBlogs />
        :
        <div className="py-5  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-4 max-w-[1280px]">
        {searchResults.map((Blogs) => (
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
                <p className="  font-semibold text-[14px] ">{Blogs.title}</p>
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

            <div className="flex gap-2">
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
       }
        {/* do the  pagination using tailwind */}
        <div className="flex justify-center items-center mt-5">
            <button className="bg-black text-white px-4 py-2 rounded-md mr-2">Previous</button>
            <button className="bg-black text-white px-4 py-2 rounded-md">Next</button>
            </div>
        </div>
      </div>
  );
}

export default Blogs;
