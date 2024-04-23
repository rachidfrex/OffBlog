import React, { useContext } from 'react'
import { Toaster ,toast } from 'react-hot-toast'
import { EdidoreContext } from "./editorPage";
import Tags from './tags';
function PublishForm() {
    const characterLimit = 200;
    let tageLimit = 7;
    let {blog ,blog:{title ,image_url,content,category,user_id ,des} ,setEditorState ,setBlog} = useContext(EdidoreContext);
    const handekCloseEvent = () => {
        setEditorState("editor");
        toast.error("blog post canceled");
    }
    const submitdata = async () => {
        const userInfo = JSON.parse(localStorage.getItem('user-info'));
        const user_id = userInfo ? userInfo.user_id : null;
        if (!title || !des || !user_id || category.length === 0 || !image_url) {
            toast.error("All fields are required.");
            return;
            }
        if (!user_id) {
            toast.error("User is not logged in.");
            return;
            }
        let formData = new FormData();
        formData.append("title", title);
        formData.append("content", JSON.stringify(content.blocks));
        formData.append("user_id", user_id);
        formData.append("categories", JSON.stringify(category));
        formData.append("image_url", blog.image);
        let result = await fetch("http://localhost:8000/api/createBlog", {
            method: "POST",
            body: formData,
            });
        if (!result.ok) {
            toast.error(`Error: ${result.status}`);
            return;
            }
        result = await result.json();
        if (result.success) {
            console.log("result", result);
            toast.success(result.success);
            setEditorState("editor");
            setBlog({title: "", image_url: "", category: [], content: [], user_id: '', des : ""});
            return;
            }
        toast.error(result.error);
        }


    console.log( 'the resule',blog);

    const handelBlogTilteChange = (e) => {
        let title = e.target.value;
        setBlog({...blog, title: title});
    }
    const handelBlogDesChange = (e) => {
        let des = e.target.value;
        setBlog({...blog, des: des});
    }
    const handelTitleKeyDonw = (e) => {
        if(e.keyCode === 13){
          e.preventDefault();
        }
         }
    const handelKeyDown = (e) => {
        if(e.keyCode === 13 || e.keyCode === 188){
            e.preventDefault();
            let tags = e.target.value;
            if(category.length < tageLimit ){
               if(!category.includes(tags) && tags.length ){
                     setBlog({...blog, category: [...category, tags]});
                     e.target.value = "";    
               }if(category.includes(tags)){
                   toast.error("tag already exist");
               }if(!tags.length){
                   toast.error("tag cannot be empty");
               }
             
            }else{
                toast.error(`you can only add ${tageLimit} tags`);
            }
         }
      
    }
  return (
    <>
    <section className='w-screen min-h-screen grid items-center lg:grid-cols-2 py-16 lg:gap-4'>
        <Toaster />
        <button className='w-12 h-12 absolute right-[5vw]  top-[10%]  '
        onClick={handekCloseEvent}
        > 
            cancel
        </button >
        <div className='max-w-[550px] center' >
            <p className=' mb-1 '>preview</p>
            <div className='w-full aspect-video rounded-lg overflow-hidden bg-slate-300'>
                <img src={image_url} alt="" className='spect-video' />
            </div>
            <h1 className='text-4xl font-medium mt-2 leading-tight line-clamp-2'>
                {title}
            </h1>
            <p className='line-clamp-2 text-lg'>
                {des}
            </p>
            
        </div>
        <div className='border-grey lg:border lg:pl-8'>
            <p className='mb-2 mt-9'>Blog Title</p>
            <input type="text" value={title} placeholder='Blog Tite' className='input-box pl-4 bg-slate-200  '  onChange={handelBlogTilteChange} />
            <p className='mb-2 mt-9'>short desctiption about your blog  </p>
            <textarea 
            onKeyDown={handelTitleKeyDonw}
            maxLength={characterLimit}
            defaultValue={des}
            placeholder='short desctiption about your blog'
            onChange={handelBlogDesChange}
            className='h-40 resize-none leading-7 input-box pl-4 bg-slate-200 '
            name="" id="" cols="30" rows="10"></textarea>
            <p className='mt-1 text-sm text-right'>{characterLimit - des.length } characters left</p>
            <p className='mb-2 mt-9'> category  </p>
            <div className='relative input-box bg-slate-200 pl-2 py-2 pb-4 '>
                <input type="text" placeholder='category' 
                onKeyDown={handelKeyDown}
                className='sticky input-box bg-white top-0 left-0 pl-4 mb-3 focus:bg-white'/>
                {category.map((tag, index) => { 
                    return <Tags key={index} tageIndex={index} tags={tag} />
                })}
            </div>
            <p className='mt-1 mb-4 text-right'>{tageLimit - category.length} tags left</p>
            <button 
            onClick={submitdata}
            className='px-8 text-sm btn-dark'>
            publish
        </button>
        </div>
       
    </section>
    </>
  )
}


export default PublishForm
