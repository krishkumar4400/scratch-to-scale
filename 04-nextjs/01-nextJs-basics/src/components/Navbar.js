import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex text-blue-600 justify-center items-center gap-10">
      <Link href={"/home"}>Home</Link>
      <Link href={"/about"}>About</Link>
      <Link href={"/contact"}>Contact</Link>
      <Link href={"/users"}>Users</Link>
      <Link href={"/video"}>Video</Link>
    </div>
  );
};

export default Navbar;
