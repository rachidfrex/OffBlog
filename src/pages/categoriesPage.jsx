import React from "react";
import CategoriesSkeleton from "../components/my-ui/categoriesSkeleton";
import { useState, useEffect } from "react";


function CategoriesPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);

  const getCategories = async () => {
    try {
      const response = await fetch("http://localhost:8000/api/categories", {
        method: "GET",
      });
      const data = await response.json();
      console.log("data", data);
      setCategories(data);
        setLoading(false);
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };
  useEffect(() => {
    getCategories();
  }, []);
  console.log("hadi hiya categories", categories);
  return (
    <div className="flex  flex-col justify-center items-center mx-10 md:mx-20 mt-10 mb-20  ">
      <h1 className="text-4xl font-semibold text-black leading-tight text-center">
        Categories 
      </h1>
      {loading ? (
       <CategoriesSkeleton />
        ) : (
            <div className=" flex justify-start items-center gap-4  overflow-hidden ">
        <div className="w-full  h-fit  mt-5  grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 gap-5 ">
          {categories.map((collection) => (
            <div className="relative ">
              <img
                className="object-cover  rounded-2xl  aspect-[9/11] h-fit md:w-[260px] lg:w-[280px]  xl:w-[300px] 2xl:w-[340px]"
                src={`http://localhost:8000${collection.image_url}`}
                alt="collection1"
              />
              <div className="absolute bottom-5 translate-x-5 transform  text-start bg-white p-2 px-7 rounded-full shadow-lg  hover:bg-black hover:text-white transition duration-300 ease-in-out">
                <p className=" text-sm font-semibold">{collection.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
        )
        
    }
    </div>
  );
}

export default CategoriesPage;
