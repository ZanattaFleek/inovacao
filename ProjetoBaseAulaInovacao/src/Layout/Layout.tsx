import React from 'react'

import { Outlet } from 'react-router-dom'
import { useGlobalState } from '../States/GlobalState'
import Autenticar from './Autenticar'

import Footer from './Footer'
import Header from './Header'
import Login from '../Login/Login'

import './Layout.css'

export default function LayOut() {

  const { globalState, GlobalStateContexto } = useGlobalState()


  return (
    <>
      <GlobalStateContexto.Provider value={globalState}>
        {globalState.LoginState.logado ?
          <Autenticar globalState={globalState}>
            <Header globalState={globalState} />
            <Outlet />
            <Footer globalState={globalState} />
          </Autenticar>
          :
          <Login globalState={globalState} />
        }
      </GlobalStateContexto.Provider>
    </>
  )
}