'use client';

import React, { useState } from 'react';
import { Grid, Container, Typography, Card, CardContent, Modal, Box, Button } from '@mui/material';
import Image from 'next/image';

// Datos de los proyectos
const projects = [
  { id: 1, title: 'Proyecto 1', description: 'Descripción breve del proyecto 1', image: '/images/proyecto1.webp', url: 'https://dash.iranscorner.fun' },
  { id: 2, title: 'Proyecto 2', description: 'Descripción breve del proyecto 2', image: '/api/placeholder/300/200', url: 'https://proyecto2.com' },
  { id: 3, title: 'Proyecto 3', description: 'Descripción breve del proyecto 3', image: '/api/placeholder/300/200', url: 'https://proyecto3.com' },
  { id: 4, title: 'Proyecto 4', description: 'Descripción breve del proyecto 4', image: '/api/placeholder/300/200', url: 'https://proyecto4.com' },
  { id: 5, title: 'Proyecto 5', description: 'Descripción breve del proyecto 5', image: '/api/placeholder/300/200', url: 'https://proyecto5.com' },
  { id: 6, title: 'Proyecto 6', description: 'Descripción breve del proyecto 6', image: '/api/placeholder/300/200', url: 'https://proyecto6.com' },
  { id: 7, title: 'Proyecto 7', description: 'Descripción breve del proyecto 7', image: '/api/placeholder/300/200', url: 'https://proyecto7.com' },
  { id: 8, title: 'Proyecto 8', description: 'Descripción breve del proyecto 8', image: '/api/placeholder/300/200', url: 'https://proyecto8.com' },
];

// Componente de tarjeta de proyecto
function ProjectCard({ project, onViewMore }) {
  return (
    <Card>
      <img src={project.image} alt={project.title} style={{ width: '100%', height: '200px', objectFit: 'cover' }} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {project.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {project.description}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => onViewMore(project)}
          sx={{ marginTop: '10px' }}
        >
          Ver Más
        </Button>
      </CardContent>
    </Card>
  );
}

// Componente de diálogo de proyecto
function ProjectDialog({ project, open, onClose }) {
  return (
    <Modal open={open} onClose={onClose} aria-labelledby="modal-title" aria-describedby="modal-description">
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
          {project.title}
        </Typography>
        <img src={project.image} alt={project.title} style={{ width: '100%', height: 'auto', margin: '10px 0' }} />
        <Typography id="modal-description" sx={{ mt: 2, backgroundColor: 'white', color: 'black', padding: '10px', borderRadius: '4px' }}>
          {project.description}
        </Typography>
        <Button variant="contained" color="secondary" onClick={onClose} sx={{ marginTop: '10px' }}>
          Cerrar
        </Button>
        <Button variant="contained" color="primary" onClick={() => window.open(project.url, '_blank')} sx={{ marginTop: '10px', marginLeft: '10px' }}>
          Ir al Proyecto
        </Button>
      </Box>
    </Modal>
  );
}

// Componente principal
export default function ProjectsPage() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  return (
    <Container maxWidth="lg" sx={{ padding: '20px' }}>
      <Typography variant="h4" gutterBottom>
        Mis Proyectos
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <ProjectCard project={project} onViewMore={handleOpen} />
          </Grid>
        ))}
      </Grid>
      {selectedProject && (
        <ProjectDialog 
          project={selectedProject}
          open={open}
          onClose={handleClose}
        />
      )}
    </Container>
  );
}
