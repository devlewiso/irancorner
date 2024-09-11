'use client';

import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Drawer, List, ListItem, ListItemText, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Link from 'next/link';
import { useMediaQuery, useTheme } from '@mui/material';

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm')); // Detectar si es móvil o no

  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const menuItems = [
    { text: 'Home', href: '/' },
    { text: 'Projects', href: '/projects' },
    { text: 'Code Snippets', href: '/code-snippets' },
    { text: 'Curriculum', href: '/curriculum' },
    { text: 'Blog', href: '/blog' },
  ];

  const drawerList = (
    <List>
      {menuItems.map((item) => (
        <ListItem button component="a" href={item.href} key={item.text} onClick={toggleDrawer(false)}>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Iran's Corner
        </Typography>

        {/* Mostrar icono de hamburguesa en pantallas móviles */}
        {isMobile ? (
          <>
            <IconButton color="inherit" edge="start" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
              <Box
                sx={{ width: 250 }}
                role="presentation"
                onClick={toggleDrawer(false)}
                onKeyDown={toggleDrawer(false)}
              >
                {drawerList}
              </Box>
            </Drawer>
          </>
        ) : (
          // Mostrar el menú normal en pantallas más grandes
          <>
            {menuItems.map((item) => (
              <Button color="inherit" component={Link} href={item.href} key={item.text}>
                {item.text}
              </Button>
            ))}
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Header;
