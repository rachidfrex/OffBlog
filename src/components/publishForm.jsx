import React, { useContext } from 'react'
import { Toaster ,toast } from 'react-hot-toast'
import { EdidoreContext } from "./editorPage";
function PublishForm() {
    let {blog ,blog:{title ,image_url,content,category,user_id ,des} ,setEditorState ,setBlog} = useContext(EdidoreContext);
    const handekCloseEvent = () => {
        setEditorState("editor");
        toast.error("blog post canceled");
    }
    console.log( 'the resule',blog);

    const handelBlogTilteChange = (e) => {
        let title = e.target.value;
        setBlog({...blog, title: e.target.value});
    }
  return (
    <>
    <section className='w-screen min-h-screen grid items-center lg:grid-cols-2 py-16 lg:gap-4'>
        <Toaster />
        <button className='w-12 h-12 absolute right-[5vw] z-10 top-[10%]  '
        onClick={handekCloseEvent}
        > 
            cancel
        </button >
        <div className='max-w-[550px] center' >
            <p className=' mb-1 '>preview</p>
            <div className='w-full aspect-video rounded-lg overflow-hidden bg-slate-300'>
                <img src={image_url} alt="" />
            </div>
            <h1 className='text-4xl font-medium mt-2 leading-tight line-clamp-2'>
                {title}
            </h1>
            <p className='line-clamp-2 text-xl'>
                {des}
            </p>
            
        </div>
        <div className='border-grey lg:border lg:pl-8'>
            <p className='mb-2 mt-9'>Blog Title</p>
            <input type="text" value={title} placeholder='Blog Tite' className='input-box pl-4 '  onChange={handelBlogTilteChange} />
            <p className='mb-2 mt-9'>short desctiption about your blog  </p>
            <input type="text" value={des} placeholder='Blog Tite' className='input-box pl-4 '  />
        </div>
    </section>
    </>
  )
}

export default PublishForm