export default function BlogSkeleton() {
    return (
      <div className="animate-pulse flex  flex-col gap-4 justify-start items-start   w-full">
        <div className=" bg-neutral-300 h-40  aspect-video  rounded-md w-full  "></div>
        <div className=" bg-neutral-300 h-[480px] max-w-[1000px]    w-full rounded-xl  aspect-video "></div>
        <div className="flex flex-col w-full gap-2">
          <div className=" bg-neutral-300  h-2 rounded-sm aspect-video w-full "></div>
          <div className=" bg-neutral-300  h-2 rounded-sm aspect-video w-full "></div>
        </div>
  
        <div className=" bg-neutral-300  h-4 w-20 rounded-sm aspect-video flex justify-start "></div>
      </div>
    );
  }
  