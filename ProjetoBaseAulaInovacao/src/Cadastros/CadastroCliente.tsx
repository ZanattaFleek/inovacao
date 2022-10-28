import React from 'react'

import { useParams } from 'react-router-dom'

import Mensagem from '../Components/Mensagem'
import { useMensagemState } from '../States/MensagemState'
import { useGlobalState } from '../States/GlobalState'

export default function CadastroCliente() {

  const { idCliente } = useParams()

  const { MensagemState, setMensagemState } = useMensagemState()

  const { GlobalStateContexto } = useGlobalState()

  return (
    <GlobalStateContexto.Consumer>
      {
        ({ LoginState, setLoginState }) => <>
          <Mensagem MensagemState={MensagemState} setMensagemState={setMensagemState} />
          <h1>Cadastro de Cliente {idCliente} </h1>
          {LoginState.logado && <h3>Bem Vindo: {LoginState.nome} - {MensagemState.mensagem}</h3>}

          <input type="button" value="Alterar Usuario" onClick={() => setLoginState({ ...LoginState, nome: 'Usuario Alterado...' })} />
          <input type="button" value="Exibir Mensagem" onClick={() => { setMensagemState({ ...MensagemState, mensagem: 'Alterada Mensagem....' }) }} />

          <span className="material-icons">pie_chart</span>
          <span className="material-icons-outlined">pie_chart</span>
          <span className="material-icons-round">pie_chart</span>
          <span className="material-icons-sharp">pie_chart</span>
          <span className="material-icons-two-tone">pie_chart</span>

          <h1>h1</h1>
          <h2>h2</h2>
          <h3>h3</h3>
          <h4>h4</h4>

          <div>{MensagemState.mensagem}</div>

        </>
      }
    </GlobalStateContexto.Consumer>

  )
}