import React from 'react'
import BestProduct from '../component/BestProduct'
import Carousel from '../component/Carousel'
import ProductSlide from '../component/ProductSlide'
import Subscribe from '../component/subscribe/Subscribe'

function Home() {
  return (
    <>
      
      <Carousel />
      <BestProduct />
      <ProductSlide/>
      <Subscribe/>
     
    </>
  )
}

export default Home
