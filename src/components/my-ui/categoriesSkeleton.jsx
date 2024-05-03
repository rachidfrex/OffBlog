import React from "react";

export default function CategoriesSkeleton() {
  return (
    <div>
      <div className="w-full  h-fit  mt-5  grid grid-cols-5 gap-5 ">
        <div className=" bg-gray-200   animate-pulse  rounded-2xl  aspect-[9/11] h-fit w-[250px]  "></div>
        <div className=" bg-gray-200  animate-pulse  rounded-2xl  aspect-[9/11] h-fit  w-[250px]     "></div>
        <div className=" bg-gray-200  animate-pulse  rounded-2xl  aspect-[9/11] h-fit  w-[250px]     "></div>
        <div className=" bg-gray-200  animate-pulse  rounded-2xl  aspect-[9/11] h-fit  w-[250px]     "></div>
        <div className=" bg-gray-200  animate-pulse  rounded-2xl  aspect-[9/11] h-fit  w-[250px]     "></div>
        <div className=" bg-gray-200  animate-pulse  rounded-2xl  aspect-[9/11] h-fit  w-[250px]    "></div>
        <div className=" bg-gray-200  animate-pulse  rounded-2xl  aspect-[9/11] h-fit  w-[250px]    "></div>
        <div className=" bg-gray-200  animate-pulse  rounded-2xl  aspect-[9/11] h-fit  w-[250px]     "></div>
      </div>
    </div>
  );
}
