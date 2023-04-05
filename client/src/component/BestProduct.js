import { Container, Grid } from '@mui/material'
import ProductCard from './ProductCard'

const products = [
  {
    title: 'Product 1',
    price: 9.99,
    rating: 4.5,
    image:
      'https://imgs.search.brave.com/lUHh9DKEjgK4wo_Vev7-OtQupKB_t2K2-eLXbh4cQdc/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/Q0JLdVdfc0RjRWo0/UFFZVDJrTlNBSGFF/OCZwaWQ9QXBp',
  },
  {
    title: 'Product 2',
    price: 19.99,
    rating: 3.5,
    image:
      'https://imgs.search.brave.com/lUHh9DKEjgK4wo_Vev7-OtQupKB_t2K2-eLXbh4cQdc/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/Q0JLdVdfc0RjRWo0/UFFZVDJrTlNBSGFF/OCZwaWQ9QXBp',
  },
  {
    title: 'Product 3',
    price: 14.99,
    rating: 4.0,
    image:
      'https://imgs.search.brave.com/lUHh9DKEjgK4wo_Vev7-OtQupKB_t2K2-eLXbh4cQdc/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/Q0JLdVdfc0RjRWo0/UFFZVDJrTlNBSGFF/OCZwaWQ9QXBp',
  },
  {
    title: 'Product 4',
    price: 24.99,
    rating: 4.2,
    image:
      'https://imgs.search.brave.com/lUHh9DKEjgK4wo_Vev7-OtQupKB_t2K2-eLXbh4cQdc/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/Q0JLdVdfc0RjRWo0/UFFZVDJrTlNBSGFF/OCZwaWQ9QXBp',
  },
  {
    title: 'Product 5',
    price: 29.99,
    rating: 4.8,
    image:
      'https://imgs.search.brave.com/lUHh9DKEjgK4wo_Vev7-OtQupKB_t2K2-eLXbh4cQdc/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/Q0JLdVdfc0RjRWo0/UFFZVDJrTlNBSGFF/OCZwaWQ9QXBp',
  },
  {
    title: 'Product 6',
    price: 29.99,
    rating: 4.8,
    image:
      'https://imgs.search.brave.com/lUHh9DKEjgK4wo_Vev7-OtQupKB_t2K2-eLXbh4cQdc/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/Q0JLdVdfc0RjRWo0/UFFZVDJrTlNBSGFF/OCZwaWQ9QXBp',
  },
  {
    title: 'Product 7',
    price: 29.99,
    rating: 4.8,
    image:
      'https://imgs.search.brave.com/lUHh9DKEjgK4wo_Vev7-OtQupKB_t2K2-eLXbh4cQdc/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/Q0JLdVdfc0RjRWo0/UFFZVDJrTlNBSGFF/OCZwaWQ9QXBp',
  },
  {
    title: 'Product 8',
    price: 29.99,
    rating: 4.8,
    image:
      'https://imgs.search.brave.com/lUHh9DKEjgK4wo_Vev7-OtQupKB_t2K2-eLXbh4cQdc/rs:fit:711:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5M/Q0JLdVdfc0RjRWo0/UFFZVDJrTlNBSGFF/OCZwaWQ9QXBp',
  },
]

function BestProduct() {
  return (
    <Grid container spacing={2} style={{ backgroundColor: 'white' }}>
      {products.map((product, index) => (
          <Grid item key={index} xs={12} sm={6} md={4} lg={3} xl={2}>
              <Container>
            <ProductCard
              title={product.title}
              price={product.price}
              rating={product.rating}
              image={product.image}
            />
        </Container>
          </Grid>
      ))}
    </Grid>
  )
}

export default BestProduct
