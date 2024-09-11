'use client';

import React, { useState, useMemo } from 'react';
import { Grid, Container, Typography, Card, CardContent, Modal, Box, Button, useMediaQuery } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Image from 'next/image';

// Datos de los proyectos
const projects = [
  {
    id: 1,
    title: 'Dashboard MultiTask',
    description: 'Es un Dashboard con múltiples herramientas para tu uso diario.',
    image: '/images/proyecto1.webp',
    link: '/projects/dashboard-multitask',
  },
  {
    id: 2,
    title: 'Proyecto 2',
    description: 'Descripción breve del proyecto 2.',
    image: '/images/proyecto2.webp',
    link: '/projects/proyecto-2',
  },
  // Agrega más proyectos según sea necesario
];

// Componente para el modal
const ProjectModal = React.memo(({ project, open, onClose }) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  if (!project) return null;

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby={`modal-title-${project.id}`}
      aria-describedby={`modal-description-${project.id}`}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: fullScreen ? '100%' : { xs: '90%', sm: '70%', md: 600 },
          height: fullScreen ? '100%' : 'auto',
          maxHeight: fullScreen ? '100%' : '90vh',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: { xs: 2, sm: 3, md: 4 },
          borderRadius: fullScreen ? 0 : 2,
          overflow: 'auto',
        }}
      >
        <Typography id={`modal-title-${project.id}`} variant="h6" component="h2">
          {project.title}
        </Typography>
        <Box sx={{ position: 'relative', width: '100%', height: 200, my: 2 }}>
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <Typography id={`modal-description-${project.id}`} sx={{ mt: 2 }}>
          {project.description}
        </Typography>
        <Button variant="contained" color="primary" onClick={onClose} sx={{ mt: 2 }}>
          Cerrar
        </Button>
      </Box>
    </Modal>
  );
});

ProjectModal.displayName = 'ProjectModal';

// Componente principal
export default function ProjectsPage() {
  const [open, setOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);
  const theme = useTheme();

  const handleOpen = (project) => {
    setSelectedProject(project);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedProject(null);
  };

  const memoizedProjects = useMemo(() => projects.map((project) => (
    <Grid item xs={12} sm={6} md={4} key={project.id}>
      <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
        <Box sx={{ position: 'relative', width: '100%', height: 200 }}>
          <Image
            src={project.image}
            alt={project.title}
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography gutterBottom variant="h5" component="div">
            {project.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {project.description}
          </Typography>
        </CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', p: 2 }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => handleOpen(project)}
          >
            Ver Proyecto
          </Button>
          <Button
            variant="outlined"
            color="secondary"
            href={project.link}
            target="_blank"
          >
            Ir al Proyecto
          </Button>
        </Box>
      </Card>
    </Grid>
  )), []);

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      width: '100%', 
      bgcolor: 'background.default'
    }}>
      <Container 
        maxWidth="lg" 
        sx={{ 
          py: { xs: 2, sm: 3, md: 4 },
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Typography 
          variant="h4" 
          component="h1" 
          gutterBottom 
          sx={{ 
            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
            textAlign: 'center',
            mb: { xs: 2, sm: 3, md: 4 }
          }}
        >
          Proyectos Destacados
        </Typography>
        <Grid container spacing={{ xs: 2, sm: 3, md: 4 }} justifyContent="center">
          {memoizedProjects}
        </Grid>
        <ProjectModal
          project={selectedProject}
          open={open}
          onClose={handleClose}
        />
      </Container>
    </Box>
  );
}
