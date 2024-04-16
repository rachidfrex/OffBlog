import GetBlogs from "../components/getBlogs";

function Blogs() {
    const blogs = [
        {
          id: 1,
          image: "/comodo.jpg",
          name: "Komodo Dragon",
          content:
            "The Komodo dragon is a large species of lizard found in the Indonesian islands of Komodo, Rinca, Flores, and Gili Motang. A member of the monitor lizard family, it is the largest living species of lizard, growing to a maximum length of 3 metres in rare cases and weighing up to approximately 70 kilograms. Their unusually large size has been attributed to island gigantism, since there are no other carnivorous animals to fill the niche on the islands where they live. However, recent research suggests the large size of Komodo dragons may be better understood as representative of a relict population of very large varanid lizards that once lived across Indonesia and Australia, most of which, along with other megafauna, died out after the Pleistocene. Fossils very similar to V. komodoensis have been found in Australia dating to greater than 3.8 million years ago, and its body size remained stable on Flores, one of the handful of Indonesian islands where it is currently found, over the last 900,000 years, ",
          likes: 12,
          saves: 20,
        }
      ];
  return (
    <div className="mt-10 mx-20 bg-white   flex flex-col gap-5 justify-center items-center   ">
      <div className="  w-full relative  rounded-xl   shadow-sm  ">
       <div className=" py-32 ">
       <div className=" text-center flex flex-col gap-2 justify-center items-center">
          <h1 className="text-4xl  font-semibold text-black leading-tight text-center">
            Write your idea and spread it with the world
          </h1>
          <p className="text-slate-500 w-[550px] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod
            and the world is potato
          </p>
            {/* this is the Search  */}
          <div className="flex gap-2 justify-center  items-center relative w-[700px]">
          <input
            type="text"
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
        <h1 className="  px-10 text-4xl flex py-5 flex-col justify-start items-start w-full text-black leading-tight text-center ">
            recently added blogs
          </h1>
          <div>
            <select className="px-10 py-2 rounded-md border-2 border-black text-slate-600">
              <option value="default">store  by</option>
              <option value="name">Name</option>
              <option value="date">Date</option>
              <option value="category">Category</option>
            </select>
          </div>
       </div>
       <GetBlogs />
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
