import React from 'react'
import { GlobalStateInterface } from '../States/GlobalState'
import { Navigate } from "react-router-dom";

export default function Autenticar({ children, globalState }: { children: any, globalState: GlobalStateInterface }) {

  return (
    <>
      {globalState.LoginState.logado ? children : <Navigate to="/" replace={true} />}
    </>
  )
}