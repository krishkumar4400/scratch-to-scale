import React from 'react'

const page = ({params}:any) => {
  return (
    <div>
      this is a product {params.id}
    </div>
  )
}

export default page
