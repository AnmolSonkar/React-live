import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Resume from "./components/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import "./App.css";
import AOS from "aos";
import "aos/dist/aos.css";

//Initialize aos
AOS.init({
  duration: 400,
  easing: "ease-in-quad",
});

function App() {
  return (
    <div className="flex flex-col h-screen">
      <Router>
        <Header></Header>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Resume" element={<Resume />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;

AOS.init();
