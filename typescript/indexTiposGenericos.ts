class ClsCliente<T> {
    private rsItens: Array<T> = []

    public adicionar(oque: T) {
        this.rsItens.push(oque)
    }

    public get itens(): Array<T> {
        return this.rsItens
    }
}

let clientes: ClsCliente<string> = new ClsCliente()
let fornecedores: ClsCliente<number> = new ClsCliente()

clientes.adicionar('Fleek Cursos')

fornecedores.adicionar(10)

