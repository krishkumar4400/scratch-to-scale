import React from 'react'
import Section1 from './Section1';
import Section2 from './Section2';

const AllSections = ({courseData}) => {
    console.log(`AllSection = ${courseData.name}`);

  return <div>AllSections AllSections
    <div>
        <Section1/>
        <Section2 courseData={courseData} />
    </div>
  </div>;
}

export default AllSections
