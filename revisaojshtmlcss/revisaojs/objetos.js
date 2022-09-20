
function alterarCliente(cliente) {
    cliente.nome = 'Inovacao'
}

function alterarNome(nome) {
    nome = 'Inovacao'
}

var clienteInovacao = {
    nome: 'Fleek Cursos',
    endereco: {
        logradouro: 'Avenida',
        cep: '35.500-010'
    }

}

alterarCliente({...clienteInovacao})

console.log(clienteInovacao)