import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skill from "./components/Skill";
import Experience from "./components/Experience";
import Project from "./components/Project";
import Contact from "./components/Contact";

const App = () => {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-[#050816]">
        <div className="bg-cover bg-no-repeat">
          <Navbar />
        </div>
        <About />
        <Skill />
        <Experience />
        <Project />
        <Contact />
      </div>
    </BrowserRouter>
  );
};

export default App;
