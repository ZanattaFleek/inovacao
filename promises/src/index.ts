import axios from "axios";
import { API_KEY_PORTAL_TRANSPARENCIA } from "./config";

const IBGE_DIVINOPOLIS: string = '3122306'

const OPCOES_REQUISICAO = {
    'url': '/auxilio-emergencial-por-municipio',
    'baseURL': 'https://api.portaldatransparencia.gov.br/api-de-dados',
    'method': 'GET',
    'params': {
        'codigoIbge': IBGE_DIVINOPOLIS,
        'mesAno': 202108,
       // 'pagina': 1
    },
    'headers': { "chave-api-dados": API_KEY_PORTAL_TRANSPARENCIA }
}

axios(OPCOES_REQUISICAO).then(rs => {
    console.log(rs.status)
    console.log(rs.data)
}).catch(e => {
    console.log(e)
})