const Card = ({ imageData }) => {
  return (
    <div>
      {imageData.map((data, index) => {
        return (
          <div className="border border-white p-4 " key={index}>
            <div className="">
              <img className="w-full rounded" src={data.download_url} alt="" />
            </div>
            <h2 className="py-3 text-center text-xl font-semibold ">
              {data.author}
            </h2>
            <div className="text-center text-yellow-400">
              <p>
                {data.width} X{data.height}
              </p>
            </div>
            <div className="flex justify-center items-center mt-10 ">
              <button className="px-6 py-2 rounded bg-blue-500 w-full font-semibold">
                Download
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Card;
