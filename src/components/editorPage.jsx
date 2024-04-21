import React, { useEffect } from 'react'
import BlogEditor from './blogEditor';
import PublishForm from './publishForm';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { createContext } from 'react';

const blogStructure = {
    title: "",
    image_url: "",
    category: [],
    content: [],
    user_id: '',
    des : "",
  };
 export const  EdidoreContext = createContext({})
function EditorPage() {
    const [blog, setBlog] = useState(blogStructure);
    const [editorState ,setEditorState] = useState("editor");
    const [textEditor, setTextEditor] = useState({isReady: false});
    const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem("user-info"));

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [navigate]);

    
    


    return (
        <EdidoreContext.Provider value={{blog, setBlog, editorState, setEditorState ,textEditor , setTextEditor}}>
        {
            user ?
            editorState === "editor" ? <BlogEditor /> : <PublishForm />
            : null
        }
        </EdidoreContext.Provider>
    )
}

export default EditorPage