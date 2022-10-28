import React from 'react';
import Stack from '@mui/material/Stack';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { MensagemStateInterface } from '../States/MensagemState';

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function Mensagem(
  { MensagemState, setMensagemState }
    : {
      MensagemState: MensagemStateInterface,
      setMensagemState: React.Dispatch<React.SetStateAction<MensagemStateInterface>> }

) {

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason !== 'clickaway') {
      setMensagemState({ ...MensagemState, exibir: false });
    }
  };

  return (
    <>
      <Stack spacing={2} sx={{ width: '100%' }}>
        <Snackbar open={MensagemState.exibir} autoHideDuration={MensagemState.tempo} onClose={handleClose}>
          <Alert onClose={handleClose} severity={MensagemState.tipo} sx={{ width: '100%' }}>
            {MensagemState.mensagem}
          </Alert>
        </Snackbar>
      </Stack>
    </>
  );
}
