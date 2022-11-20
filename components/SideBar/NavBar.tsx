import { useState } from 'react';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SideBar, { ROUTES } from './SideBar';
import SearchBar from './SearchBar';
import { useRouter } from 'next/router';

export default function NavBar({ children }: { children: JSX.Element }) {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const router = useRouter();
  const singleRoute = ROUTES.find(route => route.route === router.pathname);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {singleRoute ? (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{ mr: 2 }}
              onClick={() => router.back()}
            >
              <ArrowBackIcon />
            </IconButton>
          )}
          <Typography variant="h6" fontWeight="bold">
            {router.pathname.split('/')[1].toUpperCase()}
          </Typography>
          <SearchBar />
        </Toolbar>
      </AppBar>
      <SideBar open={open} onClose={toggleDrawer} />
      {children}
    </Box>
  );
}
