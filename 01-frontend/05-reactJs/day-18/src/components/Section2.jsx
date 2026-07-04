import React from 'react'
import AllCourse from './AllCourse';

const Section2 = ({courseData}) => {
    console.log(`Section2 = ${courseData.name}`);

  return <div>Section2 Section2
    <div>
        <AllCourse courseData={courseData} />
    </div>
  </div>;
}

export default Section2
