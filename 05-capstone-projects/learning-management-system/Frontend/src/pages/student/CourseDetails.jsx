import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../context/AppContext.jsx";
import Loading from "../../components/students/Loading.jsx";
import { assets } from "../../assets/assets.js";
import humanizeDuration from "humanize-duration";
import Footer from "../../components/students/Footer.jsx";
import YouTube from "react-youtube";

const CourseDetails = () => {
  const { id } = useParams();
  const [courseData, setCourseData] = useState(null);
  const {
    allCourses,
    calculateRating,
    calculateChapterTime,
    calculateCourseDuration,
    calculateNoOfLectures,
    currency,
  } = useContext(AppContext);
  const navigate = useNavigate();
  const [openSection, setOpenSection] = useState({});
  const [isAlreadyEnrolled, setAlreadyEnrolled] = useState(false);
  const [playerData, setPlayerData] = useState(null);

  const fetchCourseData = async () => {
    const findCourse = allCourses.find((course) => course._id === id);
    setCourseData(findCourse);
  };

  const toggleSection = (index) => {
    setOpenSection((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  useEffect(() => {
    fetchCourseData();
  }, [allCourses]);

  return courseData ? (
    <>
      <div className="flex md:flex-row flex-col-reverse gap-10 relative items-start justify-between md:px-36 px-8 md:pt-30 pt-10 text-left bg-gradient-to-t to-cyan-300/50">
        {/* left column */}
        <div className="max-w-xl z-10 text-gray-500">
          <h2 className="md:text-4xl text-2xl font-semibold text-gray-800">
            {courseData.courseTitle}
          </h2>
          <p
            dangerouslySetInnerHTML={{
              __html: courseData.courseDescription.slice(0, 200),
            }}
            className="pt-4 md:text-base text-sm"
          ></p>
          {/* review and rating */}

          <div className="flex items-center gap-2 space-x-2 pb-1 text-sm my-2">
            <p>{calculateRating(courseData)}</p>
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <img
                  src={
                    i < Math.floor(calculateRating(courseData))
                      ? assets.star
                      : assets.star_blank
                  }
                  className="w-3.5 h-3.5 "
                  alt="Star"
                  key={i}
                />
              ))}
            </div>
            <p className="text-blue-600">
              ({courseData.courseRatings.length}
              {courseData.courseRatings.length > 1 ? " ratings" : " rating"})
            </p>
            <p>
              {courseData.enrolledStudents.length}
              {courseData.enrolledStudents.length > 1 ? " Students" : "Student"}
            </p>
          </div>
          <p className="text-sm text-gray-600 mb-3 cursor-pointer">
            Course by{" "}
            <span
              onClick={() => navigate("/educator/my-courses")}
              className="text-blue-600 underline"
            >
              Krish
            </span>
          </p>
          <div className="pt-8 text-gray-800">
            <h2 className="text-xl font-semibold">Course Structure</h2>
            <div className="pt-6">
              {courseData.courseContent.map((chapter, index) => (
                <div
                  key={index}
                  className="border border-gray-300 mb-2 bg-white rounded"
                >
                  <div
                    className="flex items-center justify-between px-4 py-3 cursor-pointer select-none"
                    onClick={() => toggleSection(index)}
                  >
                    <div className="flex items-center gap-2">
                      <img
                        className={`transform transition-transform duration-200 ${
                          openSection[index] ? "rotate-180" : ""
                        }`}
                        src={assets.down_arrow_icon}
                        alt="arrow icon"
                      />
                      <p className="text-sm md:text-base font-medium text-black">
                        {chapter.chapterTitle}
                      </p>
                    </div>
                    <p className="text-slate-800 text-sm md:text-base">
                      {chapter.chapterContent.length} lectures-
                      {calculateChapterTime(chapter.chapterContent)}
                    </p>
                  </div>
                  <div
                    className={`overflow-hidden transition-all duration-300  ${
                      openSection[index] ? "max-h-96" : "max-h-0"
                    }`}
                  >
                    <ul className="list-disc pl-4 md:pl-10 pr-4 py-2 text-gray-600 border-t border-gray-300">
                      {chapter.chapterContent.map((lecture, i) => (
                        <li key={i} className="flex items-start gap-2 py-1 ">
                          <img
                            src={assets.play_icon}
                            alt="play icon"
                            className="w-4 h-4 mt-1"
                          />
                          <div className="flex items-center justify-between w-full  text-gray-800 text-xs sm:text-default">
                            <p>{lecture.lectureTitle}</p>
                          </div>
                          <div className="flex gap-2 w-full sm:w-1/2 items-end max-sm:flex-col max-sm:mb-3">
                            {lecture.isPreviewFree && (
                              <p
                                onClick={() =>
                                  setPlayerData({
                                    videoId: lecture.lectureUrl
                                      .split("/")
                                      .pop(),
                                  })
                                }
                                className="text-blue-500 cursor-pointer"
                              >
                                Preview
                              </p>
                            )}
                            <p>
                              {humanizeDuration(
                                lecture.lectureDuration * 60 * 1000,
                                { units: ["h", "m"] }
                              )}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="py-20 text-sm md:text-base">
            <h3 className="text-gray-800 text-xl font-semibold">
              Course Description
            </h3>
            <p
              dangerouslySetInnerHTML={{
                __html: courseData.courseDescription,
              }}
              className="pt-4 rich-text"
            ></p>
          </div>
        </div>

        {/* right column */}
        <div className="max-w-80 z-10 rounded-t sm:rounded-none overflow-hidden bg-white min-w-[300px] sm:min-w-[420px]">
          {playerData ? (
            <YouTube
              videoId={playerData.videoId}
              opts={{
                playerVars: {
                  autoplay: 1,
                },
              }}
              iframeClassName="w-full aspect-video"
            />
          ) : (
            <img src={courseData.courseThumbnail} alt="" />
          )}

          <div className="p-5">
            <div className="flex items-center gap-2">
              <img
                src={assets.time_left_clock_icon}
                className="w-4"
                alt="time left clock icon"
              />

              <p className="text-red-500">
                <span className="font-medium">5 days</span>left at this price
              </p>
            </div>
            <div className="flex gap-3 items-center pt-3">
              <p className="text-gray-800 sm:text-3xl text-2xl font-semibold">
                {currency}
                {(
                  courseData.coursePrice -
                  (courseData.discount * courseData.coursePrice) / 100
                ).toFixed(2)}
              </p>
              <p className="line-through text-gray-500 ">
                {currency}
                {courseData.coursePrice}
              </p>
              <p className="sm:text-lg text-gray-500">
                {courseData.discount} % off
              </p>
            </div>

            <div className="flex items-center text-sm ms:text-base gap-4 pt-2 sm:pt-4 text-gray-500">
              <div className="flex items-center gap-1">
                <img src={assets.star} alt="star icon" />
                <p>{calculateRating(courseData)}</p>
              </div>

              <div className="h-4 w-px bg-gray-500/60"></div>

              <div className="flex items-center gap-1">
                <img src={assets.time_clock_icon} alt="time clock icon" />
                <p>{calculateCourseDuration(courseData)}</p>
              </div>

              <div className="h-4 w-px bg-gray-500/60"></div>

              <div className="flex items-center gap-1">
                <img src={assets.lesson_icon} alt="time clock icon" />
                <p>{calculateNoOfLectures(courseData)} lessons</p>
              </div>
            </div>

            <div className="mt-4 sm:mt-6 ">
              <button
                onClick={""}
                className="w-full border-0 font-medium bg-blue-600 rounded-md py-2 text-white"
              >
                {isAlreadyEnrolled ? "Already Enrolled" : "Enroll Now"}
              </button>
            </div>

            <div className="pt-6">
              <p className="sm:text-xl text-lg font-medium text-gray-800">
                What's in the course
              </p>
              <ul className="ml-4 pt-2 text-sm sm:text-default list-disc text-gray-500">
                <li>Lifetime access with free updates</li>
                <li>Step-by-step, hands-on project guidance</li>
                <li>Downlodable resources and sorce code</li>
                <li>Certiface of completion</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  ) : (
    <Loading />
  );
};

export default CourseDetails;
