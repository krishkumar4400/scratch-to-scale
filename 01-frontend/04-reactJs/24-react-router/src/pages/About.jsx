import { Outlet, useNavigate } from "react-router";

const About = () => {
  const navigate = useNavigate();
  return (
    <div>
      About Page
      <button onClick={() => navigate("/about/nested")}>Show Nested Component</button>
      <Outlet />
    </div>
  );
};

export default About;
