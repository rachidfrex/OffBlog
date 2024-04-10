import "./App.css";
import Nav from "./components/Nav";
import Carousel from "./components/carousel";
import Categories from "./components/categories";
import NewBlogs from "./components/newBlogs";
import Footer from "./components/footer";
import Discount from "./components/discount";
function App() {
  return (
    <div className="font-BeVietnam  bg-slate-100">
      <Nav />
      <Carousel />
      <Categories />
      <NewBlogs />
      <Discount />
      <Footer />
    </div>
  );
}

export default App;
