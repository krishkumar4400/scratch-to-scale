import Link from "next/link";

const AuthNav = () => {
  return (
    <div className="text-xl text-blue-600 m-4">
      <Link href={"/auth-layout/login"}>Login</Link>
      <Link href={"/auth-layout/register"}>Register</Link>
    </div>
  );
};

export default AuthNav;
