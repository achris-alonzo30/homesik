import React from 'react'

const page = ({ params }: { params: { sellerId: string } }) => {
  return (
    <div>SellerId: {params.sellerId}</div>
  )
}

export default page