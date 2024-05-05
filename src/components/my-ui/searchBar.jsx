import React from 'react'
import { useState } from 'react'
import { Search } from 'lucide-react'
import { useContext } from 'react'
import { UserContext } from '../useContext'
import { Link } from 'react-router-dom'
function SearchBar({search}) {
const [searchInput, setSearchInput] = useState('');
const { getBlogs } = useContext(UserContext);
const filteredBlogs = getBlogs.filter(blog => blog.title.toLowerCase().includes(searchInput));
console.log("filteredBlogs", filteredBlogs);

  return (
    <div
          className={
            "absolute md:border-0 border-b w-full left-0 top-full mt-0.5 md:show bg-white  border-grey py-3 px-[5vw] md:block md:relative md:inset-0 md:p-0 md:w-auto " +
            (search ? "show" : "hide")
          }
        >
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full md:w-auto text-sm bg-slate-100 bg-grey p-3  pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-slate-800 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 "
          />
          <span className="absolute right-[8%]  md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2">
            <Search size={20} />
          </span>


            <div className=' absolute  top-full bg-slate-400 p-4'
            style={{ display: searchInput.length > 0 ? 'block' : 'none' }}
            >
            {  // if the input is empty and the filteredBlogs array is empty, display a message
              filteredBlogs.length === 0
            ? <p className='text-white'>No results found</p>
            : filteredBlogs.map(blog => (
              <div key={blog.id} className='flex justify-between items-center bg-slate-100 p-2 rounded-md mb-2'>
                <p>{blog.title}</p>
                <Link to='./Blog' className='bg-slate-400 text-white p-1 rounded-md'>View</Link>
              </div>
            ))
            }
          </div>

        </div>
  )
}

export default SearchBar