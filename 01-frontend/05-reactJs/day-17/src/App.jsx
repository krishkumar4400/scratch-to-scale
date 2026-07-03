import {
  Routes,
  Route,
  createBrowserRouter,
  BrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Course from "./pages/Course.jsx";
import Kodr from "./pages/Kodr.jsx";
import Kodex from "./pages/Kodex.jsx";
import AllCourse from "./pages/AllCourse.jsx";
import Footer from "./components/Footer.jsx";

const App = () => {
  // createBrowserRouter
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "/course",
      element: <Course />,
      children: [
        { path: "kodex", element: <Kodex /> },
        { path: "kodr", element: <Kodr /> },
      ],
    },
  ]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/course" element={<Course />}>
          <Route path="all-course" element={<AllCourse />}></Route>
          <Route path="kodr" element={<Kodr />} />
          <Route path="kodex" element={<Kodex />} />
        </Route>
      </Routes>
      <Footer />

      {/* create browser router */}
      {/* <div>
        <RouterProvider router={router}/>
      </div> */}
    </div>
  );
};

export default App;
