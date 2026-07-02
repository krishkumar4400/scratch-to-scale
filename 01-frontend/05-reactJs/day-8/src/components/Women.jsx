import React from 'react'

const Women = (props) => {
  return (
    <div className="px-4 py-6 bg-gray-800 text-amber-400 border border-amber-600 my-4">
      <h1>{props.user.name}</h1>
      <h2>{props.user.age}</h2>
      <h3> {props.user.gender}</h3>
    </div>
  );
}

export default Women
