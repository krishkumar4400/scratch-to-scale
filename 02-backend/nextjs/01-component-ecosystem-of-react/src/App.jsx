import Card from "./components/Card.jsx";
import { data } from "./assets/data.js";
import Header from "./components/Header.jsx";

const App = () => {


  return (
    <div>
      <Header />
      <div className="my-30">
        {" "}
        <h1 className="text-4xl font-medium text-center py-4 border border-sky-500 text-blue-400 mx-4 my-10 text-white:dark">
        Learn to integrate Tailwind
      </h1>
      </div>
      <div className="flex my-30 flex-wrap gap-4 justify-between px-15 max-sm:justify-center max-md:justify-center max-md:px-4 max-sm:px-4">
        {data.map((obj) => {
          return (
            <Card
              title={obj.title}
              description={obj.description}
              imageUrl={obj.imageUrl}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
