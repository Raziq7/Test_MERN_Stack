import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { Box, Button, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Swal from 'sweetalert2'

import { useNavigate } from 'react-router-dom'
import { CreateCartListAction } from '../action/cartAction'
import { useDispatch, useSelector } from 'react-redux'

function ProductSlideCard(props) {
  const { _id, image, title, price, rate } = props.product

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const { cartCreat } = useSelector((state) => {
    return state.CreateCartList
  })

  useEffect(() => {
    if (cartCreat) {
      Swal.fire('Good job!', 'You cart is created!', 'success')
    }
  }, [cartCreat])

  const onAdd = (id) => {
    dispatch(CreateCartListAction(id))
    // navigate('/cart')
  }

  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          borderRadius: '16px',
          padding: '16px',
          backgroundColor: 'white',
          width: '100%',
          height: '100%',
        }}
      >
        <img
          src={image}
          alt={title}
          style={{
            width: '120px',
            height: '120px',
            borderRadius: '8px',
            marginRight: '16px',
          }}
        />

        <Box
          sx={{ display: 'flex', flexDirection: 'column', flex: '1 1 auto' }}
        >
          <Typography
            variant="h6"
            component="h2"
            sx={{ fontWeight: 600, marginBottom: '8px' }}
          >
            {title}
          </Typography>

          <Typography
            variant="body1"
            component="p"
            sx={{ marginBottom: '8px' }}
          >
            ₹{price}
          </Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: '8px',
            }}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                style={{
                  color: star <= rate ? '#1976d2' : '#e4e5e9',
                  marginRight: '4px',
                  fontSize: '1.2rem',
                }}
              >
                &#9733;
              </span>
            ))}
          </Box>

          <Button onClick={() => onAdd(_id)} variant="contained" size="small">
            Add to Cart
          </Button>
        </Box>
      </Box>
    </Container>
  )
}

export default ProductSlideCard
