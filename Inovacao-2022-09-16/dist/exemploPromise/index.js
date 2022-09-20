"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ClsCliente_1 = __importDefault(require("./ClsCliente"));
let clsCliente = new ClsCliente_1.default();
/*
clsCliente.cadastrar('Fleek Cursos').then((rsPromise) => {

    if (rsPromise) {
        console.log('Promise OK: ', rsPromise)
    } else {
        console.log('Erro na Promise....')
    }

}).catch((e) => {
    console.log('Erro da Promise: ', e)
})
*/
clsCliente.pesquisarCEP('35998015').then((rsCEP) => {
    console.log('Cep retornado: ', rsCEP);
}).catch((e) => {
    console.log('Erro: ', e);
}).finally(() => {
    console.log('Final do Código Executado........');
});
