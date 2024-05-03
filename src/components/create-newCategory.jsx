import React from "react";
import { useState } from "react";
import toast from "react-hot-toast";
import addcatego from "../assets/images/add-category.jpg" ;


function CreatenewCategory({setShowCreateCategory}) {
  const handleCancelClick = () => {
    setShowCreateCategory(false);
  };

    const [imagecategory, setImageCategory] = useState(null)
    const [name, setName] = useState("");
    const [image_url, setImage_url] = useState({});

//   const handelCreateCategory = async () => {
//     if (!name || !image_url) {
//         console.error("Category name is required.");
//         return;
//         }
//         const formData = new FormData();
//         formData.append('name', name);
//         formData.append('image_url', image_url);
        
//         const response = await fetch("http://localhost:8000/api/category", {
//           method: "POST",
//           body: formData,
//         });

//         if (response.ok) {
//           const data = await response.json(); // <-- Error might be happening here
//           toast.success("Category created");
//           console.log("Category created:", data);
//         } else {
//           const data = await response.json();
//           console.error("Error creating category:", data.error);
//           toast.error(data.error);
// }
//       };
const handelCreateCategory = async () => {
  if (!name) {
    console.error("Category name is required.");
    return;
  }
  if (!image_url) {
    console.error("Category image is required.");
    return;
  }
  
  const formData = new FormData();
  formData.append('name', name);
  formData.append('image_url', image_url);
  
  const response = await fetch("http://localhost:8000/api/category", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
    },

    body: formData,
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
      const handelimagecategory = (e) => {
        let img = e.target.files[0]; 
        console.log(img);
        if(img){
          let objectUrl = URL.createObjectURL(img);
          setImageCategory(objectUrl);
          toast.success("image uploaded successfully"); 
          setImage_url(img);
          console.log('image', img);
        }else{
          toast.error("image not uploaded");
        }
        
      };
  console.log("imagecategory", imagecategory);
  console.log("name", name);
  console.log("image_url", image_url);

  return <div class="fixed inset-0 flex items-center justify-center z-50 md:backdrop-blur  confirm-dialog ">
  <div class="relative px-4 min-h-screen md:flex md:items-center md:justify-center">
  <div class=" opacity-25 w-full h-full absolute z-10 inset-0"></div>
      <div class="bg-white rounded-lg md:max-w-md md:mx-auto p-4 fixed inset-x-0 bottom-0 z-50 mb-4 mx-4 md:relative border-2 border-black shadow-lg">
            
          <div class="flex flex-col justify-center items-center gap-3 ">
              
              <div class="mt-4 md:mt-0 md:mx-6 flex flex-col gap-4 justify-center items-center roun  text-center md:text-left">
                
              <p class="font-bold pb-3"> Create New Category</p>
              <div className="relative w-40 h-40 bg-white border-2  rounded-md border-slate-300 hover:opacity-80">
                <label htmlFor="uploadimage">
                  <img src={ imagecategory ? imagecategory : addcatego} alt="" className="z-20 rounded-md" />
                  <input type="file" name="image" id="uploadimage" hidden onChange={handelimagecategory} />
                </label>
              </div>
              <input value={name}  onChange={(e) => setName(e.target.value)}type="text" className=" input-box   w-full px-4 py-2 b " placeholder="category name"/>
              
              </div>
              
          </div>
          
          <div class="text-center md:text-right mt-4 md:flex md:justify-end">
              <button onClick={handelCreateCategory}  type="button" class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-red-200 text-red-700 rounded-lg font-semibold text-sm md:ml-2 md:order-2">
                  create 
              </button>
              <button onClick={handleCancelClick} class="block w-full md:inline-block md:w-auto px-4 py-3 md:py-2 bg-gray-200 rounded-lg font-semibold text-sm mt-4 md:mt-0 md:order-1">
              Cancel
              </button>
          </div>
      </div>
  </div>
</div>
}

export default CreatenewCategory;
