/*



function myFunc(arg: string) {
    console.log(`arg was => ${arg}`);
    console.log(Math.random())
}


setTimeout(myFunc, 1500, 'funky');

*/


const TEMPO: number = 1500

export default class ClsCliente {

    private tempo(resolve: any) {
        resolve(true)
    }

    public buscarCEP(): Promise<boolean> {

        return new Promise((resolve, _reject) => {

            // resolve(true)

            return this.tempo(resolve)

        })
    }

}