import { useState ,useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import toast from "react-hot-toast";
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [image, setImage] = useState(null);

  const navigate = useNavigate();
  // check if the user is logged in
  useEffect(() => { 
    let user = localStorage.getItem("user-info");
    if (user) {
        navigate("/");
    }

})
  
  // register function
  async function handleRegister(e) {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword  ) {
      toast.error("All fields are required.");
      return;
  }
 

   
    let item = { name, email, password, confirmPassword };
    console.log(item);

    let result = await fetch("http://localhost:8000/api/register", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    // end of the register function
    // start of the redirect function

    if (result.success) {
      console.log("result", result);
      // toast.success("Registeration successful");
      navigate("/login");
    } else {
      console.log("error:", result.error);
      toast.error(result.error);
    }
    
    
  }

  return (
    <div className="flex gap-10 justify-center items-center flex-col h-screen md:mx-10 relative ">
           {
        toast && (
          <Toaster
            position="top-right"
            reverseOrder={false}
          />
        )
           }
     
      <div className="bg-white w-full md:w-auto p-10 flex gap-10 flex-col rounded-lg">
        <div className="rounded-lg text-slate-700 flex justify-start items-start flex-col gap-2 w-full md:w-[28rem]">
          <h1 className=" text-3xl font-semibold text-black leading-tight text-center">
            Create an account
          </h1>
          <p className="text-slate-500 text-sm">
            Fill in your details to create an account
          </p>
        </div>
        <form
          action=""
          className="w-full md:w-[28rem] flex justify-start items-start flex-col gap-3"
        >
          <label htmlFor="fullName" className="text-slate-500 text-sm">
            Full Name 
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Full Name"
            className="p-2 rounded-lg w-full bg-slate-50 input-box"
          />
          <label htmlFor="email" className="text-slate-500 text-sm">
            Email
          </label>

          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            className="p-2 rounded-lg w-full bg-slate-50 input-box"
          />

          <label htmlFor="password" className="text-slate-500 text-sm mt-4">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            className="p-2 rounded-lg w-full bg-slate-50 input-box"
          />
          <label
            htmlFor="confirmPassword"
            className="text-slate-500 text-sm mt-4"
          >
            Confirm Password
          </label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm Password"
            className="p-2 rounded-lg w-full bg-slate-50 input-box"
          />
          <span className="text-sm text-slate-500">
            By creating an account, you agree to our
            <a href="#" className="text-black">
              {" "}
              terms and conditions
            </a>
          </span>

          <button
            onClick={handleRegister}
            className="bg-black mt-4 text-white p-2 rounded-lg border-2 border-black cursor-pointer w-full hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-300 ease-in-out"
          >
            Register
          </button>
          <span className="text-slate-500 text-sm text-center w-full">
            Already have an account?{" "}
            <Link to="/login" className="text-black">
              login
            </Link>
          </span>
        </form>
      </div>
      
    </div>
    
  );
}

export default Register;
