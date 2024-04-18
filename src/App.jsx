import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/home";
import Blog from "./pages/blog";
import Blogs from "./pages/blogs";
import Login from "./pages/login";
import Register from "./pages/register";
// this is the dashboard page routs 
import Editeprofile from "./components/editeprofile";
import Changepassword from "./components/changepassword";
import Protected from "./components/protected";
import BlogEditor from "./components/blogEditor";
import EditorPage from "./components/editorPage";
// end of the dashboard page routs
import About from "./pages/about";
import Dashboard from "./pages/dashboard";
import Footer from "./components/footer";
import {Routes, Route} from "react-router-dom";
import { useLocation } from 'react-router-dom';


function App() {
  const location = useLocation();
    const hideOnRoutes = ['/login', '/register'];

    return (
        <div className="font-BeVietnam text-slate-700 w-full ">
            { !hideOnRoutes.includes(location.pathname) && <Nav /> }
            <Routes>
                <Route path="/" element={<Home />} />
               < Route path="/blog/:id" element={<Blog />} />
                <Route path="/blogs" element={<Protected Cmp={Blogs} />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/dashboard"  element={<Protected Cmp={Dashboard} />} >
                    <Route path="/dashboard/edit-profile" element={<Editeprofile />} />
                    <Route path="/dashboard/change-password" element={<Changepassword />} />
                </Route>
                <Route path="/editor" element={<EditorPage />} />
                <Route path="/about" element={<About />} />
            </Routes>
            { !hideOnRoutes.includes(location.pathname) && <Footer /> }
        </div>
    );
}

export default App;
