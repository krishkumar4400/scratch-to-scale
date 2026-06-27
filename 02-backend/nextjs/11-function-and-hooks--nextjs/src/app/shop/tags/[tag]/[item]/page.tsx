"use client"

import { useParams, usePathname } from "next/navigation"


const page = () => {
  // use params hook
    const params = useParams();
    console.log(params);

    // use pathname hook
    const pathname = usePathname();
  console.log("pathname = ", pathname); // pathname =  /shop/tags/t1/i1
  return (
    <div>
      uhi
    </div>
  )
}

export default page
