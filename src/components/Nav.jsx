import { Feather } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Search } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { Menu } from 'lucide-react';
import { X } from 'lucide-react';
import Profile from '../components/my-ui/profile'


// material ui menu 
function Nav() {
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);
  const menuRef = useRef();
  const [isUser, setIsUser] = useState(false);

  // const handleForceUpdate = () => {
  //   // Use forceUpdate to trigger re-render
  //   forceUpdate();
  // };
  
  useEffect(() => {

    let user = localStorage.getItem("user-info");
    if (user) {
      setIsUser(true);
      // handleForceUpdate();
    }
  }, []);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 

  return (
    <div className="navbar">
      <div className='flex items-center justify-center md:gap-4 lg:gap-8'>
        <h1 className='flex gap-2'>
          <Link to="/" className='flex gap-2' >
            <Feather />
            offBlog
          </Link>
        </h1>

        <div className={'absolute md:border-0 border-b w-full left-0 top-full mt-0.5 md:show bg-white  border-grey py-3 px-[5vw] md:block md:relative md:inset-0 md:p-0 md:w-auto ' + (search ? 'show' : 'hide')}>
          <input
            type='text'
            placeholder='Search'
            className='w-full md:w-auto text-sm bg-slate-100 bg-grey p-3  pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-slate-800 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 '
          />
          <span
            className='absolute right-[8%]  md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2'
          >
            <Search size={20} />
          </span>
        </div>
      </div>

      <div ref={menuRef} className={"flex w-full  absolute right-0 top-0  md:relative   justify-start  md:justify-end items-center md:show   " + (menu ? 'show ' : 'hide')}>
        <div
          className='border-r shadow-md md:shadow-none  md:border-0  absolute  md:relative w-[60%] min-w-[300px]    flex flex-col justify-start py-5 md:py-0  md:justify-end h-screen md:h-auto items-start   md:flex-row bg-white  p-2 mt-0.5 px-5 md:p-0 top-0 md:top-full   lg:gap-6 md:gap-3 '
        >
          <div className='flex justify-between w-full md:hidden'>
            <h1 className='flex gap-2 px-3 mb-2 '>
              <Link to="/" className='flex gap-2' >
                <Feather />
                offBlog
              </Link>
              
            </h1>
            <button>
                <X size={30} className='hover:text-red-500' onClick={() => setMenu(false)} />
              </button>
          </div>
          <Link to="/blogs " className=' md:text-base navlinks'>Blogs</Link>
          <Link to="/about " className=' md:text-base navlinks'>About</Link>
          <Link to="/faq " className=' md:text-base navlinks'>FAQ</Link>
          
          {
            isUser ? (
              <Link to="/profile" className=' md:text-base  md:hidden navlinks '>Profile</Link>
            ) : (
              <>
                <Link to="/login" className=' md:text-base navlinks'>Login</Link>
                <Link to="/register" className=' md:text-base navlinks'>Register</Link>
              </>
            )
          }
        </div>
      </div>

      <div className='flex items-center md:gap-3 lg:gap-4 ml-auto     '>
        <button className='md:hidden bg-gray-100 w-10 h-10 rounded-full flex items-center justify-center'
          onClick={() => { setSearch(!search); setMenu(false) }}
        >
          <Search size={20} />
        </button>
        {
          isUser ? (
            <>
            
            <div className='hidden md:flex rounded-full w-14 items-center text-sm text-slate-700'>
            <Profile/>
            </div>
           </>
          ) : (
            <>
              <Link to="/login" className='text-sm md:text-base btn-dark py-2 hidden lg:block  ' >Login</Link>
              <Link to="/register" className='text-sm md:text-base btn-light py-2 hidden lg:block  '>Register</Link>
            </>
          )
        }
      </div>

      <div
        className=' md:hidden  items-center flex    '
      >
        <button
          onClick={() => { setMenu(!menu), setSearch(false) }}
        >
          <Menu size={30} />
        </button>
      </div>
    </div>
  );
}

export default Nav;
