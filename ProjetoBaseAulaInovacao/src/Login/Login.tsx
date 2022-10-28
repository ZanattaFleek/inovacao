import React, { useState } from 'react'

import Button from '@mui/material/Button'
import Grid from '@mui/material/Grid'
import { GlobalStateInterface } from '../States/GlobalState';
import InputText from '../Components/InputText';
import { useRestFull } from '../Hooks/APIRestFul';

interface UsuarioLoginInterface {
  id: number,
  login: string
  token: string
}

export default function Login({ globalState }: { globalState: GlobalStateInterface }) {

  const [rsLogin, setRsLogin] = useState({
    login: '',
    senha: 'caca'
  })

  const logar = (globalState: GlobalStateInterface) => {

    /*
method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    */

    if (globalState) {
      const url: string = 'http://localhost:3001/usuario?'.concat((new URLSearchParams(rsLogin)).toString())

      const { isPendente, isErro, dados} = useRestFull('http://localhost:3001/usuario',)

      console.log(url)

      fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }).then(rs => {
        return rs.json()
      }).then((rs: Array<UsuarioLoginInterface>) => {
        console.log(rs)
        if (rs && rs.length > 0) {
          globalState.setLoginState({ logado: true, nome: rs[0].login, token: 'TokenHere' })
        }
      })

    }
  }

  return (
    <>
      <Grid container
        justifyContent="center"
        alignItems="center">
        <Grid item xs={10} md={4}>
          <Grid container
            spacing={3}
            justifyContent="center"
          >
            <Grid item xs={12}>
              <h1>Login</h1>
            </Grid>
            <Grid item xs={12}>
              <InputText
                campo='login'
                label='Login'
                placeholder='Login do Usuário'
                registro={rsLogin}
                type="text"
                update={setRsLogin}
              />
            </Grid>
            <Grid item xs={12}>

              <InputText
                campo='senha'
                label='Senha'
                placeholder='Senha do Usuário'
                registro={rsLogin}
                type="text"
                update={setRsLogin}
              />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained"
                onClick={() => {
                  logar(globalState);
                }}
              >
                Logar
              </Button>

            </Grid>
          </Grid>

        </Grid>
      </Grid>

    </>
  )
}