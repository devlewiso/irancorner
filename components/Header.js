// components/Header.js
'use client'; // Asegúrate de que esta línea esté al inicio del archivo si usa hooks

import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'next/link'; // Asegúrate de instalar next/link si aún no lo has hecho

const Header = () => {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Iran's Corner
        </Typography>
        <Button color="inherit" component={Link} href="/">
          Home
        </Button>
        <Button color="inherit" component={Link} href="/projects">
          Projects
        </Button>
        <Button color="inherit" component={Link} href="/code-snippets">
          Code Snippets
        </Button>
        <Button color="inherit" component={Link} href="/curriculum">
          Curriculum
        </Button>
        <Button color="inherit" component={Link} href="/blog">
          Blog
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
