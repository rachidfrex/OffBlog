import { ChevronLeft } from "lucide-react";
import login from "../assets/images/login.jpg";
import { Heart } from "lucide-react";
import { Bookmark } from "lucide-react";
import { Eye } from 'lucide-react';
import { Ellipsis } from 'lucide-react';
import { useParams } from "react-router-dom";
import { useEffect ,useState } from "react";
import BlogSkeleton from "../components/blogSkeleton";
import TableofCentent from "../components/tableofCentent";

function Blog() {
  const [theblog, setTheBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  const getblogByid = async () => {
    let blog = await fetch(`http://localhost:8000/api/getBlog/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    blog = await blog.json();
    console.log("blog", blog);
    setTheBlog(blog);
    setIsLoading(!isLoading);
  }
  useEffect(() => {
    getblogByid();
  }, [id]); 
  console.log("the categories ", theblog.categories );
  // console.log("the categories name", theblog.categories.map((category) => category.name));[{…}]



    
  
  return (
    //mt-10 mx-5 max-w-[1536px]   lg:mx-20  pt-5 flex flex-col gap-5 justify-center items-center bg-white  rounded-lg 
    <div className="mt-10 flex flex-col gap-5 justify-center items-center  ">
      <div className="flex  justify-between items-center w-full px-5 transition duration-300 ease-out cursor-pointer">
        <div className="flex items-center justify-center ">
          <ChevronLeft />
          <p className="text-sm">Back</p>
        </div>
        <div className="flex  gap-5 text-sm md:text-balance ">
         <div className="flex gap-1">
          <Heart className="hover:text-red-500 cursor-pointer " /> 
          <p>12</p>
         </div >
         <div className="flex gap-1">
          <Bookmark className="hover:text-yellow-500 cursor-pointer" />
          <p>20</p>
          </div>
          <div className="flex gap-1">
          <Eye className="hover:text-blue-500 cursor-pointer" />
          <p>30</p>
          </div>
        </div>
      </div>
     
        {/* this is the blog start */}
        {isLoading ? (
        <>
          <BlogSkeleton />
          <p>loakn fw f </p>
        </>
) : (
  <div className=" w-full">
     <div className="flex gap-3 justify-center items-center  ">
     {theblog.categories && theblog.categories.slice(0, 3).map((category, index) => (
      <span key={index}  className="px-5 py-[5px] bg-slate-100 shadow-sm rounded-full">
        {category.name}
      </span>
    ))}
      </div>
    {/* this is the blogs title */}
    <div className="flex justify-center py-5">
      <h1 className=" text-3xl md:text-5xl px-10 md:px-0 flex  justify-center items-center text-center w-[700px]  font-semibold ">
        {theblog.title}
      </h1>
    </div>
   {/* this is the blogs date realsed or write day  */}
      <div className="flex justify-center items-center gap-3 py-3">
        <p className="text-center text-slate-500  text-sm">
          {new Date(theblog.created_at).toLocaleDateString()}
        </p>
        <p className="text-center text-slate-500  text-sm">
          {new Date(theblog.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </p>
      </div>
    {/* this is the blogs image */}
    <div className="px-5 w- full flex justify-center">
      <img
        src={`http://localhost:8000${theblog.image_url}`}
        className=" object-center  h-[480px] max-w-[1000px]    w-full rounded-xl  aspect-video "
      />
    </div>
    {/* this is the blogs content */}
    <div className=" flex flex-col md:grid md:grid-cols-12  justify-start w-full  gap-5 px-10 py-10">
      <div className=" col-span-3">
        <TableofCentent content={theblog.content} />
      </div>
      <div className="col-span-8 text-justify">
        {
          JSON.parse(theblog.content).map((item, index) => {
            switch (item.type) {
              case 'header' :
                const headerClass = item.data.level === 2 ? "text-2xl" : "text-lg";
                return <h1 id={item.data.text.replace(/\s+/g, '-').toLowerCase()} className={`${headerClass} font-semibold pt-5 pb-3 `} key={index}>{item.data.text}</h1>;
              case 'paragraph':
                return <p className="" key={index}>{item.data.text}</p>;
              case 'list':
                return (
                  <ul className="flex flex-col gap-2 list-disc ml-10 " key={index}>
                    {item.data.items.map((listItem, listItemIndex) => (
                      <li className="text-sm " key={listItemIndex}>  {listItem}</li> 
                    ))}
                  </ul>
                );
              case 'quote':
                return <blockquote className=" italic font-semibold text-gray-900 " key={index}>"{item.data.text}"</blockquote>;
              default:
                return null;
            }
          })
        }
      </div>
    </div>
  </div>
)}
       {/* this is the end of the blogs  */}
      {/* this is the blogs Comments */}
      <div className="flex flex-col justify-start items-start gap-5 px-40 w-full ">
        <h1 className="text-2xl font-bold">Comments (2)</h1>
        <div className="flex flex-col gap-5">
         
          <textarea name="" id="" cols="100" rows="3"
          placeholder="write your comment..."
          className="w-full p-5 rounded-lg border-2 border-slate-200"
          ></textarea>
          <button className="bg-black w-[200px] text-white p-2 rounded-lg px-10 border-2 hover:bg-white hover:border-2 hover:border-black hover:text-black transition duration-300 ease-in-out">
            Post Comment
          </button>
          </div>
          {/* this is the comment */}
          <div>
          <div className="flex gap-5 mx-5 py-5">
            <div className="w-[50px] h-[50px] rounded-full bg-black"></div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center  ">
              <h1 className="text-lg font-bold">John Doe</h1>
              <span
              className="text-slate-500  rounded-lg px-2  flex items-start  hover:bg-slate-200  cursor-pointer"
              >
                <Ellipsis />
              </span>
              </div>
              <div 
              className=" text-sm"
              >
                <div className="bg-slate-100 px-5 py-3 rounded-lg rounded-bl-2xl w-[500px] text-slate-700 text-sm" >
                <p
                className="text-justify"
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                euismod and the man is potato
                </p>
              </div>
             <div className="flex gap-2 px-4 pt-2">
             <p className="text-slate-500">March 20, 2021</p>
             {"."}
             <p className="text-slate-500">reply</p>
             {"."}
             <p className="text-slate-500 hover:text-red-500 transform duration-300 ease-in cursor-pointer">like</p>
                </div>
                
                
             </div>
             
             {/* this is the reply comment */}
             <div className="flex gap-5 mx-5 py-5">
            <div className="w-[50px] h-[50px] rounded-full bg-black"></div>
            <div className="flex flex-col gap-2">
              <div className="flex justify-between items-center  ">
              <h1 className="text-lg font-bold">Ahmed Hassan</h1>
              <span
              className="text-slate-500  rounded-lg px-2  flex items-start  hover:bg-slate-200  cursor-pointer"
              >
                <Ellipsis />
              </span>
              </div>
              <div 
              className="text-sm"
              >
                <div>
                <p
                className="text-justify  px-5 py-3 bg-slate-100 p-5 rounded-lg rounded-bl-2xl w-[500px] text-slate-700"
                >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                </p>

</div>
             </div>
             
             </div>
             </div>
              
            </div>
            </div>
          </div>
    </div>
      
    </div>
  );
}

export default Blog;
