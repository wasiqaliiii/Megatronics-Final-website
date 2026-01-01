import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'
import Header from '../Global/navbar/Header'
import Footer from '../Global/Footer/Footer'
import MainComponent from '../Global/MainComponent'
import Home from '../Global/Home'
import ProductComp from '../productsUI'
import SingleProductComp from '../singleProductPage'
import { useSelector } from 'react-redux'
import Landing from '../admin/Landing'
import AdProdList from '../admin/AdProdList'
import AddProd from '../admin/AddProd'
import EditProd from '../admin/EditProd'
import Services from '../Services/Pages/Services'
import ContactUs from '../Contact Us/Pages/ContactUs'
import AboutUs from '../About us/pages/AboutUs'

const Routing = () => {
  const fadeActive = useSelector((store) => store.bodyReducer)

  const location = useLocation()
  const dashboardPath = location.pathname === '/dashboard'
  const dashboardPath1 = location.pathname === '/dashboard/products'
  const dashboardPath2 = location.pathname === '/dashboard/products/add-product'
  const dashboardPath3 = location.pathname === '/dashboard/products/edit-product'
  return ( 
    <>
      <div className={`${fadeActive && 'fade-in'}`}>
        {!dashboardPath  && !dashboardPath1 && !dashboardPath2 && !dashboardPath3 && <Header />}
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path='/contactUs' element ={<ContactUs/>} />
        <Route path='/aboutUs' element ={<AboutUs/>} />
        <Route path='/:collection' element={<MainComponent />} />
        <Route path='/:collection/:type' element={<ProductComp />} />
        <Route path='/:collection/:type/:id' element={<SingleProductComp />} />
        <Route path='/dashboard' element={<Landing />} />
        <Route path='/dashboard/products' element={<AdProdList />} />
        <Route path='/dashboard/products/add-product' element={<AddProd />} />
        <Route path='/dashboard/products/edit-product' element={<EditProd />} />
      </Routes>
      {!dashboardPath  && !dashboardPath1 && !dashboardPath2 && !dashboardPath3 && <Footer />}

    </>
  )
}

export default Routing
