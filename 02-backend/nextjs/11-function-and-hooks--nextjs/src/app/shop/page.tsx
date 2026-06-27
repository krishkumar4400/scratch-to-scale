"use client"

import { useParams, usePathname } from "next/navigation"

const page = () => {
  const params = useParams();
  // use pathname hook
  const pathname = usePathname();
  console.log("pathname = ", pathname); // pathname =  /shop
  console.log(params);
  return (
    <div>
      <h2>Shop Page: {pathname}</h2>
    </div>
  )
}

export default page
