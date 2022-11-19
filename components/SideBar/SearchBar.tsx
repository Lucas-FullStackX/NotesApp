import * as React from 'react';
import { TransitionProps } from '@mui/material/transitions';
import SearchIcon from '@mui/icons-material/Search';
import CloseIcon from '@mui/icons-material/Close';
import {
  Slide,
  styled,
  alpha,
  Dialog,
  AppBar,
  Toolbar,
  IconButton,
  InputBase
} from '@mui/material';
import { useSearchDataNotes } from '../../hooks/useSearchData';
import CardSkeleton from '../Skeleton/CardSkeleton';
import PatientsList from '../PatientsList/PatientsList';
import NotesList from '../NotesList/NoteList';
import Typography from '@mui/material/Typography';

const SearchButton = styled(IconButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  color: 'white',
  padding: theme.spacing(1),
  backgroundColor: alpha(theme.palette.common.white, 0.15)
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%'
  }
}));
const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25)
  },

  width: '100%'
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center'
}));
const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement;
  },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function SearchBar() {
  const [open, setOpen] = React.useState(false);
  const [name, setName] = React.useState('');
  const [onSearch, { data }] = useSearchDataNotes();
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div>
      <SearchButton onClick={handleClickOpen}>
        <SearchIcon />
      </SearchButton>
      <Dialog
        fullScreen
        open={open}
        onClose={handleClose}
        TransitionComponent={Transition}
      >
        <AppBar sx={{ position: 'relative' }}>
          <Toolbar>
            <IconButton
              edge="start"
              color="inherit"
              onClick={handleClose}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                value={name}
                placeholder="Buscar..."
                inputProps={{ 'aria-label': 'search' }}
                onChange={e => {
                  setName(e.target.value);
                  onSearch(e.target.value);
                }}
              />
            </Search>
          </Toolbar>
        </AppBar>
        <React.Suspense fallback={<CardSkeleton />}>
          {name.length > 0 && (
            <>
              {data.notes.length > 0 ? (
                <>
                  <Typography textAlign="left" fontWeight="bold" ml={3} mt={2}>
                    Notas:
                  </Typography>
                  <NotesList notes={data.notes} />
                </>
              ) : (
                <Typography textAlign="center" fontWeight={300} mt={2}>
                  No hay notas asignadas
                </Typography>
              )}
              {data.patients.length > 0 ? (
                <>
                  <Typography textAlign="left" fontWeight="bold" ml={3} mt={2}>
                    Pacientes:
                  </Typography>
                  <PatientsList patients={data.patients} />
                </>
              ) : (
                <Typography textAlign="center" fontWeight={300} mt={2}>
                  No existe el paciente
                </Typography>
              )}
            </>
          )}
        </React.Suspense>
      </Dialog>
    </div>
  );
}
