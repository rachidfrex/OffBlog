import { useState } from "react";
function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const handleLogin = async (e) => {
        e.preventDefault();
         }
  return (
    <div className="flex gap-10 justify-center items-center flex-col h-screen mx-10 ">
      <div className="bg-white p-10 flex gap-10 flex-col rounded-lg">
      <div
      className="  rounded-lg text-slate-700 flex justify-start items-start flex-col gap-2 w-full md:w-[28rem]  "
      >
        <h1
        className="text-4xl font-semibold text-black leading-tight text-center"
        >welcome back</h1>
        <p
        className="text-slate-500 text-sm "
        >login to your account</p>
      </div>
      <form 
      onSubmit={handleLogin}
      action="" className="w-full md:w-[28rem]  flex justify-start items-start flex-col gap-3  ">
       <label htmlFor="email"
       className="text-slate-500 text-sm"
       >
        email
       </label>
       <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="email"
        className="p-2 rounded-lg w-full bg-slate-50"
        />
        <label htmlFor="password"  className="text-slate-500 text-sm mt-4">
        password
       </label>
        <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="password"
        className="p-2 rounded-lg w-full bg-slate-50 "
        />
        <span className=" text-slate-500 text-sm">
            forget password? <a href="#" className="text-black">click here</a>
        </span>
        <button
        type="submit"

        className="bg-black mt-4 text-white p-2 rounded-lg border-2 border-black cursor-pointer w-full hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-300 ease-in-out"
        >
        login
        </button>
        
        <span className="text-slate-500 text-sm text-center w-full">don't have an account? <a href="#" className="text-black">sign up</a></span>
        

       
      </form>
      </div>
    </div>
  );
}

export default Login;
