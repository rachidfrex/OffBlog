import P from "@editorjs/image";
import { useState ,useEffect } from "react"
function GetUserBlog() {
    const [userblogs, setUserBlogs] = useState([]);
    const userInfo = JSON.parse(localStorage.getItem('user-info'));
    const user_id = userInfo ? userInfo.user_id : null;
    const handelGetuserBlogs = async () => {
        let blogs = await fetch(`http://localhost:8000/api/user/${user_id}/blogs`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        blogs = await blogs.json();
        console.log("the blogs", blogs); 
         setUserBlogs(blogs);
        


      };

    
      useEffect(() => {
        handelGetuserBlogs();

      }, []);

  return (
    <div>
         <h1 className=" font-semibold  leading-tight text-start mt-2  ">
            My Blogs
        </h1>
        <div>
        {
          userblogs.map((blog) => (
            <div key={blog.id} className="border items-center border-gray-200 p-2 mt-2 rounded-md grid grid-cols-5 w-full">
              <div className=" col-span-1">
                <img 
                className="object-center w-40 h-40"
                src={`http://localhost:8000${blog.image_url}`}
                alt="" />
              </div>
              <div className="w-full col-span-4 ">
                <h1 className="font-semibold">{blog.title}</h1>
                <p className="line-clamp-3 text-sm text-gray-500">
                  { 
                    JSON.parse(blog.content).map((item, index) => (
                      // i want to displat the first 3 paragraph of the blog
                      item.type === 'paragraph' && <p
                       className=''
                      key={index}>{item.data.text}</p>

                    ))
                  }
                </p>
              </div>
            </div>
          ))
        
        }
        </div>
    </div>
  )
}

export default GetUserBlog