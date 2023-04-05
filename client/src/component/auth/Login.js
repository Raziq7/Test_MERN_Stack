import { useEffect, useState } from 'react'

import { Link as RouterLink, useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import Box from '@mui/material/Box'

import { Button, Grid, Paper, TextField, Typography, Link } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { LoginAction } from '../../action/userAction'

let isUserExist

function Login() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState(false)
  const [passwordError, setPasswordError] = useState(false)

  const { login, loading, error } = useSelector((state) => {
    return state.userLogin
  })

  const handleSubmit = (event) => {
    event.preventDefault()
    if (email === '') {
      setEmailError(true)
    }
    if (password === '') {
      setPasswordError(true)
    }
    if (email !== '' && password !== '') {
      dispatch(LoginAction(email, password))
    }
  }

  const handleEmailChange = (event) => {
    setEmail(event.target.value)
    setEmailError(false)
  }

  const handlePasswordChange = (event) => {
    setPassword(event.target.value)
    setPasswordError(false)
  }

  useEffect(() => {
    isUserExist = localStorage.getItem('loginInfo')
      ? JSON.parse(localStorage.getItem('loginInfo'))
      : null
    if (isUserExist) {
      navigate('/')
    } else {
      navigate('/login')
    }
  }, [login, isUserExist])

  return (
    <Grid container justifyContent="center" alignItems="center" height="100vh">
      {loading ? (
        <Box sx={{ display: 'flex' }}>
          <CircularProgress />
        </Box>
      ) : (
        <Grid item xs={10} sm={6} md={4} lg={3}>
          <Paper sx={{ p: 4 }}>
            <Typography variant="h4" component="h1" align="center" gutterBottom>
              Login
            </Typography>
            <p style={{ color: 'red' }}>{error}</p>
            <form onSubmit={handleSubmit} noValidate autoComplete="off">
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                variant="outlined"
                value={email}
                onChange={handleEmailChange}
                error={emailError}
                helperText={emailError ? 'Please enter your email' : ''}
                sx={{ mb: 2 }}
                required
              />
              <TextField
                fullWidth
                label="Password"
                margin="normal"
                variant="outlined"
                type="password"
                value={password}
                onChange={handlePasswordChange}
                error={passwordError}
                helperText={passwordError ? 'Please enter your password' : ''}
                sx={{ mb: 2 }}
                required
              />

              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ mt: 2 }}
              >
                Login
              </Button>
              <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                I don't have an account{' '}
                <Link component={RouterLink} to="/register">
                  Sign up
                </Link>
              </Typography>
            </form>
          </Paper>
        </Grid>
      )}
    </Grid>
  )
}

export default Login
