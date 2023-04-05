import { Button, Grid, Paper, TextField, Typography } from '@mui/material'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addProductAction } from '../action/ProductAction'
import { useNavigate } from 'react-router-dom'

function AddProduct() {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [title, setTitle] = useState('')
  const [price, setPrice] = useState()
  const [rating, setRating] = useState()
  const [image, setImage] = useState('')
  const [titleError, setTitleError] = useState(false)
  const [priceError, setPriceError] = useState(false)
  const [ratingError, setRatingError] = useState(false)
  const [imageError, setImageError] = useState(false)

  const handleTitleChange = (event) => {
    setTitle(event.target.value)
  }

  const handlePriceChange = (event) => {
    setPrice(event.target.value)
  }

  const handleRatingChange = (event) => {
    setRating(event.target.value)
  }

  const handleImageChange = (event) => {
    setImage(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (title && price && rating && image) {
      console.log('Product data:', { title, price, rating, image })
      dispatch(addProductAction(title, price, rating, image))
      navigate('/')
    } else {
      setTitleError(!title)
      setPriceError(!price)
      setRatingError(!rating)
      setImageError(!image)
    }
  }

  return (
    <Grid
      container
      justifyContent="center"
      alignItems="center"
      height="100vh"
      mt={8}
    >
      <Grid item xs={10} sm={6} md={4} lg={3}>
        <Paper sx={{ p: 4 }}>
          <Typography variant="h4" component="h1" align="center" gutterBottom>
            Add Product
          </Typography>

          <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Title"
              margin="normal"
              variant="outlined"
              value={title}
              onChange={handleTitleChange}
              error={titleError}
              helperText={titleError ? 'Title is required' : ''}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Price"
              margin="normal"
              variant="outlined"
              type="number"
              value={price}
              onChange={handlePriceChange}
              error={priceError}
              helperText={priceError ? 'Price is required' : ''}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Rating"
              margin="normal"
              variant="outlined"
              type="number"
              value={rating}
              onChange={handleRatingChange}
              error={ratingError}
              helperText={ratingError ? 'Rating is required' : ''}
              sx={{ mb: 2 }}
            />
            <TextField
              fullWidth
              label="Image URL"
              margin="normal"
              variant="outlined"
              value={image}
              onChange={handleImageChange}
              error={imageError}
              helperText={imageError ? 'Image URL is required' : ''}
              sx={{ mb: 2 }}
            />

            <Button
              variant="contained"
              color="primary"
              type="submit"
              fullWidth
              sx={{ mt: 2 }}
            >
              Add
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default AddProduct
