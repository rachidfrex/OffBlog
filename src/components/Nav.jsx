import { Feather } from 'lucide-react';
function Nav() {
  return (
    <div className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm px-10 w-full ">
      <div>
        <h1>
          <Feather  />
        </h1>
      </div>
      <div>
        <h1>Off Blog</h1>
      </div>
      <div className="flex gap-3">
      <a href="">Blogs</a>
        <a href="">About</a>
        <a href="">FAQ</a> 
        </div>
    </div>
  );
}

export default Nav;
