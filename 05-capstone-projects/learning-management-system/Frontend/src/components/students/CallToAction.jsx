import React from 'react'
import { assets } from '../../assets/assets.js';
import {useUser, useClerk} from '@clerk/clerk-react';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
  const {user} = useUser();
  const navigate = useNavigate();
  const {openSignIn} = useClerk();
  return (
    <div className="py-20">
      <h2 className="text-3xl font-bold text-slate-900 pb-4">
        Learn anything, anytime, anywhere
      </h2>
      <div>
        <p className="text-gray-800 text-sm pb-8">
          Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim
          id veniam aliqua <br /> proident excepteur commodo do ea
        </p>
        <div className="flex items-center justify-center gap-8">
          <button
            onClick={() => {user ? navigate('/course-list') : openSignIn(); scrollTo(0,0)}}
            className="bg-blue-600 text-white rounded-md px-8 py-2 hover:scale-105 active:scale-95 duration-200 hover:shadow-gray-600 shadow-md"
          >
            Get started
          </button>
          <button
            onClick={() => {navigate('/learn-more'); scrollTo(0,0)}}
            className="flex items-center gap-2 hover:cursor-pointer duration-200 hover:scale-105 active:scale-95 hover:text-gray-800"
          >
            Learn more <img src={assets.arrow_icon} alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default CallToAction
