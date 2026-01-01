import React from 'react'
import { Link } from 'react-router-dom'
import NavbarComp from './navbar'
import Slider from "react-slick";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./home.css"
const images = [
  "https://megatronics.com.pk/mega/wp-content/uploads/2023/08/z4700-printer-banner.jpg",
  "https://megatronics.com.pk/mega/wp-content/uploads/2023/08/thermal-printer-slider.jpg",
  "https://megatronics.com.pk/mega/wp-content/uploads/2021/12/egg-printer-banner.jpg",
];
const Home = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1400, // Smooth transition speed
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
    cssEase: "ease-in-out",
    scrollback: false,
  };
  const navigate = useNavigate();
  return (
    <>
      <NavbarComp />
      <div className='homeContainer'>
      <motion.div
          className="menCategoryCarousel cube-slider"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <Slider {...settings}>
            {images.map((img, index) => (
              <div key={index} className="carousel-slide">
                <Link to={"/men"}>
                  <motion.img
                    src={img}
                    alt={`Slide ${index + 1}`}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    className="carousel-image"
                  />
                </Link>
              </div>
            ))}
          </Slider>
        </motion.div>
        <div className="about-container">
  <img 
    src="https://megatronics.com.pk/mega/wp-content/uploads/2023/08/main-banner-768x432.jpg" 
    alt="Megatronics Engineering"
    className="about-image"
  />
  <div className="about-details">
    <div className="about-item">
      <h2>Megatronics Engineering</h2>
      <h4>Supplier of Industrial Machines & Equipment</h4>
      <p>MEGATRONICS ENGINEERING was established in October 2002 with the AIM to “Provide better technology and services at the door step of the local industry and as well as neighboring countries like Afghanistan industrial Sectors”. We Megatronics Engineering is registered company in Government of Pakistan having Sales tax and National tax number since 2003. We the Megatronics Engineering are the professional supplier of industrial Machines Material & Equipment.</p>
      <button className="btn" onClick={() => navigate('/aboutUS')}>
        Read More
      </button>
    </div>
  </div>
</div>


            <div className='ctg'>
         <div className='categoryContainer'>
                <div className='ethnicImg'>
                  <Link to={'/collection/inkjet'}>
                  <img className='main-image'
                    src='	https://megatronics.com.pk/mega/wp-content/uploads/2023/08/Z4700_1.jpg'
                    alt=''
                    />
                    
                    </Link>
                  <h3>Inkjet Printers</h3>
                </div>
                <div className='shirtsImg'>
                  <Link to={'/collection/laser'}>
                  <img
                    src='https://megatronics.com.pk/mega/wp-content/uploads/2023/08/Fiber_Laser_01-300x300.jpg'
                    alt=''
                    />
                    </Link>
                  <h3>Laser Printers</h3>
                </div>
                <div className='accessoriesImg'>
                  <Link to={'/collection/hand printer'}>
                  <img
                    src='https://megatronics.com.pk/mega/wp-content/uploads/2023/08/Z402_1-540x540.jpg'
                    alt=''
                    />
                    </Link>
                  <h3>DOD Printers</h3>
                </div>
                <div className='accessoriesImg'>
                  <Link to={'/collection/SPT'}>
                  <img
                    src='https://megatronics.com.pk/mega/wp-content/uploads/2023/08/SPT200_01.jpg'
                    alt=''
                    />
                    </Link>
                  <h3>SPT series</h3>
                </div>
            </div>
            </div>
            
      </div>
    </>
  )
}

export default Home
