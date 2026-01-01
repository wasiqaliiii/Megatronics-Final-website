import React from 'react'
import './index.css'
import { products } from './../data/arrays'
import NavbarComp from '../Global/navbar'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/features/cartSlice'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const SingleProductComp = () => {
  const { id } = useParams()
  const singleProd = products.find((item) => item.id === Number(id))
  const dispatch = useDispatch()

  const addToCartFunc = (product) => {
    const newUpdatedProduct = { ...product, quantity: 1 }
    dispatch(addToCart(newUpdatedProduct))
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true
  }

  return (
    <>
      <NavbarComp />
      <div className="about-banner">
        <div className="banner-overlay">
          <img
            src="https://megatronics.com.pk/mega/wp-content/uploads/2023/08/bg-printers.jpg"
            alt=""
          />
        </div>
      </div>

      <div className='singleProdContainer'>
        {/* Image Slider */}
        <div className='singleProductImage'>
          <Slider {...settings}>
            {singleProd.images.map((image, index) => (
              <div key={index} className='sliderImage'>
                <img src={image} alt={`Product ${index}`} />
              </div>
            ))}
          </Slider>
        </div>

        {/* Product Info */}
        <div className='singleProductBody'>
          <div className='singleProdTitle'>
            <h1>{singleProd.title}</h1>
          </div>
          <div className='singleProdColor'>
            <p>
              <b>{singleProd.description}</b><br/>
              <b>{singleProd.subDesc}</b><br/><br/>
              {singleProd.desc2}<br/><br/>
              {singleProd.desc3}<br/><br/>
              {singleProd.desc4}
            </p>
          </div>
          <div className='addToCartButton'>
            <button onClick={() => addToCartFunc(singleProd)}>Add to cart</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default SingleProductComp
