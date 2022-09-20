"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ClsCliente {
    constructor(dados) {
        this.sobrenome = '';
        this.rsCliente = dados;
    }
    get nome() {
        return this.rsCliente.nome;
    }
    set nome(qualNome) {
        this.rsCliente.nome = qualNome.toUpperCase();
    }
}
exports.default = ClsCliente;
