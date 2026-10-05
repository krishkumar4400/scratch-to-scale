import { Routes, Route, NavLink } from "react-router";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Detail from "./pages/Detail.jsx";
import Nested from "./pages/Nested.jsx";

const App = () => {
  return (
    <div>
      <nav>
        <div>
          <NavLink to={"/home"}>Home</NavLink>
          <NavLink to={"/about"}>About</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/home" element={<Home />}>
          <Route path="detail" element={<Detail />} />
        </Route>
        <Route path="/about" element={<About />}>
          <Route path="nested" element={<Nested />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
