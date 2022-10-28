import React from 'react';

import TextField from '@mui/material/TextField'

function InputText<T>(
  { placeholder, type, label, campo, registro, update }: {
    placeholder: string,
    type: string,
    label: string,
    campo: string,
    registro: T,
    update: React.Dispatch<React.SetStateAction<T>>
  }) {

  const updateData = (campo: string, v: string) => {

    update({ ...registro, [campo]: v })

  }

  return (
    <>
      <TextField fullWidth type={type} label={label} id={campo} onChange={(e) => updateData(campo, e.target.value)} />
    </>
  );
}

export default InputText;
