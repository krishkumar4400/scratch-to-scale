"use client";

import { useParams, usePathname } from "next/navigation"

const page = () => {
    const params = useParams()
    console.log(params.slug);
    console.log(params);

        // use pathname hook
        const pathname = usePathname();
  console.log("pathname = ", pathname); // pathname =  /shop/111
  return (
    <div>
      
    </div>
  )
}

export default page
