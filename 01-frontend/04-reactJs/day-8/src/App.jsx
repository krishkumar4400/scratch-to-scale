// conditional rendering

// import React from "react";
// import NavBar from "./components/NavBar";
// import Men from "./components/Men";
// import Women from "./components/Women";

// const App = () => {
//   const user1 = {
//     name: "Sarthak",
//     age: 23,
//     gender: "male",
//   };
//   const user2 = {
//     name: "Shreya",
//     age: 21,
//     gender: "female",
//   };
//   const user3 = {
//     name: "bixi",
//     age: 8,
//     gender: "male",
//   };

//   return (
//     <>
//       <div>
//         <NavBar
//           title="title1"
//           color="red"
//           links={["Home", "About", "Profile", "Contact"]}
//         />
//         <NavBar
//           title="title2"
//           color="blue"
//           links={["Home", "Products", "Men", "Women"]}
//         />
//         <NavBar
//           title="title3"
//           color="yellow"
//           links={["Home", "Courses", "Classroom", "Help", "Contact"]}
//         />
//       </div>

//       <div>
//         {user1.gender == "men" ? (
//           user3.age > 10 ? (
//             <Men user={user3} />
//           ) : (
//             <Women user={user2} />
//           )
//         ) : (
//           <Women user={user2} />
//         )}
//       </div>
//       <div className="">
//         {user1.gender == "women" ? (
//           <Women user={user2} />
//         ) : (
//           <Men user={user1} />
//         )}
//       </div>
//     </>
//   );
// };

// export default App;

// event listeners
import React from "react";

const App = () => {
  function onClickButton(a) {
    console.log("Hello", a);
  }
  return (
    <div>
      <button
        onClick={onClickButton}
        className="bg-emerald-600 text-white px-6 py-2 rounded-md active:scale-95"
      >
        Click to Download
      </button>
      <button
        onClick={function () {
          onClickButton(10);
        }}
        className="bg-emerald-600 text-white px-6 py-2 rounded-md active:scale-95"
      >
        Click to Download
      </button>
    </div>
  );
};

export default App;
