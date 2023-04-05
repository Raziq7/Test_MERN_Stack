import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Link,
  Paper,
  TextField,
  Typography,
} from '@mui/material'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink, useNavigate } from 'react-router-dom'

import { styled } from '@mui/material/styles'
import FormGroup from '@mui/material/FormGroup'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch, { SwitchProps } from '@mui/material/Switch'
import Stack from '@mui/material/Stack'
import { userRegisterAction } from '../../action/userAction'

let isUserExist

function Register() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [admin, setAdmin] = useState(false)
  const [errors, setErrors] = useState({})

  const { register, loading, error } = useSelector((state) => {
    return state.userRegister
  })

  useEffect(() => {
    isUserExist = localStorage.getItem('loginInfo')
      ? JSON.parse(localStorage.getItem('loginInfo'))
      : null
    if (isUserExist) {
      navigate('/')
    } else {
      navigate('/register')
    }
  }, [register, isUserExist])

  const Android12Switch = styled(Switch)(({ theme }) => ({
    padding: 8,
    '& .MuiSwitch-track': {
      borderRadius: 22 / 2,
      '&:before, &:after': {
        content: '""',
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        width: 16,
        height: 16,
      },
      '&:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/></svg>')`,
        left: 12,
      },
      '&:after': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="16" width="16" viewBox="0 0 24 24"><path fill="${encodeURIComponent(
          theme.palette.getContrastText(theme.palette.primary.main),
        )}" d="M19,13H5V11H19V13Z" /></svg>')`,
        right: 12,
      },
    },
    '& .MuiSwitch-thumb': {
      boxShadow: 'none',
      width: 16,
      height: 16,
      margin: 2,
    },
  }))

  const handleSubmit = (e) => {
    e.preventDefault()

    let errors = {}

    if (!email) {
      errors.email = 'Email is required'
    }

    if (!password) {
      errors.password = 'Password is required'
    }

    if (!confirmPassword) {
      errors.confirmPassword = 'Confirm Password is required'
    }

    if (password !== confirmPassword) {
      errors.confirmPassword = 'Passwords do not match'
    }

    if (Object.keys(errors).length > 0) {
      setErrors(errors)
    } else {
      dispatch(userRegisterAction(email, password, confirmPassword, admin))
    }
  }

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
              Register
            </Typography>

            <p style={{ color: 'red' }}>{error}</p>

            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
              <TextField
                fullWidth
                label="Email"
                margin="normal"
                variant="outlined"
                sx={{ mb: 2 }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={errors.email ? true : false}
                helperText={errors.email}
              />
              <TextField
                fullWidth
                label="Password"
                margin="normal"
                variant="outlined"
                type="password"
                sx={{ mb: 2 }}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                error={errors.password ? true : false}
                helperText={errors.password}
              />
              <TextField
                fullWidth
                label="Confirm Password"
                margin="normal"
                variant="outlined"
                type="password"
                sx={{ mb: 2 }}
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                error={errors.confirmPassword ? true : false}
                helperText={errors.confirmPassword}
              />
              <FormControlLabel
                control={<Android12Switch />}
                label="Admin"
                value="checkedA"
                onChange={(e) => {
                  if (e.target.checked) {
                    setAdmin(true)
                  } else {
                    setAdmin(false)
                    console.log('Switch is OFF')
                  }
                }}
              />
              <Button
                variant="contained"
                color="primary"
                type="submit"
                fullWidth
                sx={{ mt: 2 }}
              >
                Register
              </Button>

              <Typography variant="body2" align="center" sx={{ mt: 2 }}>
                Already have an account?{' '}
                <Link component={RouterLink} to="/login">
                  Login
                </Link>
              </Typography>
            </form>
          </Paper>
        </Grid>
      )}
    </Grid>
  )
}

export default Register
