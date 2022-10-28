import React, { useState } from 'react'

export enum MensagemTipos {
  ERRO = 'error',
  AVISO = 'warning',
  INFO = 'info',
  SUCESSO = 'success'
}

export interface MensagemStateInterface {
  tempo: number
  mensagem: string
  tipo: MensagemTipos
  exibir: boolean
}

export function useMensagemState(): {
  MensagemState: MensagemStateInterface,
  setMensagemState: React.Dispatch<React.SetStateAction<MensagemStateInterface>>
} {
  const [MensagemState, setMensagemState] = useState<MensagemStateInterface>({ tempo: 3000, mensagem: 'teste', tipo: MensagemTipos.AVISO, exibir: true })

  return { MensagemState, setMensagemState }

}

