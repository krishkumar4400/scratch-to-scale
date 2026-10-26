import Link from "next/link";

const HomeNav = () => {
  return (
    <div>
      <Link href={"/home-layout/home"}>Home</Link>
      <Link href={"/home-layout/about"}>About</Link>
      <Link href={"/home-layout/contact"}>Contact</Link>
      <Link href={"/home-layout/products"}>Products</Link>
    </div>
  );
};

export default HomeNav;
