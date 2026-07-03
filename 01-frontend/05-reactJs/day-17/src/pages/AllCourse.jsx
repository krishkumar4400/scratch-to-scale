import React from 'react'
import { Outlet } from 'react-router-dom'

const AllCourse = () => {
  return (
    <div>
      <h1>This is All course page</h1>
      <Outlet />
    </div>
  )
}

export default AllCourse
