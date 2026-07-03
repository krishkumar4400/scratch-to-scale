import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import Products from "./pages/Products.jsx";
import Navbar from "./components/Navbar.jsx";
import Men from "./pages/Men.jsx";
import Women from "./pages/Women.jsx";
import Videos from "./pages/Videos.jsx";
import VideoPlayer from "./pages/VideoPlayer.jsx";
import Courses from "./pages/Courses.jsx";
import CourseDetail from "./pages/CourseDetail.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />

        {/* nested route */}
        <Route path="/products/men" element={<Men />} />
        <Route path="/products/women" element={<Women />} />

        {/* <Route path="/product" element={<Products />}>
          <Route path="women" element={<Women />} />
        </Route> */}

        {/* dynamic route */}
        <Route path="/videos" element={<Videos />} />
        <Route path="/videos/:id" element={<VideoPlayer />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/courses/:id" element={<VideoPlayer />} />
        <Route path="/courses/:id/course-detail" element={<CourseDetail />} />

        {/* Not found page */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
