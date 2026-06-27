import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <div>
      <h1>Dashboard page</h1>
      <Link href="/dashboard/reports">View Reports</Link>
      <Link href="/payments">View payments</Link>

    </div>
  )
}

export default page
