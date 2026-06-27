import humanizeDuration from "humanize-duration";
import { assets } from "../../assets/assets.js";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../../context/AppContext";
import { useParams } from "react-router-dom";
import YouTube from "react-youtube";
import Footer from "../../components/students/Footer";
import Rating from "../../components/students/Rating.jsx";

const Player = () => {
  const [courseData, setCourseData] = useState(null);
  const { calculateChapterTime, enrolledCourses } = useContext(AppContext);
  const [openSection, setOpenSection] = useState({});
  const [playerData, setPlayerData] = useState(null);
  const { courseId } = useParams();

  const getCourseData = () => {
    enrolledCourses.map((course) => {
      {
        if (course._id === courseId) {
          setCourseData(course);
        }
      }
    });
  };

  const toggleSection = (index) => {
    setOpenSection((prev) => ({ ...prev, [index]: !prev[index] }));
  };

  useEffect(() => {
    getCourseData();
  }, [enrolledCourses]);

  return (
    <>
      <div className="p-4 sm:p-10 flex flex-col-reverse md:grid md:grid-cols-2 gap-10 md:px-36">
        {/* left column */}
        <div className="text-gray-800">
          <h2 className="text-xl font-semibold">Course Structure</h2>
          <div className="pt-6">
            {courseData &&
              courseData.courseContent.map((chapter, index) => (
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
                            src={
                              false ? assets.blue_tick_icon : assets.play_icon
                            }
                            alt="play icon"
                            className="w-4 h-4 mt-1"
                          />
                          <div className="flex items-center justify-between w-full  text-gray-800 text-xs sm:text-default">
                            <p>{lecture.lectureTitle}</p>
                          </div>
                          <div className="flex gap-2 w-full sm:w-1/2 items-end max-sm:flex-col max-sm:mb-3">
                            {lecture.lectureUrl && (
                              <p
                                onClick={() => {
                                  setPlayerData({
                                    ...lecture,
                                    chapter: index + 1,
                                    lecture: i + 1,
                                  });
                                  scrollTo(0, 0);
                                }}
                                className="text-blue-500 cursor-pointer"
                              >
                                Watch
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

          {/* Rate this course */}
          <div className="text-gray-800 my-10 flex items-center gap-2 py-3">
            <h2 className="text-xl font-semibold">Rate This Course</h2>
            <Rating initialRating={0}/>
          </div>

        </div>

        {/* right column */}
        <div className="sm:mt-13">
          {playerData ? (
            <div>
              <YouTube
                videoId={playerData.lectureUrl.split("/").pop()}
                opts={{ playerVars: { autoplay: 1 } }}
                iframeClassName="w-full aspect-video"
              />
              <div className="text-gray-600 flex justify-between items-center mt-2">
                <p className="gap-3">
                  {" "}
                  {playerData.chapter} . {playerData.lecture}{" "}
                  {playerData.lectureTitle}{" "}
                </p>
                <button className="text-blue-600 cursor-pointer outline-0">
                  {false ? "Completed" : "Mark Complete"}
                </button>
              </div>
            </div>
          ) : (
            <img src={courseData ? courseData.courseThumbnail : ""} alt="" />
          )}
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Player;
