import React, { useContext } from 'react'
import { Toaster ,toast } from 'react-hot-toast'
import { EdidoreContext } from "./editorPage";
function PublishForm() {
    let {blog ,setEditorState} = useContext(EdidoreContext);
    const handekCloseEvent = () => {
        setEditorState("editor");
        toast.error("blog post canceled");
    }
    console.log( 'the resule',blog);
  return (
    <>
    <section>
        <Toaster />
        <button className='w-12 h-12 absolute right-[5vw] z-10 top-[10%]  '
        onClick={handekCloseEvent}
        > 
            cancel
        </button>
    </section>
    </>
  )
}

export default PublishForm