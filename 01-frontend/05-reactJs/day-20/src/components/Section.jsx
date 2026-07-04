import React from 'react'
import { UserDataContext } from '../context/UserContext';
import { useContext } from 'react';

const Section = () => {
        const data = useContext(UserDataContext);
        console.log(data);
  return (
    <div>
      Section
    </div>
  )
}

export default Section
