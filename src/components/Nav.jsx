import { Feather } from 'lucide-react';
import { Link } from 'react-router-dom';
function Nav() {
  return (
    <div className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm px-10 w-full ">
      <div>
        <h1>
          <Feather  />
        </h1>
      </div>
      <div>
        <h1>
          <Link to="/">offBlog</Link>
        </h1>
      </div>
      <div className="flex gap-3">
      <Link to="/blogs">Blogs</Link>
        <a href="">About</a>
        <a href="">FAQ</a> 
        </div>
    </div>
  );
}

export default Nav;
