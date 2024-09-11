'use client';

import React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useRouter } from 'next/navigation';

const NotFoundPage = () => {
  const router = useRouter();

  const handleGoHome = () => {
    router.push('/');
  };

  return (
    <Container maxWidth="sm" sx={{ textAlign: 'center', mt: 8 }}>
      <Typography variant="h1" component="h1" gutterBottom>
        404
      </Typography>
      <Typography variant="h5" component="h2" gutterBottom>
        Página no encontrada
      </Typography>
      <Typography variant="body1" paragraph>
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </Typography>
      <Box mt={4}>
        <Button variant="contained" color="primary" onClick={handleGoHome}>
          Volver a la página principal
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
