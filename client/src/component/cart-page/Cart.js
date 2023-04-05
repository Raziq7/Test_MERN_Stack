import {
  Container,
  Typography,
  Divider,
  Button,
  IconButton,
} from '@mui/material'
import { AddCircle, RemoveCircle } from '@mui/icons-material'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'

import {
  CreateCartListAction,
  getCartProductAction,
  decreasCartQtyAction,
  removeFromCartAction,
} from '../../action/cartAction'
import { useDispatch, useSelector } from 'react-redux'

const Cart = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const [cartPro, setCartPro] = useState([])

  const { getCartPro, loading, error } = useSelector((state) => {
    return state.getCartProduct
  })

  const { cartCreat } = useSelector((state) => {
    return state.CreateCartList
  })
  const { drecreasCartPro } = useSelector((state) => {
    return state.decreaseFromCartList
  })

  const { removeCartPro } = useSelector((state) => {
    return state.removeFromCart
  })
  console.log(cartPro.length, 'cartProcartPro')
  const onAdd = (id) => {
    dispatch(CreateCartListAction(id))
    // navigate('/cart')
  }

  const onRemoveFromCart = (id) => {
    dispatch(removeFromCartAction(id))
  }

  const onQtyDecrease = (id) => {
    dispatch(decreasCartQtyAction(id))
    // navigate('/cart')
  }

  let isUserExist = localStorage.getItem('loginInfo')
    ? JSON.parse(localStorage.getItem('loginInfo'))
    : null

  useEffect(() => {
    if (!isUserExist) {
      navigate('/login')
    }
  }, [])

  useEffect(() => {
    dispatch(getCartProductAction())
  }, [cartCreat, drecreasCartPro, removeCartPro])

  useEffect(() => {
    if (getCartPro) {
      setCartPro(getCartPro)
    }
  }, [getCartPro, cartCreat, drecreasCartPro, removeCartPro])

useEffect(()=>{
  if(removeCartPro){
    Swal.fire('Product removed from cart!', '', 'success')
  }
},[removeCartPro])

  return (
    <Container maxWidth="md" style={{ marginTop: 100 }}>
      <Typography variant="h4" style={{ marginTop: 20, marginBottom: 20 }}>
        Shopping Cart
      </Typography>
      <Divider style={{ marginBottom: 20 }} />

      {/* Cart items section */}
      <Typography variant="h6" style={{ marginBottom: 10 }}>
        Your Items:
      </Typography>
      {/* Replace with actual cart items */}
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        {cartPro ? (
          cartPro.map((data) => {
            return (
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: 10,
                }}
              >
                <img
                  src={data.image}
                  alt="Shoe 1"
                  style={{ width: 100, marginRight: 20 }}
                />
                <div style={{ flexGrow: 1 }}>
                  <Typography
                    variant="body1"
                    style={{ marginBottom: 5, textAlign: 'center' }}
                  >
                    {data.title}
                  </Typography>
                  <Typography variant="body1" style={{ marginBottom: 5 }}>
                    ₹{data.price}
                  </Typography>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <IconButton>
                      <RemoveCircle onClick={() => onQtyDecrease(data._id)} />
                    </IconButton>
                    <Typography variant="body1" style={{ margin: '0px 10px' }}>
                      {data.qty}
                    </Typography>
                    <IconButton>
                      <AddCircle onClick={() => onAdd(data._id)} />
                    </IconButton>
                    <Button
                      variant="outlined"
                      color="secondary"
                      style={{ marginLeft: 'auto' }}
                      onClick={() => {
                        onRemoveFromCart(data._id)
                      }}
                    >
                      Remove
                    </Button>
                  </div>
                </div>
              </div>
            )
          })
        ) : (
          <h1>{error}</h1>
        )}
      </div>
      {/* End of cart items section */}
      {cartPro && cartPro?.length == 0 ? (
        <h1 style={{ textAlign: 'center' }}>Cart is Empty</h1>
      ) : (
        <>
          <Divider style={{ marginBottom: 20 }} />

          {/* Order summary section */}
          <Typography variant="h6" style={{ marginBottom: 10 }}>
            Order Summary:
          </Typography>
          <Typography variant="body1" style={{ marginBottom: 10 }}>
            Subtotal:
            {cartPro
              .reduce((accumulator, current) => {
                return accumulator + current.price * current.qty
              }, 0)
              .toFixed(2)}
          </Typography>
          <Typography variant="body1" style={{ marginBottom: 10 }}>
            Shipping: Free
          </Typography>
          <Typography variant="h6" style={{ marginBottom: 10 }}>
            Total:{' '}
            {cartPro
              .reduce((accumulator, current) => {
                return accumulator + current.price * current.qty
              }, 0)
              .toFixed(2)}
          </Typography>
        </>
      )}

      {/* End of order summary section */}
    </Container>
  )
}

export default Cart
