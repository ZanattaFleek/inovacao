

function imprimirNome(qualNome: string) {
    console.log('Nome: ', qualNome)
}

function exemploCallBack(qualFuncao: any) {

    qualFuncao('Fleek Cursos')
    qualFuncao('Inovacao')
    qualFuncao('Zanatta')

}

exemploCallBack(imprimirNome)

/*
console.log('============================')
console.log(imprimirNome.toString())
console.log('============================')
console.log(exemploCallBack.toString())
console.log('============================')

console.log('typeof imprimirNome: ', typeof imprimirNome)
console.log('typeof exemploCallBack: ', typeof exemploCallBack)
*/
