export default function BlogSkeleton() {
    return (
      <div className="animate-pulse flex  flex-col gap-4 justify-start items-center py-5  w-full">
        <div className=" bg-neutral-300 h-7 aspect-video  rounded-md w-[500px]   "></div>
        <div className=" bg-neutral-300 h-7 aspect-video  rounded-md w-[400px] mb-5 "></div>
        <div className=" bg-neutral-300 h-3 aspect-video  rounded-md w-[200px] my-3"></div>
        <div className=" bg-neutral-300 h-[480px] max-w-[1000px]    w-full rounded-xl  aspect-video "></div>


{/* 
        <div className="flex flex-col w-full gap-2">
          <div className=" bg-neutral-300  h-2 rounded-sm aspect-video w-full "></div>
          <div className=" bg-neutral-300  h-2 rounded-sm aspect-video w-full "></div>
        </div>
  
        <div className=" bg-neutral-300  h-4 w-20 rounded-sm aspect-video flex justify-start "></div> */}
      </div>
    );
  }
  