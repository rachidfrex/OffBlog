import React from 'react'
import { useState , useEffect } from 'react'
import { Search } from 'lucide-react'
import { useContext } from 'react'
import { UserContext } from '../useContext'
import { Link } from 'react-router-dom'
function SearchBar({search}) {
const [searchInput, setSearchInput] = useState('');
const [searchResults, setSearchResults] = useState([]);
const [buttonClicked, setButtonClicked] = useState(false);
const { getBlogs } = useContext(UserContext);

console.log("filteredBlogs", searchResults);
console.log("searchInput", searchInput);
console.log("buttonClicked", buttonClicked);
function filterBlogs() {
  const filteredBlogs = getBlogs.filter(blog => blog.title.toLowerCase().includes(searchInput.toLowerCase()));
   setSearchResults(filteredBlogs);
  return filteredBlogs;
}

useEffect(() => {
  filterBlogs();
}
, [searchInput]);
const handleClick = () => {
  setSearchInput('');
}
     



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
            value={searchInput}
            onChange={(e) => setSearchInput(e.target.value)}
            className="w-full md:w-auto text-sm bg-slate-100 bg-grey p-3  pl-6 pr-[12%] md:pr-6 rounded-full placeholder:text-slate-800 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 "
          />
          <span className="absolute right-[8%]  md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2">
            <Search size={20} />
          </span>


            <div className=' absolute  top-full bg-slate-400 p-4'
            // or botton clicked is true and the input is empty, display the filteredBlogs array
            style={{ display: (searchInput === '' ) ? 'none' : 'block' }}
            >
            {  // if the input is empty and the filteredBlogs array is empty, display a message
              searchResults.length === 0
            ? <p className='text-white'>No results found</p>
            : searchResults.map(blog => (
              <div key={blog.id} className='flex justify-between items-center bg-slate-100 p-2 rounded-md mb-2'>
                <p>{blog.title}</p>
                <Link
                  onClick={handleClick}
                  to={`/Blog/${blog.id}`}  className='bg-slate-400 text-white p-1 rounded-md'>View</Link>
              </div>
            ))
            }
          </div>

        </div>
  )
}

export default SearchBar