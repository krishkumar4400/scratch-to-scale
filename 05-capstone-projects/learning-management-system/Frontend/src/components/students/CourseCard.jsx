import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { assets } from "../../assets/assets.js";
import { AppContext } from "../../context/AppContext.jsx";

const CourseCard = ({course}) => {
  const { currency, calculateRating } = useContext(AppContext);
  return (
    <Link to={'/course/' + course._id} onClick={() => scrollTo(0,0)} className="flex flex-col hover:scale-105 transition-all duration-200 active:scale-95 border border-gray-500/40 pb-6 overflow-hidden rounded-lg">
      <img src={course.courseThumbnail} className="w-full" alt="" />
      <div className="p-3 text-left ">
        <h3 className="text-base font-semibold">{course.courseTitle}</h3>
        <p className="text-sm font-medium text-gray-600">krish </p>
        <div className="flex items-center gap-2 space-x-2">
          <p>
            {calculateRating(course)}
          </p>
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <img src={i < Math.floor(calculateRating(course)) ? assets.star : assets.star_blank} className="w-3.5 h-3.5 " alt="Star" key={i} />
            ))}
          </div>
          <p className="text-slate-900">
            {course.courseRatings.length}
          </p>
        </div>
        <p className="text-gray-800 text-base font-semibold">
          {currency}
          {(
            course.coursePrice -
            (course.discount * course.coursePrice) / 100
          ).toFixed(2)}
        </p>
      </div>
    </Link>
  );
};

export default CourseCard;
