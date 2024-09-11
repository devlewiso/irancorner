// components/FeatureProject.js
import React from 'react';
import { Card, CardContent, CardMedia, Typography } from '@mui/material';

function FeaturedProject({ title, description, imageSrc, onClick }) {
  return (
    <Card sx={{ maxWidth: 345, cursor: 'pointer' }} onClick={onClick}>
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={imageSrc}
        title={title}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default FeaturedProject;
