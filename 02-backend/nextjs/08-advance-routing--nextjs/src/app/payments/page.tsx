import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1> payments page</h1>
      <Link href={'/payments'}>Click here</Link>
    </div>
  )
}

export default page
