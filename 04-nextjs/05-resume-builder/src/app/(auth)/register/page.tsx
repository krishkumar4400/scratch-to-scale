"use client";

import Link from "next/link";
import { useState, type SubmitEvent } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleSubmit = (e: SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();

    const formData = {
      name,
      email,
      phone,
      password,
      role,
    };

    console.log(formData);
    // Connect your registration API here.
  };

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 px-4 py-8">
      <div className="w-full max-w-md rounded-xl bg-black p-8 shadow-md">
        <h1 className="mb-2 text-center text-2xl font-bold text-gray-200">
          Create an account
        </h1>

        <p className="mb-6 text-center text-sm text-gray-500">
          Enter your details to get started.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label
              htmlFor="name"
              className="mb-1.5 block text-sm font-medium text-gray-300"
            >
              Full name
            </label>
            <input
              id="name"
              type="text"
              autoComplete="name"
              placeholder="Your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="mb-1.5 block text-sm font-medium text-gray-300"
            >
              Email
            </label>
            <input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="mb-1.5 block text-sm font-medium text-gray-300"
            >
              Phone number
            </label>
            <input
              id="phone"
              type="tel"
              autoComplete="tel"
              placeholder="Your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="password"
              className="mb-1.5 block text-sm font-medium text-gray-300"
            >
              Password
            </label>
            <input
              id="password"
              type="password"
              autoComplete="new-password"
              placeholder="Create a password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              minLength={8}
              className="w-full rounded-lg border border-gray-300 px-3 py-2.5 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div>
            <label
              htmlFor="role"
              className="mb-1.5 block text-sm font-medium text-gray-300"
            >
              Role (optional)
            </label>
            <select
              id="role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="w-full rounded-lg border border-gray-300 bg-black px-3 py-2.5 outline-none focus:border-gray-500 focus:ring-2 focus:ring-gray-100"
            >
              <option value="user">User</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <button
            type="submit"
            className="w-full rounded-lg bg-blue-600 px-4 py-2.5 font-medium text-white transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Create account
          </button>
        </form>
        <div className="flex items-center justify-center w-full py-3 ">
          <p className="text-gray-400 font-light">
            Don`t have an account ?{" "}
            <Link className="text-blue-400" href={"/login"}>
              login
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
