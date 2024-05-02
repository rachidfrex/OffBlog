export default function BlogSkeleton() {
    return (
      <div className="animate-pulse flex px-5 flex-col gap-4 justify-start items-center py-5  w-full">
        <div className=" bg-neutral-300 h-7 aspect-video  rounded-full w-20 md:w-w0   "></div>
        <div className=" bg-neutral-300 h-7 aspect-video  rounded-md  w-full md:w-[400px] mb-5 "></div>
        <div className=" bg-neutral-300 h-3 aspect-video  rounded-md w-40 md:w-[200px] my-2"></div>
        <div className=" bg-neutral-300 w-full md:h-[480px] max-w-[1000px]   rounded-xl  aspect-video "></div>
        {/* table of content */}
        <div className="flex flex-col lg:grid lg:grid-cols-12  justify-start w-full   px-5  py-10">
        <div className=" col-span-3  lg:col-span-4 bg-neutral-300 h-40  aspect-video  rounded-md max-w-md my-3"></div>
        <div className=" col-span-9 lg:col-span-8 ">
          <div className="bg-neutral-300 h-3  aspect-video  rounded-md w-full  my-3"></div>
          <div className="bg-neutral-300 h-3  aspect-video  rounded-md w-full  my-3"></div>
          <div className="bg-neutral-300 h-3  aspect-video  rounded-md w-full  my-3"></div>
          <div className="bg-neutral-300 h-3  aspect-video  rounded-md w-full  my-3"></div>
          <div className="bg-neutral-300 h-3  aspect-video  rounded-md w-full  my-3"></div>
          <div className="bg-neutral-300 h-3  aspect-video  rounded-md w-full  my-3"></div>
          <div className="bg-neutral-300 h-3  aspect-video  rounded-md w-full  my-3"></div>



        </div>
        </div>


      </div>
    );
  }
  