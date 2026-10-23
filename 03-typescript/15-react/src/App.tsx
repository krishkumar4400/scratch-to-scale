import Card from "./components/Card.tsx";
import Card2 from "./components/Card2.tsx";
import Form from "./components/Form.tsx";
import List from "./components/List.tsx";
import type { Chai } from "./types.js";

function App() {
  const data: Chai[] = [
    { id: 1, name: "Masala Chai", price: 25 },
    { id: 2, name: "Ginger Chai", price: 30 },
    { id: 3, name: "Elaichi Chai", price: 35 },
    { id: 4, name: "Tulsi Chai", price: 40 },
    { id: 5, name: "Lemon Chai", price: 20 },
  ];
  return <div>
    <h1>Vite + React</h1>

    <div>
      <Card name={"Headphones"} price={5000} isSpecial={true} />
      <Card name={"Laptop"} price={50000} isSpecial={true} />
    </div>

    <div>
      <List items={data}></List>
    </div>
    <div>
      <Form onSubmit={(order) => {
        console.log("order", order.name, order.cups);
      }} />
    </div>

    <div>
      <Card2 title="Chai Shop"  footer={<button>Order Now</button>} />
    </div>
  </div>
}

export default App
