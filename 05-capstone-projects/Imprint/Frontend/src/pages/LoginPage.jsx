import { useContext, useState } from "react";
import AuthContext from "../context/AuthContext.jsx";

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [bio, setBio] = useState("");
  const [togglePage, setTogglePage] = useState(
    localStorage.getItem("page") || "login",
  );

  const data = useContext(AuthContext);
  console.log(data);
  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      //
    } catch (error) {
      console.error(error);
    }
  };

  const toggle = () => {
    if (togglePage === "login") {
      setTogglePage("signup");
      localStorage.setItem("page", "signup");
    } else {
      setTogglePage("login");
      localStorage.setItem("page", "login");
    }
  };

  return (
    <div className="h-screen w-full flex items-center justify-center bg-slate-950 text-white p-5">
      <div
        className={`border relative ${togglePage === "signup" ? "px-12 py-10" : "px-12 py-14"} rounded`}
      >
        <h1 className="text-center text-3xl font-semibold pb-6">
          {togglePage === "signup" ? "Signup" : "Login"}
        </h1>
        <form onSubmit={submitHandler} className="text-sm">
          {togglePage === "signup" && (
            <div className="border rounded pl-6 pr-9 py-1.5 mb-4">
              <input
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="outline-none border-none"
                type="text"
                placeholder="Enter your username"
              />
            </div>
          )}
          <div className="border rounded pl-6 pr-9 py-1.5 mb-4">
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="outline-none border-none"
              type="email"
              placeholder="Enter your Email"
            />
          </div>
          <div className="border rounded pl-6 pr-9 py-1.5 mb-4">
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="outline-none border-none"
              type="password"
              placeholder="Enter your Password"
            />
          </div>

          {togglePage === "signup" && (
            <>
              <div className="border rounded pl-6 pr-9 py-1.5 mb-4">
                <input
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="outline-none border-none"
                  type="text"
                  placeholder="Enter your Bio"
                />
              </div>

              <div className="border rounded mb-4">
                <label className=" block pl-6 pr-9 py-1.5 cursor-pointer">
                  Upload File
                  <input type="file" className="hidden" />
                </label>
              </div>
            </>
          )}

          <div className="border rounded py-1.5 text-center mb-6">
            <button className="text-center" type="submit">
              {togglePage === "Login" ? "Signup" : "Login"}
            </button>
          </div>
          <div className="mb-6 px-6 absolute text-center bottom-0 select-none ">
            <p className="text-xs font-light text-gray-400">
              Already have an account?{" "}
              <span
                onClick={toggle}
                className="text-blue-400 cursor-pointer hover:underline"
              >
                {togglePage === "login" ? "SignUp" : "Login"}
              </span>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
