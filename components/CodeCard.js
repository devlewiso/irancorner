'use client';

import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Modal, Box } from '@mui/material';

// Estilos para el modal
const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '80%',
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  maxHeight: '80vh',
  overflowY: 'auto',
};

export default function CodeCard({ title, description, language, code, imageUrl }) {
  const [open, setOpen] = useState(false);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Card sx={{ maxWidth: 345, margin: '20px auto' }}>
      <CardContent>
        <Typography variant="h5" component="div" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {description}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lenguaje: {language}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleOpen} sx={{ marginTop: '10px' }}>
          Ver Código
        </Button>
      </CardContent>

      {/* Modal para mostrar el código y la imagen */}
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
      >
        <Box sx={modalStyle}>
          <Typography id="modal-title" variant="h6" component="h2">
            {title}
          </Typography>
          <Typography id="modal-description" sx={{ mt: 2, whiteSpace: 'pre-wrap' }}>
            {code}
          </Typography>
          {imageUrl && (
            <Box sx={{ marginTop: '20px' }}>
              <img src={imageUrl} alt={title} style={{ width: '100%', borderRadius: '8px' }} />
            </Box>
          )}
          <Button
            variant="outlined"
            color="secondary"
            onClick={handleClose}
            sx={{ marginTop: '20px', display: 'block', marginLeft: 'auto', marginRight: 'auto' }}
          >
            Cerrar
          </Button>
        </Box>
      </Modal>
    </Card>
  );
}
