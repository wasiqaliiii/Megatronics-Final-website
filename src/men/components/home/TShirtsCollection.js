import React from 'react'
import { Link,useParams } from 'react-router-dom'
import { products } from '../../../data/arrays'
const TShirtsCollection = () => {
  const { type} = useParams();
  const ethnicProducts = products.filter((item) => item.category === 'laser')
  return (
    <div className='collectionContainer mt-5'>
    <hr/>
      <div className='collectionHeadingTag'>
        <h3 className='text-center'>OUR LASER PRINTERS</h3>
        <Link className='text-center'>Discover the collection</Link>
      </div>
      <div className='collectionImages'>

        {ethnicProducts.slice(0,3).map((x, index) => (
          <div className='productImageContainer' key={index}>
            <div className='productImage'>
            <Link to={`/collection/${type}/${x.id}`}>
              <img className='main-image' src={x.images[0]} alt='' />
              <img className='hover-image' src={x.images[1]} alt='' />
              </Link>
            </div>
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
      <div className='viewAllButton'>
        <Link to={'/collection/laser'}>View All</Link>
      </div>
    </div>
  )
}

export default TShirtsCollection
