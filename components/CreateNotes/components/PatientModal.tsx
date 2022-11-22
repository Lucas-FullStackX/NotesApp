import { Dialog, Box } from '@mui/material';
import CreatePatientForm from '../../CreatePatients/CreatePatientForm';

/**
 * @param root0 - Props.
 * @param root0.open - Props text.
 * @param root0.close - Props text.
 * @returns {} Component.
 */
export const CreatePatientModal = ({
  open,
  close,
  onSubmit
}: {
  open: boolean;
  close: () => void;
  onSubmit: () => void;
}): JSX.Element => {
  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="responsive-dialog-title"
      fullWidth
    >
      <Box m={2}>
        <CreatePatientForm
          onCancel={close}
          onSubmit={() => {
            onSubmit();
            close();
          }}
        />
      </Box>
    </Dialog>
  );
};
