import P from "@editorjs/image";
import { useState ,useEffect } from "react"
function GetUserBlog() {
    const [userblogs, setUserBlogs] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    // get the user id using local storage
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
        console.log("test blogs", userblogs);

        setIsLoading(true);

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
            // allblogs.map((blogs) => ( 
            //     <p>
            //         {blogs.title}
            //     </p>
            // ) )
        
        }
        </div>
    </div>
  )
}

export default GetUserBlog