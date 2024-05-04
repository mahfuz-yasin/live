import React from 'react'

function Product({product}) {
    const {id, price, description} = product;
   
  return (
    <div>
        <p>{id}</p>
        <h2>price : {price}</h2>
        <p>Description : {description}</p>
    </div>
  )
}

export default Product