
function dividir(dividendo, divisor, cbOK, cbErro) {
    if (!divisor) {
        cbErro('Divisor inválido')
    } else {
        cbOK(dividendo / divisor)
    }
}


dividir(10, 0, (oque) => {
    console.log('Deu certo o resultado: ', oque)
}, (porque) => {
    console.log('Deu Errado o Resultado: ', porque)
})