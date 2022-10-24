import React from 'react';

// import Fornecedor from './Fornecedor'

function Cliente() {

    const TAMANHO_MAXIMO:number = 30

    let nome: string = ""

    return (
        <div>
            Cadastro de Cliente
            <form>
                <label>Nome:</label>
                <input onchange="onChangeValue()" type="text" placeholder="Digite seu Nome" maxLength={TAMANHO_MAXIMO} />
            </form>
        </div>
    );
}

export default Cliente;
