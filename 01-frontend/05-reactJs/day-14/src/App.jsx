// API Handling (Axios)

import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./components/Card";

const App = () => {
  const [imageData, setImageData] = useState([]);

  async function getData() {
    axios.defaults.baseURL = "https://picsum.photos";
    const { data } = await axios.get("/v2/list?page=2&limit=100");
    console.log(data);
    setImageData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="">
        <Card imageData={imageData} />
      </div>
    </div>
  );
};

export default App;
