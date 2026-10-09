import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import { UserRound, Mail, LogOut, ShoppingBag } from "lucide-react";
import { AuthContext } from "../context/AuthContext.jsx";
import { toast } from "react-toastify";

const Home = () => {
  const navigate = useNavigate();

  const { loggedInUser, setLoggedInUser } = useContext(AuthContext);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setLoggedInUser(null);
    toast.info("You are logged out");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      {/* Navbar */}
      <nav className="border-b border-gray-200/70 bg-white/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
              <ShoppingBag size={22} />
            </div>

            <span className="text-xl font-bold text-gray-900">
              Shop<span className="text-indigo-600">Ease</span>
            </span>
          </Link>

          <button
            onClick={handleLogout}
            className="flex items-center cursor-pointer gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 transition hover:border-red-200 hover:bg-red-50 hover:text-red-600"
          >
            <LogOut size={17} />
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 py-12">
        {/* Welcome Section */}
        <section className="mb-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-indigo-600">
            Your Dashboard
          </p>

          <h1 className="mt-3 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            Hey, {loggedInUser.name} 👋
          </h1>

          <p className="mt-3 text-gray-500">
            Welcome back! Manage your account and explore our collection.
          </p>
        </section>

        {/* Profile Card */}
        <section className="max-w-2xl rounded-3xl border border-white bg-white/90 p-6 shadow-lg shadow-indigo-100/50 sm:p-8">
          <div className="flex items-center gap-4 border-b border-gray-100 pb-6">
            <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600">
              <UserRound size={32} />
            </div>

            <div>
              <h2 className="text-xl font-bold text-gray-900">
                {loggedInUser.name}
              </h2>

              <p className="mt-1 text-sm text-gray-500">Customer Account</p>
            </div>
          </div>

          <div className="mt-6">
            <p className="mb-4 text-sm font-semibold text-gray-700">
              Account Information
            </p>

            <div className="flex items-center gap-4 rounded-xl bg-gray-50 p-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-indigo-600 shadow-sm">
                <Mail size={20} />
              </div>

              <div className="min-w-0">
                <p className="text-xs text-gray-500">Email Address</p>
                <p className="mt-1 break-all text-sm font-medium text-gray-900">
                  {loggedInUser.email}
                </p>
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link
              to="/products"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-indigo-600 px-5 py-3.5 text-sm font-semibold text-white transition hover:bg-indigo-700 active:scale-[0.98]"
            >
              <ShoppingBag size={18} />
              Explore Products
            </Link>

            <button
              onClick={handleLogout}
              className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-gray-200 px-5 py-3.5 text-sm font-semibold text-gray-700 transition hover:bg-gray-50"
            >
              <LogOut size={18} />
              Sign Out
            </button>
          </div>
        </section>

        {/* Footer */}
        <p className="mt-10 text-center text-xs text-gray-400">
          ShopEase · Simple shopping, better experiences.
        </p>
      </main>
    </div>
  );
};

export default Home;
