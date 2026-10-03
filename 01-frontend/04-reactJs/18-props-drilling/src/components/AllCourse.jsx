import Course1 from "./Course1.jsx";

const AllCourse = ({ courseData }) => {
  console.log(`AllCourses = ${courseData.name}`);

  return (
    <div>
      AllCourse AllCourse
      <div>
        <Course1 courseData={courseData} />
        <Course1 courseData={courseData} />
        <Course1 courseData={courseData} />
        <Course1 courseData={courseData} />
      </div>
    </div>
  );
};

export default AllCourse;
