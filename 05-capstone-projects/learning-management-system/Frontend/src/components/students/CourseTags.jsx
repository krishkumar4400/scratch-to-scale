import React, { useContext } from 'react'
import { AppContext } from '../../context/AppContext.jsx'
import TagName from './TagName.jsx';

const CourseTags = () => {
    const { allCourseTags } = useContext(AppContext);
  return (
    <div className=''>
      {
        <TagName allCourseTags={allCourseTags}/>
      }
    </div>
  )
}

export default CourseTags
