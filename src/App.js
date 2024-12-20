//import Navbar from "./components/navbar";
import Home from "./components/home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Project from "./components/project";
import About from "./components/about";
import Skill from "./components/skill";
import Contact from "./components/contact";

function App() {
  return (
   <div>
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/project" element={<Project></Project>}></Route>
          <Route path="/about" element={<About></About>} ></Route>
          <Route path="/skill"  element={<Skill></Skill>} ></Route>
          <Route path="/contact" element={<Contact></Contact>} ></Route>
          

    </Routes>
    </BrowserRouter>
         
   </div>
  );
}

export default App;
