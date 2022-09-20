
const ok = function (oque) {
    console.log('Resultado OK: ', oque)
}

const erro = function (oque) {
    console.log('Resultado Erro: ', oque)
}

function dividir(dividendo, divisor, cbOK, cbErro) {
    if (!divisor) {
        cbErro('Divisor inválido')
    } else {
        cbOK(dividendo / divisor)
    }
}

dividir(10, 10, ok, erro)