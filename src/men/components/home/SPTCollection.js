import React from 'react'
import { Link,useParams } from 'react-router-dom'
import { products } from '../../../data/arrays'

const SPTCollection = () => {
const {type} = useParams();
const ethnicProducts = products.filter((item) => item.category === 'SPT')
  return (
   <div className='collectionContainer'>
    <hr/>
      <div className='collectionHeadingTag'>
        <h3 className='text-center'>SPT PRINTERS</h3>
        <Link className='text-center'>Featured Products </Link>
      </div>
      <div className='collectionImages'>
        {ethnicProducts.slice(0,4).map((x, index) => (
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
      <div className="viewAllButton">
        <Link to={'/collections/SPT'}>View All</Link>
      </div>
    </div>
  )
}

export default SPTCollection
