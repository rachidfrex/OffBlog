import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Blogs from "./pages/blogs";
import Login from "./pages/login";
import Register from "./pages/register";
import Dashboard from "./pages/dashboard";
import Footer from "./components/footer";
import Editeprofile from "./components/editeprofile";

import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="font-BeVietnam  bg-slate-100 text-slate-700 w-full ">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testblogs" element={<Blog />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/edit-profile" element={<Editeprofile />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
