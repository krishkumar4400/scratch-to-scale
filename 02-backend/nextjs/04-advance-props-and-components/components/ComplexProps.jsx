import { useState } from "react";

function UserProfileCard({ user, theme, actions }) {
  const [message, setMessage] = useState("");
  return (
    <div className="flex items-center gap-4 w-full flex-wrap">
      <div
        className={`p-6 rounded-xl ${theme.backgroundColor} ${theme.textColor} min-w-sm `}
      >
        <div className="flex gap-4 items-center ">
          <div
            className={`p-4  rounded-full w-16 h-16 flex items-center justify-center ${theme.badgeBg}`}
          >
            {user.avatar}
          </div>
          <div>
            <h2 className={`text-lg font-semibold ${theme.textColor}`}>
              {user.name}
            </h2>
            <div>
              <p className="text-sm text-gray-600">{user.email}</p>
            </div>
          </div>
        </div>
        <div
          className={`flex items-center justify-center gap-3 ${theme.textColor} border-b mb-6 pb-2 border-gray-400`}
        >
          <span className={`px-4 py-1.5 rounded-full ${theme.badgeBg} `}>
            {user.role}
          </span>
          <span className={`px-4 py-1.5 rounded-full ${theme.badgeBg} `}>
            {user.status}
          </span>
        </div>
        {user.stats && (
          <div>
            <div className=" flex justify-between ">
              {Object.entries(user.stats).map(([key, value]) => (
                <div className="">
                  <div className="">
                    <div className="text-center">
                      <p className={`font-semibold text-lg ${theme.textColor}`}>
                        {key}
                      </p>
                      <span className="text-sm text-gray-600">{value}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full gap-4 flex items-center my-6">
              <button
                onClick={actions.primary.onClick}
                className={`w-1/2 ${actions.primary.className} py-2 px-6 rounded-lg`}
              >
                {actions.primary.label}
              </button>
              <button
                onClick={actions.secondary.onClick}
                className={`${actions.secondary.className} px-6 py-2 rounded-lg w-1/2`}
              >
                {actions.secondary.label}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const ComplexProps = () => {
  const users = [
    {
      user: {
        name: "Alice Johnson",
        email: "alice@example.com",
        avatar: "👩‍💼",
        role: "Admin",
        status: "Active",
        stats: {
          posts: 145,
          followers: 2834,
          following: 421,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-purple-100 to-blue-100",
        textColor: "text-gray-800",
        avatarBg: "bg-purple-300",
        badgeBg: "bg-purple-200",
        buttonBg: "bg-purple-600",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Alice's profile"),
          className: "bg-purple-500 text-white hover:bg-purple-600",
        },
        secondary: {
          label: "Message",
          onClick: () => setMessage("Opening message to Alice"),
          className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        },
      },
    },
    {
      user: {
        name: "Bob Smith",
        email: "bob@example.com",
        avatar: "👨‍💻",
        role: "Developer",
        status: "Online",
        stats: {
          projects: 28,
          commits: 1523,
          reviews: 89,
        },
      },
      theme: {
        backgroundColor: "bg-gradient-to-br from-green-100 to-teal-100",
        textColor: "text-gray-800",
        avatarBg: "bg-green-300",
        badgeBg: "bg-green-200",
        buttonBg: "bg-green-600",
      },
      actions: {
        primary: {
          label: "View Profile",
          onClick: () => setMessage("Viewing Bob's profile"),
          className: "bg-green-500 text-white hover:bg-green-600",
        },
        secondary: {
          label: "Collaborate",
          onClick: () => setMessage("Starting collaboration with Bob"),
          className: "bg-gray-200 text-gray-800 hover:bg-gray-300",
        },
      },
    },
  ];

  return (
    <div className="space-y-8 bg-white p-6 rounded-xl">
      <div className="">
        <h1 className="font-semibold text-2xl text-gray-800 pb-2 ">
          Complex/Nested Props
        </h1>
        <div className="pb-4">
          <p className="text-sm text-gray-600 ">
            Complex prop allow you to pass nested objects and functions,
            enabling sophisticated component configuration and interactions.
          </p>
        </div>
        <h3 className="text-slate-600 text-lg font-semibold">
          User Profile Cards(Nested User, Theme and actions)
        </h3>
        <div className="flex flex-wrap">
          {users.map((userData, index) => (
            <UserProfileCard key={index} {...userData} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ComplexProps;
