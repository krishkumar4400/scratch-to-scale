import React from 'react'
import { useContext } from 'react'
import { UserDataContext } from '../context/UserContext'

const Navbar = () => {
    const data = useContext(UserDataContext);
    console.log(data)
  return (
    <div>
      Navbar
    </div>
  )
}

export default Navbar
