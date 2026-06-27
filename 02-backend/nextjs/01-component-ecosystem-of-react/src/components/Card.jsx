import Button from "./Button";

function Card(props) {
    console.log(props.description);
  return (
    <div className="max-w-sm max-sm:w-full overflow-hidden bg-white text-black rounded-xl flex flex-col items-center justify-center">
      <img
        className="w-full pb-4"
        src={props.imageUrl}
        alt=""
      />
      <div className="flex justify-center flex-col items-center px-4">
        <div>
          <p className="font-medium  text-2xl pb-4">{props.title}</p>
        </div>
        <div className="pb-4">
          <p className="text-sm font-light text-gray-800 text-center">{props.description}
          </p>
        </div>
        <div className="pb-6">
            <Button/>
        </div>
      </div>
    </div>
  );
}

export default Card;
