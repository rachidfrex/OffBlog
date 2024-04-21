import { X } from 'lucide-react';
import { useContext } from 'react';
import { EdidoreContext } from './editorPage';
const Tags = ({tags ,tagIndex}) => {
    const {blog ,setBlog ,blog:{category}} = useContext(EdidoreContext);
    // const handeltageEdit = (e) => {
    //     if(e.keyCode === 13 || e.keyCode === 188){
    //         e.preventDefault();
    //         let currentTag = e.target.innerText;
    //         category[tagIndex] = currentTag;
    //         setBlog({...blog, category: category});
    //         console.log('the tags',category);
            
    //     }
    // }
    const handelTagDelete = () => {
        tags = category.filter((tag) => tag !== tags);
        setBlog({...blog, category: tags});
        
    }
    return (
        <div className='relative bg-white p-1 mt-2 mr-2 px-5 rounded-full inline-block pr-6  transform  duration-200 ease-in-out '>
           <p className="outline-none text-sm" contentEditable="false">{tags}</p>
            <button className='  rounded-full absolute right-1 top-1/4 -trasnlate-y-1/2 '
            onClick={handelTagDelete}
            >
                <X size={15} className='text-red-500 cursor-pointer-none ' />
            </button>
        </div>
    )
}
export default Tags