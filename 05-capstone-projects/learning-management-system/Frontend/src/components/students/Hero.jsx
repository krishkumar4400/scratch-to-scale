import React from 'react'
import Search from './SearchBar';
import CourseTags from './CourseTags';

const Hero = () => {
  return (
    <div className="w-full bg-gradient-to-t to-cyan-200/70 flex flex-col">
      {/* <CourseTags /> */}
      <div className=" md:px-0 space-y-7 pt-20 md:pt-32 text-center justify-center items-center">
        <h2 className="mx-auto text-gray-800 mb-4 text-2xl sm:text-4xl font-bold">
          Empower your future with the
          <br /> courses designed to{" "}
          <span className="text-blue-600"> fit your choice</span>
        </h2>
        <div className="text-gray-600 text-sm font-medium pb-10">
          <p className="mx-auto hidden sm:block max-w-2xl">
            We bring together world-class instructors, interactive content, and
            a supportive community to help you achieve your personal and
            professional goals.
          </p>
          <p className="sm:hidden block mx-auto max-w-sm">
            We bring together world-class infrastructure to help you achieve
            your professional goals
          </p>
        </div>
        <div className='flex items-center justify-center px-2'>
          <Search />
        </div>
      </div>
    </div>
  );
}

export default Hero
