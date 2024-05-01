import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import toast from "react-hot-toast";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();



  // check if the user is logged in
  useEffect(() => {
    let user = localStorage.getItem("user-info");
    if (user) {
      navigate("/");
    }
  });

  // login function
  const handleLogin = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error("All fields are required.");
      return;
    }
    let item = { email, password };
    console.log(item);
    let result = await fetch("http://localhost:8000/api/login", {
      method: "POST",
      body: JSON.stringify(item),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    result = await result.json();
    console.log("result", result);
    if (result.success) {
      localStorage.setItem("user-info", JSON.stringify(result));
      toast.success("Login successful");
      navigate("/");
    } else {
      console.log("error:", result.error);
      toast.error(result.error);
    }
  };
  // end of the login function
  return (
    <div className="flex gap-10 justify-center items-center flex-col h-screen mx-10 ">
      <Toaster position="top-right" reverseOrder={false} />
      <div className="bg-white w-full md:w-auto p-10 flex gap-10 flex-col rounded-lg">
        <div className="  rounded-lg text-slate-700 flex justify-start items-start flex-col gap-2 w-full md:w-[28rem]  ">
          <h1 className="text-4xl font-semibold text-black leading-tight text-center">
            welcome back
          </h1>
          <p className="text-slate-500 text-sm ">login to your account</p>
        </div>
        <form
          onSubmit={handleLogin}
          action=""
          className="w-full md:w-[28rem]  flex justify-start items-start flex-col gap-3  "
        >
          <label htmlFor="email" className="text-slate-500 text-sm">
            email
          </label>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="email"
            className="p-2 rounded-lg w-full bg-slate-50 input-box"
          />
          <div className="relative w-full">
            <label htmlFor="password" className="text-slate-500 text-sm mt-4">
              password
            </label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="password"
              className="p-2 rounded-lg w-full bg-slate-50 input-box  "
            />
            <span className="input-icon right-4  left-[auto] top-[70%] cursor-pointer bg-white  ">
              <Eye size={15} />
            </span>
          </div>
          <span className=" text-slate-500 text-sm">
            forget password?{" "}
            <a href="#" className="text-black">
              click here
            </a>
          </span>

          <button
            type="submit"
            className="bg-black mt-4 text-white p-2 rounded-lg border-2 border-black cursor-pointer w-full hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-300 ease-in-out"
          >
            login
          </button>

          <span className="text-slate-500 text-sm text-center w-full">
            don't have an account?
            <Link to="/register" className="text-black">
              {" "}
              register now
            </Link>
          </span>
        </form>
      </div>
    </div>
  );
}

export default Login;
