import React, { useEffect, useState } from "react";
import { dummyStudentEnrolled } from "../../assets/assets.js";
import Loading from "../../components/students/Loading.jsx";

const StudentEnrolled = () => {
  const [studentsEnrolled, setStudentsEnrolled] = useState(null);
  const fetchStudentsEnrolled = async () => {
    setStudentsEnrolled(dummyStudentEnrolled);
  };

  useEffect(() => {
    fetchStudentsEnrolled();
  }, [studentsEnrolled]);

  return studentsEnrolled ? (
    <div className="min-h-screen flex flex-col items-start justify-between sm:p-8 sm:pb-0 p-4 pt-8 pb-0">
      <div className="flex flex-col items-center max-w-4xl w-full overflow-hidden rounded-md bg-white border border-gray-500/40">
        <table className="table-fixed md:table-auto w-full overflow-hidden pb-4">
          <thead className="text-gray-900 border-b border-gray-500/40 text-sm text-left">
            <tr>
              <th className="px-4 py-3 text-center font-semibold hidden sm:table-cell">
                #
              </th>
              <th className="px-4 py-3 font-semibold">Student Name</th>
              <th className="px-4 py-3 font-semibold">Course Title</th>
              <th className="px-4 py-3 font-semibold hidden sm:table-cell">
                Date
              </th>
            </tr>
          </thead>
          <tbody className="text-sm text-slate-700">
            {studentsEnrolled.map((student, index) => (
              <tr
                key={index}
                className="border-b border-gray-500/40  font-medium "
              >
                <td className="px-4 py-3 hidden sm:table-cell text-center">
                  {index + 1}
                </td>
                <td className="sm:px-4 px-2 py-3 flex items-center space-x-3">
                  <img
                    src={student.student.imageUrl}
                    alt="student logo"
                    className="w-8 h-8 rounded-full"
                  />
                  <span className="truncate">{student.student.name}</span>
                </td>
                <td className="truncate px-4 py-3">{student.courseTitle}</td>
                <td className="px-4 py-3 truncate hidden sm:table-cell">
                  {new Date(student.purchaseDate).toLocaleDateString()}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default StudentEnrolled;
