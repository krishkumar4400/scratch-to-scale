import React from 'react'
import { Link, useNavigate } from 'react-router-dom';

const Home = () => {
    
  const navigate = useNavigate();
  return (
    <div>
      Home Page
      <div>
        <h2 onClick={() => navigate('/about')}>
            click here
        </h2>
      </div>
      <div>
        <Link to={'/about'}  />
      </div>
    </div>
  )
}

export default Home
