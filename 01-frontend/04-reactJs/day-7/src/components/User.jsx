import React from "react";

const User = (props) => {
  console.log(props);
  return (
    <div>
      <h1>{props.user}</h1>
    </div>
  );
};

export default User;
