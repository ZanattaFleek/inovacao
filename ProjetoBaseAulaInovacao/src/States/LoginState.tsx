import { useState } from 'react'

export interface LoginStateInterface {
  logado: boolean
  nome: string
  token: string
}

export function useLoginState(): {
  LoginState: LoginStateInterface,
  setLoginState: React.Dispatch<React.SetStateAction<LoginStateInterface>>
} {
  const [LoginState, setLoginState] = useState<LoginStateInterface>({
    logado: false,
    nome: '',
    token: ''
  })

  return { LoginState, setLoginState }

}
