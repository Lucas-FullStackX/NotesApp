import { useState } from 'react';
import { AppBar, Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SideBar from './SideBar';
import SearchBar from './SearchBar';

export default function NavBar({ children }: { children: JSX.Element }) {
  const [open, setOpen] = useState(false);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
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
          <SearchBar />
        </Toolbar>
      </AppBar>
      <SideBar open={open} onClose={toggleDrawer} />
      {children}
    </Box>
  );
}
