import React, { ReactNode } from 'react';
import {
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import { useRouter } from 'next/router';

const ROUTES: {
  routeName: string;
  route: string;
  icon: ReactNode;
}[] = [
  { routeName: 'Notes', route: '/dashboard', icon: <TextSnippetIcon /> },
  { routeName: 'Pacientes', route: '/patients', icon: <TextSnippetIcon /> }
];

export default function SideBar() {
  const router = useRouter();
  const navigate = (url: string): void => {
    router.push(url);
  };
  console.log(router.pathname);
  return (
    <List sx={{ width: '300px' }}>
      {ROUTES.map(route => (
        <ListItem key={route.routeName}>
          <ListItemButton
            onClick={() => navigate(route.route)}
            selected={route.route === router.pathname}
          >
            <ListItemIcon
              sx={{
                minWidth: '30px',
                color:
                  route.route === router.pathname ? 'primary.light' : 'primary'
              }}
            >
              {route.icon}
            </ListItemIcon>
            <ListItemText
              sx={{
                '&:hover': {
                  color:
                    route.route === router.pathname ? 'black' : 'primary.main'
                }
              }}
              primary={route.routeName}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}
