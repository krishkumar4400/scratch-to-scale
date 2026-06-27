import Link from "next/link";

export default async function Navigation() {
  return (
    <>
      <nav className="w-full">
        <div className="hidden sm:flex items-center justify-between w-full px-12 py-6 mb-3 border-b border-gray-400 shadow-sm bg-white ">
          <div>
            <Link
              href={"/"}
              className="text-2xl font-bold text-gray-600 cursor-pointer"
            >
              Logo
            </Link>
          </div>
          <div className=" hidden sm:flex items-center justify-center gap-4 text-sm text-gray-500 ">
            <Link
              href={"/pages/home"}
              className="cursor-pointer hover:text-gray-700 font-medium"
            >
              Home
            </Link>
            <Link
              href={"/pages/about"}
              className="cursor-pointer hover:text-gray-700 font-medium"
            >
              About
            </Link>
            <Link
              href="/pages/contact"
              className="cursor-pointer hover:text-gray-700 font-medium"
            >
              Contact
            </Link>
            <Link
              href="/pages/help"
              className="cursor-pointer hover:text-gray-700 font-medium"
            >
              Help
            </Link>
          </div>
        </div>

        <div className="flex sm:hidden items-center justify-between w-full px-12 py-6 mb-3 border-b border-gray-400 shadow-sm bg-white ">
          <div>
            <Link
              href={"/"}
              className="text-2xl font-bold text-gray-600 cursor-pointer"
            >
              Logo
            </Link>
          </div>
          <div>
            <div>
              <div>-</div>
              <div>-</div>
              <div>-</div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
