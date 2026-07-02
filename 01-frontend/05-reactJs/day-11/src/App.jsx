// // local storage

// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [allUsers, setAllUsers] = useState([]);

//   const submitHandler = (e) => {
//     e.preventDefault();
//     setAllUsers([...allUsers, { name, email }]);
//     console.log(allUsers);
//     setName("");
//     setEmail("");
//   };
//   return (
//     <div>
//       <form onSubmit={submitHandler}>
//         <input
//           required
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           type="text"
//           placeholder="Enter your name"
//         />
//         <input
//           required
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//           type="email"
//           placeholder="Enter your email"
//         />
//         <button type="submit">Submit</button>
//       </form>
//       <div>
//         {allUsers.map((user, index) => {
//           return (
//             <div key={index}>
//               <h2>{`Name = ${user.name}`}</h2>
//               <p>{`Email = ${user.email}`}</p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [role, setRole] = useState("");
  const [description, setDescription] = useState("");

  const [allUsers, setAllUsers] = useState([]);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(name, url, role, description);
    setName("");
    setUrl("");
    setRole("");
    setDescription("");
    setAllUsers([...allUsers, { name, url, role, description }]);
    console.log(allUsers);
    localStorage.setItem("allUsers", allUsers);
  };

  return (
    <div className="flex flex-col gap-12 justify-center items-center h-full mt-10 w-full">
      <form
        onSubmit={submitHandler}
        className="p-12 border border-white flex flex-col gap-4 justify-center items-center"
      >
        <div>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
            placeholder="Enter your name"
            className="px-6 py-2 border border-white outline-0 text-lg font-semibold text-white"
          />
        </div>
        <div>
          <input
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            type="text"
            placeholder="Image URL"
            className="px-6 py-2 border border-white outline-0 text-lg font-semibold text-white"
          />
        </div>
        <div>
          <input
            value={role}
            onChange={(e) => setRole(e.target.value)}
            type="text"
            placeholder="Enter Role"
            className="px-6 py-2 border border-white outline-0 text-lg font-semibold text-white"
          />
        </div>
        <div>
          {" "}
          <input
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            type="Enter Description"
            placeholder="Enter Description"
            className="px-6 py-2 border border-white outline-0 text-lg font-semibold text-white"
          />
        </div>
        <div className="w-full">
          <button
            type="submit"
            className="px-6 py-2 border border-white bg-slate-950 outline-0  w-full active:scale-95 hover:scale-105 duration-150"
          >
            Create User
          </button>
        </div>
      </form>
      <Card allUsers={allUsers} setAllUser={setAllUsers} />
    </div>
  );
};

export default App;
