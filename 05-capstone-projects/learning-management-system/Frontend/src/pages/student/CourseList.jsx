import Footer from '../../components/students/Footer.jsx';
import {useNavigate, useParams} from 'react-router-dom';
import Search from '../../components/students/SearchBar.jsx'
import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../../context/AppContext.jsx';
import CourseCard from '../../components/students/CourseCard.jsx';
import { assets } from '../../assets/assets.js';

const CourseList = () => {
  const navigate = useNavigate();
  const {allCourses} = useContext(AppContext);
  const {input} = useParams();
  const [filteredCourse, setFilteredCourse] = useState([]);

  useEffect(() => {
    if(allCourses && allCourses.length > 0) {
      const tempCourses = allCourses.slice();

      input ? setFilteredCourse(
        tempCourses.filter(
          item => item.courseTitle.toLowerCase().includes(input.toLowerCase())
        )
      ) :
      setFilteredCourse(tempCourses)
    }
  }, [allCourses, input]);

  return (
    <div className="">
      <div className="flex max-sm:gap-4 max-sm:flex-col max-sm:items-start px-8 md:px-32 items-center justify-between w-full pt-20 pb-10">
        <div className="flex flex-col">
          <span className="sm:text-3xl text-2xl font-semibold text-slate-900 pb-2">
            Course List
          </span>
          <p className="flex items-center gap-1 cursor-pointer">
            <span onClick={() => navigate("/")} className="text-blue-700">
              Home
            </span>
            /<span className="text-gray-600">Course List</span>
          </p>
        </div>
        <div className="max-sm:flex max-sm:justify-center max-sm:items-center max-sm:w-full max-sm:my-4">
          <Search />
        </div>
      </div>

      <div className="my-16 gap-3 md:p-0  px-8 md:px-32">
        {input && (
          <div className="inline-flex items-center gap-4 px-4 py-2 border mt-8 -mb-8 text-gray-600">
            <p>{input}</p>
            <img
              src={assets.cross_icon}
              className="cursor-pointer"
              onClick={() => navigate("/course-list")}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-16 gap-3 md:p-0  px-8 md:px-32">
        {filteredCourse.map((course, index) => (
          <CourseCard key={index} course={course} />
        ))}
      </div>
      <Footer data={input} />
    </div>
  );
}

export default CourseList