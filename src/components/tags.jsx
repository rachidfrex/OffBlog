import { X } from 'lucide-react';
const Tags = ({tags}) => {
    return (
        <div className='relative bg-white p-2 mt-2 mr-2 px-5 rounded-full inline-block pr-8 '>
           <p className="outline-none" contentEditable="true">{tags}</p>
            <button className='  rounded-full absolute right-3 top-1/3 -trasnlate-y-1/2 ' >
                <X size={15} className='text-red-500 cursor-pointer-none ' />
            </button>
        </div>
    )
}
export default Tags