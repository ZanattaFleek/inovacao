"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class ClsCliente {
    pesquisarCEP(cep) {
        let urlCep = `https://viacep.com.br/ws/${cep}/json/`;
        // return new Promise((resolve, reject) => {
        return axios_1.default.get(urlCep).then((rsCEP) => {
            if (rsCEP.data.erro) {
                return Promise.reject('Erro na Consulta de CEP');
            }
            else {
                return rsCEP.data;
            }
        }).catch(() => {
            return 'Erro na consulta de CEP';
        });
        // })
    }
}
exports.default = ClsCliente;
