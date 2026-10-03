import React from "react";

const Card = ({ allUsers, setAllUser }) => {
  const deleteUser = (index) => {
    const copyUser = [...allUsers];
    copyUser.splice(index, 1);
    setAllUser(copyUser);
  };
  const removeUser = (user) => {
    console.log(user);
    const filteredUsers = allUsers.filter((u) => {
      return u.name != user.name;
    });
    setAllUser(filteredUsers);
  };
  return (
    <div className="w-full">
      {allUsers.length > 0 && (
        <div className="flex gap-6 justify-center flex-wrap p-5 my-20">
          {allUsers.map((user, index) => {
            return (
              <div
                className="flex flex-col max-w-70 items-center justify-center border border-white py-4 px-6 "
                key={index}
              >
                <div className="w-30 h-30 my-3">
                  <img
                    className="rounded-full object-cover object-center"
                    src={user.url}
                    alt=""
                  />
                </div>
                <h1 className="text-center font-semibold mb-1 text-blue-400 text-xl">
                  {user.name}
                </h1>
                <h2 className=" mb-4 text-center text-sm text-white">
                  {user.role}
                </h2>
                <div>
                  <p className="text-xs font-light text-gray-400 text-center">
                    {user.description}
                  </p>
                </div>
                <div
                  // onClick={() => removeUser(user)}
                  onClick={() => {
                    deleteUser(index);
                  }}
                  className=" w-full mt-8"
                >
                  <button className="py-1.5 bg-red-600 outline-0 active:scale-95 duration-150 w-full text-white font-semibold">
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Card;

// Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia quidem placeat est inventore error dolorem illum ex libero velit fuga.

// https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D
