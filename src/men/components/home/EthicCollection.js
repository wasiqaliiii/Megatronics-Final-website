import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { products } from '../../../data/arrays'
const EthicCollection = ({ filteredProducts }) => {
    const { type} = useParams();
  const ethnicProducts = products.filter((item) => item.category === 'inkjet')
  return (
    <div className='collectionContainer'>
     <hr/>
      <div className='collectionHeadingTag'>
        <h3 className='text-center'>OUR INKJET PRINTERS</h3>
        <Link className='text-center'>Featured Products </Link>
      </div>
      <div className='collectionImages'>
        {ethnicProducts.slice(0,4).map((x, index) => (
          <div className='productImageContainer' key={index}>
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
              <div className='productSizes'>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="viewAllButton">
        <Link to={'/collection/inkjet'}>View All</Link>
      </div>
    </div>
  )
}

export default EthicCollection
