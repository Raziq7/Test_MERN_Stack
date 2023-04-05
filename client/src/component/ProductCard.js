import React from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';
import StarRateIcon from '@mui/icons-material/StarRate';
import { Container } from '@mui/system';

const ProductCard = ({ title, price, rating, image }) => {
  const styles = {
    card: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
      height: '100%',
      boxShadow: 'none',
      overflow: 'hidden',
      marginTop:"30px"
    },
    media: {
      width: '100px',
      height: 'auto',
    },
    content: {
      flexGrow: 1,
      padding: '16px',
      fontSize:"small"
    },
    title: {
      fontWeight: 'bold',
      marginBottom: '8px',
      fontSize:"small"
    },
    price: {
      fontSize: '18px',
      fontWeight: 'bold',
      marginBottom: '8px',
      fontSize:"small"
    },
    rating: {
      display: 'flex',
      alignItems: 'center',
      color: '#1976d2',
    },
    star: {
      color: '#1976d2',
      marginRight: '4px',
      fontSize:"small"
    },
  };

  return (
    <Container>
    <Card sx={styles.card}>
      <CardMedia component="img" image={image} sx={styles.media} />

      <CardContent sx={styles.content}>
        <Typography variant="h6" component="h3" sx={styles.title}>
          {title}
        </Typography>

        <Typography variant="body1" component="p" sx={styles.price}>
          ₹{price}
        </Typography>

        <div sx={styles.rating}>
          {Array.from({ length: rating }).map((_, index) => (
            <StarRateIcon key={index} sx={styles.star} />
          ))}

          <Typography variant="body2" component="span">
            ({rating})
          </Typography>
        </div>
      </CardContent>
    </Card>
    </Container>
  );
};

export default ProductCard;
