"use strict";
/*



function myFunc(arg: string) {
    console.log(`arg was => ${arg}`);
    console.log(Math.random())
}


setTimeout(myFunc, 1500, 'funky');

*/
Object.defineProperty(exports, "__esModule", { value: true });
const TEMPO = 1500;
class ClsCliente {
    tempo(resolve) {
        resolve(true);
    }
    buscarCEP() {
        return new Promise((resolve, _reject) => {
            // resolve(true)
            return this.tempo(resolve);
        });
    }
}
exports.default = ClsCliente;
