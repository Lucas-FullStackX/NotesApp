import { Alert, Slide, SlideProps, Snackbar } from '@mui/material';
import { useContext } from 'react';
import { Context } from '../../src/store/Context';

/**
 * @param props - Props.
 * @returns Component.
 */
function SlideTransition(props: SlideProps): JSX.Element {
  return <Slide {...props} direction="up" />;
}
/**
 * @returns Snackbar component.
 */
export function SnackBars(): JSX.Element {
  const {
    state: { open, message, type },
    close
  } = useContext(Context);
  return (
    <Snackbar
      open={open}
      autoHideDuration={3000}
      onClose={close}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      TransitionComponent={SlideTransition}
    >
      <Alert onClose={close} variant="filled" severity={type}>
        {message}
      </Alert>
    </Snackbar>
  );
}
