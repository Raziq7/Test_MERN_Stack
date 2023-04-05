import React, { useEffect, useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Typography } from '@mui/material'
import ProductSlideCard from './ProductSlideCard'
import { Container } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { getProductAction } from '../action/ProductAction'

const responsiveSettings = [
  {
    breakpoint: 1200,
    settings: {
      slidesToShow: 4,
      slidesToScroll: 4,
      infinite: true,
    },
  },
  {
    breakpoint: 960,
    settings: {
      slidesToShow: 2,
      slidesToScroll: 2,
      infinite: true,
    },
  },
  {
    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
      initialSlide: 0,
    },
  },
  {
    breakpoint: 480,
    settings: {
      slidesToShow: 1,
      slidesToScroll: 1,
    },
  },
]

const ProductSlide = () => {
  const dispatch = useDispatch()
  const [products, setProducts] = useState([])

  const { setPro } = useSelector((state) => {
    return state.addProduct
  })

  const { findPro, loading, error } = useSelector((state) => {
    return state.getProduct
  })

  useEffect(() => {
    dispatch(getProductAction())
  }, [setPro])

  useEffect(() => {
    if (findPro) {
      setProducts(findPro)
    }
  }, [findPro])

  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: findPro && findPro.length <= 2 ? 1 : 3,
    slidesToScroll: 1,
    responsive: responsiveSettings,
  }

  return (
    <div>
      <Container>
        {/* <Typography variant="h6" gutterBottom>
         */}
        <Typography
          variant="h4"
          style={{
            fontFamily: 'Arial',
            fontSize: '32px',
            color: '#1976d2',
            textShadow: '2px 2px #ccc',
          }}
          gutterBottom
        >
          {' '}
          Products on the week
        </Typography>
        {products?.length !== 0 ? (
          <Slider {...settings}>
            {products.map((product) => (
              <div key={product._id}>
                <ProductSlideCard product={product} />
              </div>
            ))}
          </Slider>
        ) : (
          <h1>
            First login as admin and add product then only you can see products
          </h1>
        )}
      </Container>
    </div>
  )
}

export default ProductSlide
