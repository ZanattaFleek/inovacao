import React from 'react'
import { LoginStateInterface, useLoginState } from './LoginState'
import { MensagemStateInterface, useMensagemState } from './MensagemState'

export interface GlobalStateInterface {
  LoginState: LoginStateInterface,
  setLoginState: React.Dispatch<React.SetStateAction<LoginStateInterface>>,
  MensagemState: MensagemStateInterface,
  setMensagemState: React.Dispatch<React.SetStateAction<MensagemStateInterface>>
}

export function useGlobalState(): { GlobalStateContexto: React.Context<GlobalStateInterface>, globalState: GlobalStateInterface } {

  const { LoginState, setLoginState } = useLoginState()
  const { MensagemState, setMensagemState } = useMensagemState()

  const globalState: GlobalStateInterface = {
    LoginState: LoginState,
    setLoginState: setLoginState,
    MensagemState: MensagemState,
    setMensagemState: setMensagemState
  }

  const GlobalStateContexto = React.createContext<GlobalStateInterface>({ ...globalState })

  return { GlobalStateContexto, globalState }

}
