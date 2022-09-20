"use strict";
function dividir(dividendo, divisor, cbOK, cbErro) {
    if (!divisor || typeof divisor != 'number') {
        cbErro('Forneça um Divisor Válido diferente de zero');
    }
    else {
        cbOK(dividendo / divisor);
    }
}
dividir(10, 10, (resultado) => {
    console.log('Resultado OK', resultado);
    dividir(10, 5, (r) => { console.log('Rs 10 por 5', r); }, () => { });
}, (motivo) => {
    console.log('Resultado Errado', motivo);
});
