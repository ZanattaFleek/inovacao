"use strict";
class ClsCliente {
    constructor() {
        this.rsItens = [];
    }
    adicionar(oque) {
        this.rsItens.push(oque);
    }
    get itens() {
        return this.rsItens;
    }
}
let clientes = new ClsCliente();
let fornecedores = new ClsCliente();
clientes.adicionar('Fleek Cursos');
fornecedores.adicionar(10);
