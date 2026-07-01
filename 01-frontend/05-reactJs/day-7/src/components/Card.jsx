import React from 'react'

const Card = (props) => {
    console.log(props);
  return (
    <div>
      <h1>This is a card {""}</h1>
      <h2>
        {props.user} {props.age}
      </h2>
    </div>
  )
}

export default Card
