import React from 'react'
import { Link } from 'react-router-dom'
const Categories = () => {
  return (
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
  )
}

export default Categories
