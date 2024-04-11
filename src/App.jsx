import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/home";
import Blogs from "./pages/blog";
import Footer from "./components/footer";
import {Routes, Route} from "react-router-dom";
function App() {
  return (
    <div className="font-BeVietnam  bg-slate-100 text-slate-700">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
