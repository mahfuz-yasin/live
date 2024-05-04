import React, { useEffect, useState } from 'react'
import Product from '../Product/Product'
function Products() {


    const [products, setProducts] = useState([])

    useEffect(() => {
        fetch('Data.json')
        .then( res => res.json())
        .then(data => setProducts(data))
    })


  return (
    <div>
        {
            products.map((product) => <Product
            key={product.id}
            product = {product}
            ></Product>)
        }
    </div>
  )
}

export default Products