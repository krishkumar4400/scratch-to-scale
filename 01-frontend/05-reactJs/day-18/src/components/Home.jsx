import React from 'react'
import AllSections from './AllSections';

const Home = ({ courseData }) => {
    console.log(`Home = ${courseData.name}`);
  return <div>
    <AllSections courseData={courseData}/>
  </div>;
};

export default Home
