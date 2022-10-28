import React, { useState } from 'react'

interface ChaveValorInterface {
  [key: string]: number | string | boolean | object
}

export enum EnumRequestType {
  GET = 'GET',
  POST = 'POST'
}

export function useRestFull<T>(
  url: string,
  metodo: EnumRequestType = EnumRequestType.POST,
  parametros: undefined | null | ChaveValorInterface,
  headers: ChaveValorInterface = { 'Content-Type': 'application/json' }): {
    dados: T,
    isPendente: boolean,
    isErro: boolean
  } {

  const [isPendente, setPendente] = useState(true)

  const [isErro, setErro] = useState(false)

  const [isRetorno, setRetorno] = useState<T>()

  let setupFetch = {
    method: metodo,
    headers: { ...headers } as HeadersInit
  }

  if (parametros && metodo == 'GET') {
    url = url.concat('?').concat((new URLSearchParams(parametros as Record<string, any>)).toString())
  }

  fetch(url, setupFetch).then(rs => {
    if (rs.ok) {
      return rs.json()
    } else {
      setPendente(false)
      setErro(true)
    }
  }).then(rs => {
    setRetorno(rs)
    setPendente(false)
  }).catch(() => {
    setPendente(false)
    setErro(true)
  })

  return { dados: isRetorno as T, isPendente, isErro }
  
}