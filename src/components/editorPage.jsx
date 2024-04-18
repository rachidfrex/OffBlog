import React, { useEffect } from 'react'
import BlogEditor from './blogEditor';
import { useState } from 'react';
import { json, useNavigate } from 'react-router-dom';
const blogStructure = {
    title: "",
    image: "",
    category: [],
    content: [],
    user_id: json.parse(localStorage.getItem("user-info")).user_id,
    des : "",
  };
function EditorPage() {
    const [editorState ,setEditorState] = useState("editor");
    const navigate = useNavigate();
    let user = JSON.parse(localStorage.getItem("user-info"));

    useEffect(() => {
        if (!user) {
            navigate("/login");
        }
    }, [navigate]);



    return (
        user ?
        editorState === "editor" ? <BlogEditor /> : <h1>Preview</h1>
        : null
    )
}

export default EditorPage