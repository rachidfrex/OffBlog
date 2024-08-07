import { ChevronLeft, Link } from "lucide-react";
import login from "../assets/images/login.jpg";
import { Heart } from "lucide-react";
import { Bookmark } from "lucide-react";
import { Eye } from 'lucide-react';
import { Ellipsis } from 'lucide-react';
import { useParams } from "react-router-dom";
import { useEffect ,useState  } from "react";
import BlogSkeleton from "../components/blogSkeleton";
import TableofCentent from "../components/tableofCentent";
import { useNavigate } from 'react-router-dom';
function Blog() {
  const [theblog, setTheBlog] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();
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

  async function toggleLike() {
    const response = await fetch(`http://localhost:8000/api/blogs/${theblog.id}/like`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        // Include your authentication headers here
      },
    });
  
    if (!response.ok) {
      console.error('Failed to toggle like');
      return;
    }
  
    const updatedBlog = await response.json();
    setTheBlog(updatedBlog);
  }
  function htmlDecode(input){
    var doc = new DOMParser().parseFromString(input, "text/html");
    return doc.documentElement.textContent;
  }

    
  
  return (
    //mt-10 mx-5 max-w-[1536px]   lg:mx-20  pt-5 flex flex-col gap-5 justify-center items-center bg-white  rounded-lg 
    <div className="mt-10 flex flex-col gap-5 justify-center items-center lg:mx-10  ">
      <div className="flex  justify-between items-center w-full px-5 transition duration-300 ease-out cursor-pointer">
        <div className="flex items-center justify-center ">
          <ChevronLeft />
          <button  onClick={() => navigate(-1)}className="text-sm">Back</button>
        </div>
        {/* <button onClick={toggleLike}>  Like</button> */}
      </div>
     
        {/* this is the blog start */}
        {isLoading ? (
        <>
         
          <BlogSkeleton />
        
          <p>loakn fw f </p>
        </>
) : (
  <div className=" w-full ">
     <div className="flex gap-3 justify-center items-center  ">
     {theblog.categories.slice(0, 3).map((category, index) => (
                  <div className="flex items-center justify-start gap-2 mt-2" key={index}>
                    <div className={`py-0.5 px-3 rounded-full ${index === 0 ? 'bg-violet-200' : index === 1 ? 'bg-yellow-200' : 'bg-green-200'}`}>
                      <p className={`text-sm font-semibold ${index === 0 ? 'text-violet-600' : index === 1 ? 'text-yellow-600' : 'text-green-600'}`}>
                        {category.name}
                      </p>
                    </div>
                  </div>
                ))}
                {theblog.categories.length > 3 && (
                  <div className="flex items-center justify-start gap-2 mt-2">
                    <div className="py-0.5 px-3 rounded-full bg-orange-200">
                      <p className=" text-sm font-semibold text-orange-600">
                        +{theblog.categories.length - 3}
                      </p>
                    </div>
                  </div>
                )}
      </div>
    {/* this is the blogs title */}
    <div className="flex justify-center py-5">
      <h1 className=" text-xl md:text-5xl px-10 md:px-0 flex  justify-center items-center text-center w-full md:w-[800px]  font-semibold ">
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
    <div className="px-5 w-full flex justify-center">
      <img
        src={`http://localhost:8000${theblog.image_url}`}
        className=" object-center w-full  md:h-[480px] max-w-[1000px]     rounded-xl  aspect-video "
      />
    </div>
    {/* the blog user profile and the likes also  */}
    {/* <div className=" flex items-center justify-around gap-10 my-5">
      <div>
      {
        theblog.user && <div className="flex items-center gap-2">
        <img
          className=" w-16 h-16 rounded-full"
          src={`http://localhost:8000${theblog.user.profile_image}`}
          alt={theblog.user.name}
        />
        <div>
        <p className="text-sm font-semibold text-slate-600">
            {theblog.user.name}
          </p>
          <p className="text-xs    text-slate-600">
            {new Date(theblog.created_at).toLocaleDateString()}
          </p>
        </div>
      </div>
      }
      </div>
    <div className="flex  gap-5 text-sm md:text-balance ">
         <div className="flex gap-1">
          <Heart size={20} className="hover:text-red-500 cursor-pointer " /> 
          <p>12</p>
         </div >
         <div className="flex gap-1">
          <Bookmark size={20} className="hover:text-yellow-500 cursor-pointer" />
          <p>20</p>
          </div>
          <div className="flex gap-1">
          <Eye size={20} className="hover:text-blue-500 cursor-pointer" />
          <p>30</p>
          </div>
        </div>

    </div> */}


    {/* this is the blogs content */}
    <div className=" flex flex-col lg:grid lg:grid-cols-12  justify-start w-full  gap-5 px-5 md:px-10 py-10">
      <div className=" col-span-4  lg:col-span-3">
        <TableofCentent content={theblog.content} />
      </div>
      <div className=" col-span-8 lg:col-span-8 text-justify">
        {
          JSON.parse(theblog.content).map((item, index) => {
            switch (item.type) {
              case 'header' :
                const headerClass = item.data.level === 2 ? "text-2xl" : "text-lg";
                return <h1 id={item.data.text.replace(/\s+/g, '-').toLowerCase()} className={`${headerClass} font-semibold pt-5 pb-3 `} key={index}>{item.data.text}</h1>;
              case 'paragraph':
                return <p className="" key={index} dangerouslySetInnerHTML={{ __html: htmlDecode(item.data.text) }}></p>;
              case 'list':
                return (
                  <ul className="flex flex-col gap-2 list-disc ml-10 " key={index}>
                    {item.data.items.map((listItem, listItemIndex) => (
                      <li className="text-sm " key={listItemIndex}>  {listItem}</li> 
                    ))}
                  </ul>
                );
              case 'quote':
                return (
                  <>
                  <blockquote className=" italic font-semibold text-gray-900 " key={index}>"{item.data.text}"</blockquote> 
                  <p className="  text-gray-900 mt-1 "   >{item.data.caption}</p>
                  </>
                  
                );
               
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
      {/* <section className=" w-full relative flex items-center justify-center antialiased bg-white ">
    <div className="container px-0 mx-auto sm:px-5">

        <div className="flex-col w-full py-4 mx-auto bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
            <div className="flex flex-row">
                <img className="object-cover w-12 h-12 border-2 border-gray-300 rounded-full" alt="Noob master's avatar" src="https://images.unsplash.com/photo-1517070208541-6ddc4d3efbcb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                <div className="flex-col mt-1">
                    <div className="flex items-center flex-1 px-4 font-bold leading-tight">Noob master
                        <span className="ml-2 text-xs font-normal text-gray-500">2 weeks ago</span>
                    </div>
                    <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">Wow!!! how you did you create this?
                    </div>
                    <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                        <svg className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900" viewBox="0 0 95 78" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z" fill-rule="nonzero" />
                        </svg>
                    </button>
                    <button className="inline-flex items-center px-1 -ml-1 flex-column">
                        <svg className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                        </svg>
                    </button>
                </div>
            </div>
            <hr className="my-2 ml-16 border-gray-200" />
            <div className="flex flex-row pt-1 md-10 md:ml-16">
                <img className="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Emily's avatar" src="https://images.unsplash.com/photo-1581624657276-5807462d0a3a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                <div className="flex-col mt-1">
                    <div className="flex items-center flex-1 px-4 font-bold leading-tight">Emily
                        <span className="ml-2 text-xs font-normal text-gray-500">5 days ago</span>
                    </div>
                    <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">I created it using TailwindCSS
                    </div>
                    <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                        <svg className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900" viewBox="0 0 95 78" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z" fill-rule="nonzero" />
                        </svg>
                    </button>
                    <button className="inline-flex items-center px-1 -ml-1 flex-column">
                        <svg className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                            <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>

        <div className="flex-col w-full py-4 mx-auto mt-3 bg-white border-b-2 border-r-2 border-gray-200 sm:px-4 sm:py-4 md:px-4 sm:rounded-lg sm:shadow-sm md:w-2/3">
            <div className="flex flex-row md-10">
                <img className="w-12 h-12 border-2 border-gray-300 rounded-full" alt="Anonymous's avatar" src="https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&faces=1&faceindex=1&facepad=2.5&w=500&h=500&q=80" />
                <div className="flex-col mt-1">
                    <div className="flex items-center flex-1 px-4 font-bold leading-tight">Anonymous
                        <span className="ml-2 text-xs font-normal text-gray-500">3 days ago</span>
                    </div>
                    <div className="flex-1 px-2 ml-2 text-sm font-medium leading-loose text-gray-600">Very cool! I'll have to learn more about Tailwind.
                    </div>
                    <button className="inline-flex items-center px-1 pt-2 ml-1 flex-column">
                        <svg className="w-5 h-5 ml-2 text-gray-600 cursor-pointer fill-current hover:text-gray-900" viewBox="0 0 95 78" xmlns="http://www.w3.org/2000/svg">
                            <path d="M29.58 0c1.53.064 2.88 1.47 2.879 3v11.31c19.841.769 34.384 8.902 41.247 20.464 7.212 12.15 5.505 27.83-6.384 40.273-.987 1.088-2.82 1.274-4.005.405-1.186-.868-1.559-2.67-.814-3.936 4.986-9.075 2.985-18.092-3.13-24.214-5.775-5.78-15.377-8.782-26.914-5.53V53.99c-.01 1.167-.769 2.294-1.848 2.744-1.08.45-2.416.195-3.253-.62L.85 30.119c-1.146-1.124-1.131-3.205.032-4.312L27.389.812c.703-.579 1.49-.703 2.19-.812zm-3.13 9.935L7.297 27.994l19.153 18.84v-7.342c-.002-1.244.856-2.442 2.034-2.844 14.307-4.882 27.323-1.394 35.145 6.437 3.985 3.989 6.581 9.143 7.355 14.715 2.14-6.959 1.157-13.902-2.441-19.964-5.89-9.92-19.251-17.684-39.089-17.684-1.573 0-3.004-1.429-3.004-3V9.936z" fill-rule="nonzero" />
                        </svg>
                    </button>
                    <button className="inline-flex items-center px-1 -ml-1 flex-column">
                        <svg className="w-5 h-5 text-gray-600 cursor-pointer hover:text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"></path>
                        </svg>
                    </button>
                </div>
            </div>
        </div>

    </div>
</section> */}

      
    </div>
  );
}

export default Blog;
