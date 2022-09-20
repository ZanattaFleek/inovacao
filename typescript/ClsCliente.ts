export interface CadastroClienteInterface {
    id: number
    nome: string
    sobrenome: string
    empresa: string
    nomeCompleto: string
}

export default class ClsCliente {

    public sobrenome: string = ''

    private rsCliente: CadastroClienteInterface

    constructor(dados: CadastroClienteInterface) {
        this.rsCliente = dados
    }

    public get nome(): string {
        return this.rsCliente.nome
    }

    public set nome(qualNome: string) {
        this.rsCliente.nome = qualNome.toUpperCase()
    }

}
