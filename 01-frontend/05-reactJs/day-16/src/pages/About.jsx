import React from 'react'
import { useNavigate } from 'react-router-dom';

const About = () => {
  
  const navigate = useNavigate();
  return (
    <div>
      About
      <div>
        <h2 onClick={() => navigate('/')}>
          Click here
        </h2>
      </div>
    </div>
  )
}

export default About
