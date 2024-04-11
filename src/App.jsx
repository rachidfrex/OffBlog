import "./App.css";
import Nav from "./components/Nav";
import Home from "./pages/home";
import Footer from "./components/footer";
function App() {
  return (
    <div className="font-BeVietnam  bg-slate-100">
      <Nav />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
