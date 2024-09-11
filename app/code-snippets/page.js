'use client';

import React, { useState } from 'react';
import { Grid, Container, Typography, Card, CardContent, Modal, Box, Button } from '@mui/material';
import CodeCard from '../../components/CodeCard';

// Datos de los snippets de código
const codeSnippets = [
  {
    id: 1,
    title: 'Tema Bootstrap Gratis 1',
    description: 'Tema moderno y elegante para cualquier proyecto web.',
    language: 'Bootstrap',
    image: '/images/bootstrap-theme-1.png', // Ruta de la imagen
    code: `<div class="container">
  <h1>Bienvenido al tema Bootstrap</h1>
  <p>Este es un tema moderno y limpio.</p>
</div>`,
  },
  {
    id: 2,
    title: 'Tema Bootstrap Gratis 2',
    description: 'Tema minimalista con un diseño limpio y profesional.',
    language: 'Bootstrap',
    image: '/images/bootstrap-theme-2.png', // Ruta de la imagen
    code: `<div class="container">
  <h1>Tema Minimalista</h1>
  <p>Este es un tema simple pero elegante.</p>
</div>`,
  },
  // Agrega más snippets según sea necesario
];

// Componente principal
export default function CodeSnippetsPage() {
  const [open, setOpen] = useState(false);
  const [selectedSnippet, setSelectedSnippet] = useState(null);

  const handleOpen = (snippet) => {
    setSelectedSnippet(snippet);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedSnippet(null);
  };

  return (
    <Container maxWidth="lg" sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Temas Bootstrap Gratis
      </Typography>
      <Grid container spacing={3}>
        {codeSnippets.map((snippet) => (
          <Grid item xs={12} sm={6} md={4} key={snippet.id}>
            <Card>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {snippet.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {snippet.description}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lenguaje: {snippet.language}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleOpen(snippet)}
                  sx={{ marginTop: '10px' }}
                >
                  Ver código
                </Button>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* Modal para mostrar el código y la imagen */}
      {selectedSnippet && (
        <Modal open={open} onClose={handleClose} aria-labelledby="modal-title" aria-describedby="modal-description">
          <Box
            sx={{
              position: 'absolute',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
              width: 400,
              bgcolor: 'background.paper',
              boxShadow: 24,
              p: 4,
              borderRadius: 2,
            }}
          >
            <Typography id="modal-title" variant="h6" component="h2">
              {selectedSnippet.title}
            </Typography>
            <img src={selectedSnippet.image} alt={selectedSnippet.title} style={{ width: '100%', margin: '10px 0' }} />
            <Typography id="modal-description" sx={{ mt: 2 }}>
              <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word' }}>{selectedSnippet.code}</pre>
            </Typography>
            <Button variant="contained" color="secondary" onClick={handleClose} sx={{ marginTop: '10px' }}>
              Cerrar
            </Button>
          </Box>
        </Modal>
      )}
    </Container>
  );
}
