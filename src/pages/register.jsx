import { useState } from "react";
import { Link } from "react-router-dom";

function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullName, setFullName] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const handleRegister = async (e) => {
        e.preventDefault();
        // Add your registration logic here
    };

    return (
        <div className="flex gap-10 justify-center items-center flex-col h-screen mx-10">
            <div className="bg-white w-full md:w-auto p-10 flex gap-10 flex-col rounded-lg">
                <div className="rounded-lg text-slate-700 flex justify-start items-start flex-col gap-2 w-full md:w-[28rem]">
                    <h1 className="text-4xl font-semibold text-black leading-tight text-center">
                        create an account
                    </h1>
                    <p className="text-slate-500 text-sm">
                        Fill in your details to create an account
                    </p>
                </div>
                <form onSubmit={handleRegister} action="" className="w-full md:w-[28rem] flex justify-start items-start flex-col gap-3">
                    <label htmlFor="fullName" className="text-slate-500 text-sm">
                        Full Name
                    </label>
                    <input
                        type="text"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        placeholder="Full Name"
                        className="p-2 rounded-lg w-full bg-slate-50"
                    />
                    <label htmlFor="email" className="text-slate-500 text-sm">
                        Email
                    </label>
                    <input
                        type="text"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                        className="p-2 rounded-lg w-full bg-slate-50"
                    />
                    <label htmlFor="password" className="text-slate-500 text-sm mt-4">
                        Password
                    </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                        className="p-2 rounded-lg w-full bg-slate-50"
                    />
                    <label htmlFor="confirmPassword" className="text-slate-500 text-sm mt-4">
                        Confirm Password
                    </label>
                    <input
                        type="password"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        placeholder="Confirm Password"
                        className="p-2 rounded-lg w-full bg-slate-50"
                    />
                    <span className="text-slate-500 text-sm">
                        By creating an account, you agree to our <a href="#" className="text-black">terms and conditions</a>  
                    </span>
                    <button
                        type="submit"
                        className="bg-black mt-4 text-white p-2 rounded-lg border-2 border-black cursor-pointer w-full hover:bg-white hover:text-black hover:border-2 hover:border-black transition duration-300 ease-in-out"
                    >
                        Register
                    </button>
                    <span className="text-slate-500 text-sm text-center w-full">
                        Already have an account? <Link to="/login" className="text-black">login</Link>
                    </span>
                </form>
            </div>
        </div>
    );
}

export default Register;
