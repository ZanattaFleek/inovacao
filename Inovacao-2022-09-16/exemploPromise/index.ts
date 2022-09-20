import ClsCliente from "./ClsCliente";

let clsCliente: ClsCliente = new ClsCliente()

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

    console.log('Cep retornado: ', rsCEP)

}).catch((e) => {

    console.log('Erro: ', e)

}).finally(() => {

    console.log('Final do Código Executado........')
    
})
