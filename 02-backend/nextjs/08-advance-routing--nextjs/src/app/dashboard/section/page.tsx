import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
          <h1>Section Page</h1>
          <Link href={'/settings'}>Go to settings</Link>
          <hr />
          <Link href={"/admin"}>Go To Admin</Link>
    </div>
  )
}

export default page
