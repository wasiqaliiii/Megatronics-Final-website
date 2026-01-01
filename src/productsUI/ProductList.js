import React from 'react'
import { Link, useParams } from 'react-router-dom'

const ProductList = ({ filteredProducts }) => {
  const { type} = useParams()
  return (
    <>
      <div className='productListImages'>
        {filteredProducts.map((x, index) => (
          <div className='productImageContainer ' key={index}>
            <Link to={`/collection/${type}/${x.id}`}>
              <div className='productImage'>
                <img className='main-image' src={x.images[0]} alt='' />
                <img className='hover-image' src={x.images[1]} alt='' />
              </div>
            </Link>
            <div className='productBody'>
              <div className='bodyHeading'>
                <h3>{x.title}</h3>
              </div>
              <div className='productPrice'>
                <p>{x.subDesc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export default ProductList
