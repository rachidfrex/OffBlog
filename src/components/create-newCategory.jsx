import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";


function CreatenewCategory() {
    const [name, setName] = useState("");
  const handelCreateCategory = async () => {
    if (!name) {
        console.error("Category name is required.");
        toast.error("Category name is required.");
        return;
        }
    const categoryName = name;
    const response = await fetch("http://localhost:8000/api/category", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: categoryName }),
    });

    if (response.ok) {
      const data = await response.json();
      toast.success("Category created");
      console.log("Category created:", data);
    } else {
        const data = await response.json();
      console.error("Error creating category:", data.error);
      toast.error(data.error);
    }
  };
  return <div class="fixed inset-0 flex items-center justify-center z-50 backdrop-blur confirm-dialog ">
  <div class="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
      <div class=" opacity-25 w-full h-full absolute z-10 inset-0"></div>
      <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative shadow-lg">
          <div class="md:flex items-center">
              
              <div class="mt-4 md:mt-0 md:ml-6 text-center md:text-left">
              <p class="font-bold"> Create New Category</p>
              <input value={name}  onChange={(e) => setName(e.target.value)}type="input-box p-4 bg-slate-200   "  placeholder="category name"/>
              </div>
          </div>
          <div class="text-center md:text-right mt-4 md:flex md:justify-end">
              <button onClick={handelCreateCategory}  type="button" class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2">
                  create 
              </button>
              <button class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1">
              Cancel
              </button>
          </div>
      </div>
  </div>
</div>
}

export default CreatenewCategory;
