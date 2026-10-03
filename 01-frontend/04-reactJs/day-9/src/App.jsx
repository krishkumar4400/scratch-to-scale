// import React from "react";
// import { useState } from "react";

// const App = () => {
//   const [count, setCount] = useState(0);
//   return (
//     <div>
//       <h1>{`Count = ${count}`}</h1>
//       <div>
//         <button
//           onClick={function () {
//             console.log("Increase");
//             console.log(count);
//             setCount(count + 1);
//             console.log(count);
//           }}
//         >
//           Increase
//         </button>
//       </div>
//       <br />
//       <div>
//         <button
//           onClick={function () {
//             console.log("Decrease");
//             setCount(count - 1);
//           }}
//         >
//           Descrease
//         </button>
//       </div>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { useState } from "react";

const App = () => {
  const [marks, setMarks] = useState([20, 50, 66, 78, 92, 33, 28]);

  const studentGrace = () => {
    console.log("give grace");
    const newmarks = marks.map(function (m) {
      if(m > 95) {
        return m;
      }
      return m + 5;
    });
    console.log(newmarks);
    setMarks(newmarks);
  };
  return (
    <div>
      {marks.map(function (elem, index) {
        return (
          <h1 key={index}>
            {" "}
            Student {index + 1} ={elem}
          </h1>
        );
      })}
      <div>
        <button onClick={studentGrace}>Give them Grace</button>
      </div>
    </div>
  );
};

export default App;
