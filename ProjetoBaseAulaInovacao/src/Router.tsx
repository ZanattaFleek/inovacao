import React from 'react'

import { createBrowserRouter } from 'react-router-dom';

import CadastroCliente from './Cadastros/CadastroCliente';
import CadastroFornecedor from './Cadastros/CadastroFornecedor';
import ErroAplicacao from './Layout/ErroAplicacao';
import ErroNavegacao from './Layout/ErroNavegacao';

import LayOut from './Layout/Layout';

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayOut />,
    errorElement: <ErroAplicacao />,
    children: [
      {
        path: "cadastrocliente/:idCliente",
        element: <CadastroCliente />,
        errorElement: <ErroAplicacao />
      },
      {
        path: "cadastrofornecedor",
        element: <CadastroFornecedor />,
        errorElement: <ErroAplicacao />
      }
    ],
  },
  {
    path: "*",
    element: <ErroNavegacao />
  }
]);