import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Sections from "./components/Sections";

const App = () => {
  return (
    <div>
      {/* <Navbar>
        <h1>inside navbar children</h1>
      </Navbar> */}
      <Navbar brand="TATA">
        Child1
        <h1>Child2</h1>
        Child3
      </Navbar>

      <Sections />
      <Footer />
    </div>
  );
};

export default App;
