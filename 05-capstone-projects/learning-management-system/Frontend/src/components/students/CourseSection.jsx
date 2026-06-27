import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import CourseCard from './CourseCard.jsx';
import { AppContext } from '../../context/AppContext.jsx';

const CourseSection = () => {
  const {allCourses} = useContext(AppContext);
  return (
    <div className="py-16 md:px-35 bg-gradient-to-b from-blue-200 w-full">
      <h2 className="text-3xl font-medium text-gray-800 mb-3">
        Learn from the best
      </h2>
      <p className="text-gray-500 text-center text-sm md:text-base mb-3 px-2">
        Discover our top-rated courses across various categories. From coding
        and design to <br /> business and wellness, our courses are crafted to
        deliver results
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-2 md:px-0 w-full bg-gradient-to-r  my-10 md:my-16 gap-3 sm:gap-6 ">
        {allCourses.slice(0, 4).map((course, index) => (
          <CourseCard course={course} key={index} />
        ))}
      </div>

      <Link
        to="/course-list"
        onClick={() => scrollTo(0, 0)}
        className="text-gray-600 border border-gray-500/30 px-10 py-3 rounded "
      >
        Show all courses
      </Link>
    </div>
  );
}

export default CourseSection
