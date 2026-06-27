
"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const SideBar = () => {
    const navItems = [
        {name: "Dashboard", href: "/shop/dashboard"},
        {name: "Orders", href: "/shop/orders"},
        {name: "Products", href: "/shop/products"},
        {name: "Settings", href: "/shop/settings"},
    ]

    const pathname = usePathname();
  return (
    <div className="bg-blue-300 h-screen w-lg">
      <h2>
        Shop Panel
      </h2>

      <nav className="flex flex-col gap-4 pt-12">
        {
            navItems.map((item) => {
                return (
                    <Link key={item.name} href={item.href} className={`hover:bg-blue-600 text-white ${(pathname === item.href) && "bg-blue-600" }`} >{item.name}</Link>
                )
            })
        }
      </nav>
    </div>
  )
}

export default SideBar
