import React, {useState} from 'react'
import { Lock } from 'lucide-react';
import { LockKeyhole } from 'lucide-react';
import axios from 'axios';
import { toast , Toaster } from 'react-hot-toast';

function Changepassword() {
  const [user, setUser] = useState({
    oldPassword: '',
    newPassword: '',
    repeatPassword: ''
  });
  async function updatePassword(e) {
    e.preventDefault();
    // check if the input fields are not empty
    if (!user.oldPassword || !user.newPassword || !user.repeatPassword) {
      toast.error("Please fill in all fields");
      return;
    }
    if (user.newPassword !== user.repeatPassword) {
      toast.error("Passwords do not match ",
      {
        icon: '⚠️',
      });
      return;
    }
  
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    const user_id = userInfo ? userInfo.user_id : null;
  
    // Assuming you have the old password, new password, and repeat password stored in the state
    const { oldPassword, newPassword, repeatPassword } = user;
  
    try {
      const response = await axios.put(`http://localhost:8000/api/user/${user_id}/password`, {
        oldPassword,
        newPassword,
        repeatPassword
      });
  
      if (response.data.success) {
        toast.success("Password updated successfully" );
        
      } else {
        toast.error(response.data.error);
      }
     
    } catch (error) {
      console.error('Error:', error.response.status, error.response.statusText);
      toast.error(error.response.data.error);
    }
  }
  return (
    <div 
    className=''
    >
        <Toaster />

         <h1 className=" font-semibold  leading-tight text-start mt-2  ">
          Change Password
        </h1>
        <div>
            <form action="" className="w-full md:w-[28rem] flex justify-start items-start flex-col gap-3">
            <div className=" mt-5 className={'absolute md:border-0 border-b w-full left-0 top-full mt-0.5 md:show bg-white  border-grey py-3 px-[5vw] md:block md:relative md:inset-0 md:p-0 md:w-auto ' + (search ? 'show' : 'hide')}">
                <input
                  type="text"
                  value={user.oldPassword}
                  onChange={(e) => setUser({ ...user, oldPassword: e.target.value })}
                  placeholder="old password"
                  className="w-full md:w-[515px] text-sm pr-[12%]  bg-slate-100 bg-grey p-3  pl-6 md:pr-6 rounded-lg placeholder:text-slate-500 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 "
                />
                <span className="absolute right-[8%]  md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2">
                  <Lock size={15} />
                </span>
            </div>
            <div className=" mt-5 className={'absolute md:border-0 border-b w-full left-0 top-full mt-0.5 md:show bg-white  border-grey py-3 px-[5vw] md:block md:relative md:inset-0 md:p-0 md:w-auto ' + (search ? 'show' : 'hide')}">
                <input
                  type="text"
                  value={user.newPassword}
                  onChange={(e) => setUser({ ...user, newPassword: e.target.value })}
                  placeholder="new password"
                  className="w-full md:w-[515px] text-sm pr-[12%]  bg-slate-100 bg-grey p-3  pl-6 md:pr-6 rounded-lg placeholder:text-slate-500 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 "
                />
                <span className="absolute right-[8%]  md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2">
                  <Lock size={15} />
                </span>
            </div>
            <div className=" mt-5 className={'absolute md:border-0 border-b w-full left-0 top-full mt-0.5 md:show bg-white  border-grey py-3 px-[5vw] md:block md:relative md:inset-0 md:p-0 md:w-auto ' + (search ? 'show' : 'hide')}">
                <input
                  type="text"
                  value={user.repeatPassword}
                  onChange={(e) => setUser({ ...user, repeatPassword: e.target.value })}
                  placeholder="confirm password"
                  className="w-full md:w-[515px] text-sm pr-[12%]  bg-slate-100 bg-grey p-3  pl-6 md:pr-6 rounded-lg placeholder:text-slate-500 focus:outline-none  focus:ring-2 focus:placeholder:text-black focus:ring-black focus:ring-opacity-50 md:pl-12 "
                />
                <span className="absolute right-[8%]  md:pointer-events-none md:left-5 top-1/2 -translate-y-1/2">
                  <LockKeyhole size={15} />
                </span>
            </div>
            <button className="btn-dark py-2 text-sm mt-5"
            onClick={updatePassword}
            >Change Password</button>

            </form>
        </div>
    </div>
  )
}

export default Changepassword