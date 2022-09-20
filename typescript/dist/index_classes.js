"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClsCliente_1 = __importDefault(require("./ClsCliente"));
let dadosCliente = {
    id: 1,
    nome: 'Marcelo',
    sobrenome: 'Zanatta',
    empresa: 'Fleek Cursos',
    nomeCompleto: 'Marcelo João Zanatta'
};
let clsCliente = new ClsCliente_1.default(Object.assign({ nome: 'Nilton' }, dadosCliente));
clsCliente.sobrenome = 'Zanatta';
console.log(clsCliente.nome);
clsCliente.nome = 'Marcelo';
console.log(clsCliente.nome);
console.log(dadosCliente.nome);
