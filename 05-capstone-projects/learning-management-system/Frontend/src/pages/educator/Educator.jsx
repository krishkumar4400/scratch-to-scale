import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../../components/educator/Footer'
import NavBar from '../../components/educator/NavBar'
import SideBar from '../../components/educator/SideBar'

const Educator = () => {
  return (
    <div className="text-default min-h-screen bg-white">
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="flex-1 md:ml-64 ml-16 p-5">{<Outlet />}</div>
      </div>
      <Footer />
    </div>
  );
}

export default Educator
