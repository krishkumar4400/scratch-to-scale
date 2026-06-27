import { useState } from "react";
import Form from "./components/Form";
import Display from "./components/Display";

export default function App() {
  const [queue, setQueue] = useState([]);

  const addToQueue = (customer) => {
    // add data to queue
    setQueue([...queue, { ...customer, id: Date.now(), status: "Waiting" }]);
  };

  const updateStatus = (id, newStatus) => {
    // change data in queue
    setQueue(
      queue.map((customer) => {
      return customer.id === id ? { ...customer, status: newStatus } : customer;
      }),
    );
  };

  const removeFromQueue = (id) => {
    // remove data from the queue
    setQueue(queue.filter((customer) => customer.id !== id));
  };

  return (
    <>
      <div>
        <header className="text-center pb-30">
          <h1 className="text-4xl my-4 text-purple-500 font-medium">
            Queue Maangement Application
          </h1>
          <p className="text-sm text-gray-400">
            Manage your customers efficiently
          </p>
        </header>

        <main className="flex justify-between items-center flex-wrap gap-4 px-10 ">
          <Form onAdd={addToQueue} />
          <Display
            queue={queue}
            onUpdateStatus={updateStatus}
            onRemoveFromQueue={removeFromQueue}
          />
        </main>
      </div>
    </>
  );
}
