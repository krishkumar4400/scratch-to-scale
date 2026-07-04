import React from "react";
import { createContext } from "react";

export const UserDataContext = createContext();

const UserContext = (props) => {
  const user = "krish";
  return (
    <UserDataContext.Provider value={user}>
      {props.children}
    </UserDataContext.Provider>
  );
};

export default UserContext;
