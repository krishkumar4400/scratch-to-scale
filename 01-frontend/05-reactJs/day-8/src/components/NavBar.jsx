const NavBar = (props) => {
  console.log(props);
  return (
    <div style={{ backgroundColor: props.color }} className="w-full mb-2">
      {
        <div className="flex items-center justify-between px-4 py-6 text-white">
          <h2 className="text-2xl ">{props.title}</h2>
          <div className="flex justify-center items-center gap-6">
            {props.links.map(function (link, idx) {
              return <h2 key={idx}> {link} </h2>;
            })}
          </div>

        </div>
      }
    </div>
  );
};

export default NavBar;
