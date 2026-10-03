import React from 'react'
import { Outlet } from 'react-router-dom';

const Course = () => {
  return (
    <div>
      <h1>Course Page</h1>
        <Outlet/>
    </div>
  );
}

export default Course
