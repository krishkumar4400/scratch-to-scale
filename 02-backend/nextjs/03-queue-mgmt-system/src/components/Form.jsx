import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";

export default function Form({ onAdd }) {
  // todo
  const [name, setName] = useState("");
  const [service, setService] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // validations
    if (!name.trim() || !service.trim()) {
      return;
    }

    onAdd({ name, service });

    setName("");
    setService("");
  };

  return (
    <>
      <div className="border flex flex-col px-4 py-4 min-w-sm max-w-sm border-gray-400">
        <h2 className="text-xl font-semibold text-yellow-600 pb-4">
          Add to Queue
        </h2>
        <form className="flex flex-col w-full " onSubmit={handleSubmit}>
          <input
            className="px-6 py-2 border bg-transparent text-white outline-none text-sm mb-5 w-full"
            type="text"
            placeholder="Customer Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <select
            className="text-white outline-0 bg-black border px-6 py-2 text-sm mb-5"
            value={service}
            onChange={(e) => setService(e.target.value)}
          >
            <option value="">Select Service</option>
            <option value="consultation">consultation</option>
            <option value="payment">payment</option>
            <option value="support">support</option>
          </select>
          <button
            type="submit"
            className="border-0 py-2 w-full font-medium text-center text-sm outline-0 duration-150 hover:scale-105 active:scale-100 cursor-pointer bg-violet-600 flex items-center justify-center gap-2"
          >
            {" "}
            <FaUserPlus /> Add Customer
          </button>
        </form>
      </div>
    </>
  );
}