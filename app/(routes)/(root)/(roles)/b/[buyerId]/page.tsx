import React from 'react'

const BuyerPage = ({ params }: { params: { buyerId: string } }) => {
  return (
    <div>BuyerId: {params.buyerId}</div>
  )
}

export default BuyerPage