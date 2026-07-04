// context API

import { useState } from "react";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

const App = () => {
  const courseData = {
    name: "Cohort2",
    instructor: "Sarthak",
    mentor: "Satvik",
    duration: "6 Months",
  };

  // sending data from child to parent (bottom to top)
  const [theme, setTheme] = useState("light");
  const changeTheme = (newTheme) => {
    setTheme(newTheme);
  };

  return (
    <div>
      <h1>Theme is {theme} </h1>
      <Navbar changeTheme={changeTheme} />
      <Home courseData={courseData} />
      <Footer />
    </div>
  );
};

export default App;
