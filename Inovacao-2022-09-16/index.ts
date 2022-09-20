const fnOK = function () {
    
}

function dividir(dividendo: number, divisor: number, cbOK: any, cbErro: any) {
    if (!divisor || typeof divisor != 'number') {
        cbErro('Forneça um Divisor Válido diferente de zero')
    } else {
        cbOK(dividendo / divisor)
    }
}

dividir(10, 10, (resultado: number) => {
    console.log('Resultado OK', resultado)

    dividir(10, 5, (r: number) => { console.log('Rs 10 por 5', r) }, () => { })

}, (motivo: string) => {
    console.log('Resultado Errado', motivo)
})

