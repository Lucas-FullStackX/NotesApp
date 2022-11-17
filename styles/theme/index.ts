import { green, teal } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';
import type {} from '@mui/lab/themeAugmentation';
import '@mui/lab/themeAugmentation';

const lightTheme = createTheme({
  palette: {
    primary: teal,
    secondary: green
  }
});

export default lightTheme;
