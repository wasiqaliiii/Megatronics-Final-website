import React from 'react'
import MensEthic from './MensEthic'
import './index.css'
import Categories from './Categories'
import EthicCollection from './EthicCollection'
import ShirtsCollection from './ShirtsCollection'
import TShirtsCollection from './TShirtsCollection'
import CategoriesSecond from './CategoriesSecond'
import SPTCollection from './SPTCollection'

const HomeComp = () => {
  return (
    <>
      <MensEthic />
      <Categories />
      <EthicCollection />
      <TShirtsCollection />
      <ShirtsCollection />
      <SPTCollection/>
      <CategoriesSecond/>
    </>
  )
}

export default HomeComp