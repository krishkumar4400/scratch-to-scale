import React from 'react'
import {Routes, Route, useMatch} from 'react-router-dom';
import Home from './pages/student/Home.jsx';
import CourseList from './pages/student/CourseList.jsx';
import CourseDetails from './pages/student/CourseDetails.jsx';
import MyEnrollments from './pages/student/MyEnrollments.jsx';
import Player from './pages/student/Player.jsx';
import Loading from './components/students/Loading.jsx';
import Educator from './pages/educator/Educator.jsx';
import DashBoard from './pages/educator/DashBoard.jsx';
import AddCourse from './pages/educator/AddCourse.jsx';
import MyCourses from './pages/educator/MyCourses.jsx';
import StudentEnrolled from './pages/educator/StudentEnrolled.jsx';
import NavBar from './components/students/NavBar.jsx';
import LearnMore from './pages/student/LearnMore.jsx';
import "quill/dist/quill.snow.css";

const App = () => {

  const isEducatorRoute = useMatch('/educator/*');


  return (
    <div className='text-default min-h-screen bg-white'>
      {!isEducatorRoute && <NavBar/>}
      <Routes>
        {/* Routing for Students */}
        <Route path='/' element={ <Home/> }/>
        <Route path='/course-list' element={<CourseList/>}/>
        <Route path='/course-list/:input' element={<CourseList/>} />
        <Route path='/course/:id' element={<CourseDetails/>} />
        <Route path='/my-enrollments' element={<MyEnrollments/>} />
        <Route path='/player/:courseId' element={<Player/>} />
        <Route path='/loading/:path' element={<Loading/>} />
        <Route path='/learn-more' element={<LearnMore/>} />

        {/* Routing for Educator */}
        <Route path='/educator' element={<Educator/>}>
        <Route path='/educator' element={<DashBoard/>} />
        <Route path='add-course' element={<AddCourse/>} />
        <Route path='my-courses' element={<MyCourses/>} />
        <Route path='student-enrolled' element={<StudentEnrolled/>} />
        </Route>
      </Routes>
    </div>
  )
}

export default App