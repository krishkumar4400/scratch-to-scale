import React from 'react'
import { useParams } from 'react-router-dom'

const CourseDetail = () => {
    const params = useParams();
    console.log(params)
  return (
    <div>
      Course detail Page
      {
        params.id
      }
    </div>
  )
}

export default CourseDetail
