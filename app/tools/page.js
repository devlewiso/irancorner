'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Card, CardContent, CardMedia, Typography, Button, Container, Grid } from '@mui/material';
import { keyframes } from '@emotion/react';

// Define the slide-up animation
const slideUpAnimation = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const tools = [
  {
    title: 'Audio Player',
    description: 'Reproduce tus archivos de audio favoritos con facilidad.',
    imageSrc: '/images/audio-player.png',
    href: '/tools/audio-player',
  },
  {
    title: 'Task Manager',
    description: 'Administra tus tareas y organiza tu día.',
    imageSrc: '/images/task-manager.png',
    href: '/tools/task-manager',
  },
  {
    title: 'Code Snippets',
    description: 'Guarda y reutiliza fragmentos de código útiles.',
    imageSrc: '/images/code-snippets.png',
    href: '/tools/code-snippets',
  },
  {
    title: 'Excel Viewer',
    description: 'Visualiza archivos Excel de manera eficiente.',
    imageSrc: '/images/excel-viewer.png',
    href: '/tools/excel-viewer',
  },
  {
    title: 'PDF Converter',
    description: 'Convierte archivos a PDF con un solo clic.',
    imageSrc: '/images/pdf-converter.png',
    href: '/tools/pdf-converter',
  },
];

const ToolCard = ({ title, description, imageSrc, href }) => (
  <Card sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '100%' }}>
    <CardMedia
      component="img"
      height="200"
      image={imageSrc}
      alt={title}
      sx={{ objectFit: 'cover', width: '100%' }}
    />
    <CardContent sx={{ textAlign: 'center' }}>
      <Typography variant="h6" component="div" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
      <Link href={href} passHref>
        <Button variant="contained" color="primary" sx={{ mt: 2 }}>
          Iniciar
        </Button>
      </Link>
    </CardContent>
  </Card>
);

const ToolsPage = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography
        variant="h3"
        component="h1"
        align="center"
        gutterBottom
        sx={{
          mb: 4,
          fontWeight: 'bold',
          color: '#1976d2',
          fontSize: { xs: '2rem', sm: '2.5rem', md: '3rem', lg: '3.5rem' },
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2)',
          animation: `${slideUpAnimation} 1s ease-out`,
        }}
      >
        Dashboard de Herramientas
      </Typography>
      <Grid container spacing={4}>
        {tools.map((tool, index) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
            <ToolCard
              title={tool.title}
              description={tool.description}
              imageSrc={tool.imageSrc}
              href={tool.href}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default ToolsPage;
