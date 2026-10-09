import { useState } from "react";
import { Link } from "react-router";
import { Mail, LockKeyhole, Eye, EyeOff, ArrowRight } from "lucide-react";
import { useForm } from "react-hook-form";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isValid },
  } = useForm();

  const formSubmit = (data) => {
    console.log(data);

    reset();
  };
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 py-10">
      <div className="w-full max-w-md rounded-2xl border border-gray-100 bg-white p-8 shadow-lg sm:p-10">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-indigo-600 text-white">
            <LockKeyhole size={28} />
          </div>

          <h1 className="text-3xl font-bold tracking-tight text-gray-900">
            Welcome back
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Sign in to continue to your account
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleSubmit(formSubmit)} className=" space-y-5">
          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Email address
            </label>

            <div className="relative">
              <Mail
                size={19}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                {...register("email", {
                  required: "Email is required",
                })}
                id="email"
                type="email"
                placeholder="you@example.com"
                required
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
              {errors.email && (
                <p className="text-red-600 text-center text-sm font-light">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="mb-2 block text-sm font-medium text-gray-700"
            >
              Password
            </label>

            <div className="relative">
              <LockKeyhole
                size={19}
                className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-400"
              />

              <input
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password must be atleast 6 characters long",
                  },
                })}
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="Create a password"
                autoComplete="new-password"
                className="w-full rounded-xl border border-gray-200 bg-white py-3 pl-11 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10"
              />
              {errors.password && (
                <p className="text-red-600 text-center text-sm font-light">
                  {errors.password.message}
                </p>
              )}
              <button
                type="button"
                onClick={() => setShowPassword((prev) => !prev)}
                aria-label={showPassword ? "Hide password" : "Show password"}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-400 transition hover:text-gray-700"
              >
                {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
              </button>
            </div>
          </div>

          {/* Submit */}
          <button
            disabled={!isValid}
            type="submit"
            className={`flex w-full items-center justify-center gap-2 rounded-xl ${isValid ? "bg-indigo-600 hover:bg-indigo-700 active:scale-[0.98]" : "bg-indigo-400"}  py-3.5 text-sm font-semibold text-white shadow-md shadow-indigo-600/20 transition  `}
          >
            Sign in
            <ArrowRight size={18} />
          </button>
        </form>

        {/* Signup Navigation */}
        <p className="mt-8 text-center text-sm text-gray-500">
          Don't have an account?{" "}
          <Link
            to="/register"
            className="font-semibold text-indigo-600 transition hover:text-indigo-700"
          >
            Create account
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
