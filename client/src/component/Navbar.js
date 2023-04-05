import {
  alpha,
  AppBar,
  Badge,
  Box,
  Button,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
  Menu,
  MenuItem,
} from '@mui/material'
import AccountCircleIcon from '@mui/icons-material/AccountCircle'
import { Link, Link as RouterLink, useNavigate } from 'react-router-dom'
import {
  ShoppingCart,
  FavoriteBorder,
  AccountCircle,
} from '@mui/icons-material'
import { Container } from '@mui/system'
import SearchIcon from '@mui/icons-material/Search'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { getCartProductAction } from '../action/cartAction'

function Navbar() {
  const isTopNavbar = true // set to false to display the bottom navbar
  let isUserExist
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [userTrue, setUserTrue] = useState(false)
  const [cartLength, setCartLength] = useState(0)

  const { login } = useSelector((state) => {
    return state.userLogin
  })

  const { register, loading, error } = useSelector((state) => {
    return state.userRegister
  })
  const { getCartPro } = useSelector((state) => {
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

  useEffect(() => {
    isUserExist = localStorage.getItem('loginInfo')
      ? JSON.parse(localStorage.getItem('loginInfo'))
      : null
    if (isUserExist) {
      setUserTrue(true)
    }
  }, [login, register, userTrue, removeCartPro, isUserExist])

  useEffect(() => {
    isUserExist = localStorage.getItem('loginInfo')
      ? JSON.parse(localStorage.getItem('loginInfo'))
      : null
    dispatch(getCartProductAction())
  }, [cartCreat, drecreasCartPro, removeCartPro, isUserExist, login, register])

  isUserExist = localStorage.getItem('loginInfo')
      ? JSON.parse(localStorage.getItem('loginInfo'))
      : null
  useEffect(() => {
    
    if (getCartPro) {
      setCartLength(getCartPro?.length)
    }
  }, [
    getCartPro,
    cartCreat,
    drecreasCartPro,
    removeCartPro,
    isUserExist,
    login,
    register,
  ])

  // drop down
  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const addProductHandle = () => {
    setAnchorEl(null)
    navigate('/addprodut')
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

  //logoutClick
  const handleLogout = () => {
    localStorage.getItem('loginInfo')
      ? localStorage.removeItem('loginInfo')
      : localStorage.removeItem('loginInfo')
    navigate('/login')
  }

  return (
    <>
      {isTopNavbar ? (
        <AppBar
          position="fixed"
          sx={{ backgroundColor: '#1976d2', height: '35px' }}
        >
          <Container>
            <Toolbar
              sx={{
                justifyContent: 'space-between',
                height: '35px',
                minHeight: 'unset',
              }}
            >
              <Typography
                variant="subtitle1"
                component="div"
                sx={{
                  color: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  marginBottom: '18px',
                }}
              >
                <span>Contact us: +91 98555 12343 | info@example.com</span>
              </Typography>
            </Toolbar>
          </Container>
        </AppBar>
      ) : null}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <AppBar
          position="fixed"
          sx={{
            top: isTopNavbar ? '36px' : 0,
            backgroundColor: '#f5f5f5',
            height: '64px',
          }}
        >
          <Container>
            <Toolbar
              sx={{
                justifyContent: 'space-between',
                height: '64px',
                minHeight: 'unset',
              }}
            >
              {/* <div style={{ display: 'flex',justifyContent:"space-around" }}> */}
              <Link to="/">
                <img
                  src="https://imgs.search.brave.com/Vd-HlTioJNjL9aC6zSaLklsHTMKIK_QPf5r8yb-YP8c/rs:fit:689:362:1/g:ce/aHR0cHM6Ly9hc3Nl/dHMuc3RpY2twbmcu/Y29tL2ltYWdlcy82/MmU3ZDRiNjg2MmJl/YjUyZThiZjQ1ODAu/cG5n"
                  alt="Logo"
                  style={{
                    width: '126px',
                    height: 'auto',
                    marginRight: '16px',
                  }}
                />
              </Link>
              {/* <Button
                variant="text"
                sx={{
                  fontWeight: 600,
                  color: '#333',
                  minWidth: 0,
                  marginRight: '16px',
                }}
              >
                Products
              </Button> */}
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: 'auto',
                }}
              >
                <form justifyContent="center">
                  <InputBase
                    placeholder="Search here"
                    startAdornment={
                      <SearchIcon
                        sx={{ color: 'grey.500', marginRight: '8px' }}
                      />
                    }
                    sx={{
                      bgcolor: alpha('#fff', 0.15),
                      borderRadius: '8px',
                      paddingLeft: '12px',
                      paddingRight: '12px',
                      width: '200px',
                      height: '36px',
                      color: '#333',
                      '&::placeholder': {
                        color: '#333',
                        opacity: 0.7,
                      },
                    }}
                  />
                </form>
              </Box>

              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  marginLeft: 'auto',
                }}
              >
                <IconButton color="inherit" sx={{ mr: 1, color: 'black' }}>
                  <FavoriteBorder />
                </IconButton>

                <IconButton color="inherit" sx={{ mr: 1, color: 'black' }}>
                  <Link component={RouterLink} to={`/cart`}>
                    <Badge
                      badgeContent={cartLength && cartLength}
                      color="primary"
                    >
                      <ShoppingCart />
                    </Badge>
                  </Link>
                </IconButton>

                <IconButton color="inherit" sx={{ mr: 1, color: 'black' }}>
                  {userTrue ? (
                    <>
                      <Button onClick={handleMenuOpen}>
                        <AccountCircleIcon />
                      </Button>
                      <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClick={handleMenuClose}
                      >
                        {isUserExist && isUserExist.isAdmin ? (
                          <MenuItem onClick={addProductHandle}>
                            Add Product
                          </MenuItem>
                        ) : null}
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </Menu>
                    </>
                  ) : (
                    <Link component={RouterLink} to="/login">
                      <Button color="primary">Login</Button>
                    </Link>
                  )}
                </IconButton>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  )
}

export default Navbar
