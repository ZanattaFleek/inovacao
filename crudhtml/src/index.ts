// console.log('Funfando...')

// window.alert('Oi...')

let cliente = {
    nome: '',
    endereco: ''
}

function trocarConteudo() {
    let lblDescricao: HTMLLabelElement = <HTMLLabelElement>document.getElementById('lblDescricao')
    let txtDescricao: HTMLInputElement = <HTMLInputElement>document.getElementById('txtDescricao')

    lblDescricao.innerHTML = txtDescricao.value
}

function onChangeTxtDescricao(e: any) {
    let txtDescricao: HTMLInputElement = <HTMLInputElement>document.getElementById('txtDescricao')
    cliente.nome = txtDescricao.value
}

// console.log()

