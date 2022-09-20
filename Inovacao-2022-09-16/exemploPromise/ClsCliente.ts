import { rejects } from 'assert'
import axios from 'axios'
import { CepInterface } from './global.interfaces'


export default class ClsCliente {

    public pesquisarCEP(cep: string): Promise<CepInterface> {

        let urlCep: string = `https://viacep.com.br/ws/${cep}/json/`

        // return new Promise((resolve, reject) => {

        return axios.get(urlCep).then((rsCEP) => {

            if (rsCEP.data.erro) {
                return Promise.reject('Erro na Consulta de CEP')
            } else {
                return rsCEP.data
            }

        }).catch(() => {

            return 'Erro na consulta de CEP'

        })

        // })

    }
    /*
        public cadastrar(nome: string): Promise<boolean> {
    
            return new Promise((resolve, reject) => {
    
                if (nome.length < 10) {
                    // reject('Nome deve ser no mínimo 10')
                    resolve(false)
                }
    
                console.log('Cadastrando: ', nome)
    
                resolve(true)
    
            })
    
        }
        */

}