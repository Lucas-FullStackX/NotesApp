import React from 'react';
import { Button, Dialog, DialogContent, DialogTitle, Box } from '@mui/material';
import SignatureCanvas from 'react-signature-canvas';

/**
 * @param root0 - Props.
 * @param root0.open - Props text.
 * @param root0.close - Props text.
 * @param root0.onChange - Props text.
 * @returns {} Component.
 */
export function SignatureMenu({
  open,
  close,
  onChange
}: {
  open: boolean;
  close: () => void;
  onChange: (data: FormData, assistant: string) => void;
}): JSX.Element {
  const valueRef = React.useRef<HTMLDivElement>(null);
  const [sigCanvas, setSigCanvas] = React.useState<SignatureCanvas>();
  return (
    <Dialog
      open={open}
      onClose={close}
      aria-labelledby="responsive-dialog-title"
      fullWidth
    >
      <DialogTitle id="responsive-dialog-title">Firma</DialogTitle>
      <DialogContent>
        <Box
          ref={valueRef}
          sx={{
            width: '100%',
            alignSelf: 'start'
          }}
        >
          <SignatureCanvas
            canvasProps={{
              width: valueRef.current?.clientWidth,
              height: '250px'
            }}
            ref={ref => {
              if (ref) {
                setSigCanvas(ref);
              }
            }}
          />
          <Box
            display="flex"
            justifyContent="space-between"
            sx={{
              width: '100%'
            }}
          >
            <Button
              onClick={() => {
                sigCanvas?.clear();
              }}
            >
              Limpiar
            </Button>
            <Button
              onClick={async () => {
                const canvas = sigCanvas.getCanvas();
                canvas.toBlob(async blob => {
                  const fd = new window.FormData();
                  fd.append('signature', blob, 'signature.png');
                  onChange(
                    fd,
                    sigCanvas?.getTrimmedCanvas().toDataURL('image/png') ?? ''
                  );
                });
                close();
              }}
            >
              Guardar
            </Button>
          </Box>
        </Box>
      </DialogContent>
    </Dialog>
  );
}
