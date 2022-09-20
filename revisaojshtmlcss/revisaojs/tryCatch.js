

function dividir(dividendo, divisor) {
    if (!divisor) {
        throw ('Divisor Inválido')
    }
}

try {
    dividir(10, 0)
} catch (err) {
    console.log('Houve Um Erro no código', err)
}