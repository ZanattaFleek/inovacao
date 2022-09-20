import ClsCliente, { CadastroClienteInterface } from "./ClsCliente";

let dadosCliente: CadastroClienteInterface = {
    id: 1,
    nome: 'Marcelo',
    sobrenome: 'Zanatta',
    empresa: 'Fleek Cursos',
    nomeCompleto: 'Marcelo João Zanatta'
}

let clsCliente: ClsCliente = new ClsCliente({ ...{ nome: 'Nilton' }, ...dadosCliente  })

clsCliente.sobrenome = 'Zanatta'

console.log(clsCliente.nome)

clsCliente.nome = 'Marcelo'

console.log(clsCliente.nome)

console.log(dadosCliente.nome)