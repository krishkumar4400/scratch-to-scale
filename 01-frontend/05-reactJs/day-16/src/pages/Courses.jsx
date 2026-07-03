import React from 'react'
import { useParams } from 'react-router-dom'

const Courses = () => {
  const params = useParams();
  console.log(params)
  return (
    <div>
      course page
    </div>
  )
}

export default Courses
