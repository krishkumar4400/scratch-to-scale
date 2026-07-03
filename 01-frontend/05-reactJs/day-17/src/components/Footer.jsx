import React from "react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h2>Footer</h2>
      <div>
        <button onClick={() => {
            navigate('/course')
        }}>Courses</button>
      </div>
    </div>
  );
};

export default Footer;
