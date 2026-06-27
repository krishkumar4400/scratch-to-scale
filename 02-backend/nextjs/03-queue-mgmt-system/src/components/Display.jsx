export default function Display({ queue, onUpdateStatus, onRemoveFromQueue }) {
  return (
    <>
      <div className="min-w-sm max-w-full border p-4 border-gray-400">
        <h2 className="text-xl text-sky-400 pb-3 font-semibold">
          Current queue
        </h2>
        {queue.length === 0 ? (
          <p className="text-sm text-red-600 pb-4">No customer data</p>
        ) : (
          <div className="">
            {queue.map((customer) => (
              <div key={customer.id}>
                <div className="bg-gray-900 p-2 mb-3">
                  <h3 className="font-semibold text-gray-300 pb-2">{customer.name}</h3>
                  <p className="text-sm font-light text-slate-400">{customer.service}</p>
                  <span className={`${customer.status === "Waiting" ? "text-orange-600" : "text-green-600"} cursor-pointer `}>
                    {
                      customer.status
                    }
                  </span>
                </div>
                <div className="">
                  {
                    customer.status === "Waiting" && <button className="bg-green-400 px-4 py-2 rounded text-white cursor-pointer " onClick={() => onUpdateStatus(customer.id, "Serving")} >Serve</button>
                  }
                  {
                    customer.status === "Serving" && <button className="bg-green-400 px-4 py-2 rounded text-white cursor-pointer " onClick={() => onUpdateStatus(customer.id, "Completed")} >Serving</button>
                  }
                  <button className="bg-red-600 px-4 py-2 rounded mx-3 text-white" onClick={() => onRemoveFromQueue(customer.id)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
}