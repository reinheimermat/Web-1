// 1. 
somar = (n1, n2) => {
    n1 = parseFloat(n1.value)
    n2 = parseFloat(n2.value)

    if (n1 === 0) {
        alert('Digite um número maior ou menor que "0".')
        document.querySelector('#n1').value = ""
        document.querySelector('#n2').value = ""
        document.querySelector('#res').innerHTML = "..."
    } else if (n2 === 0){
        alert('Digite um número maior ou menor que "0".')
        document.querySelector('#n1').value = ""
        document.querySelector('#n2').value = ""
        document.querySelector('#res').innerHTML = "..."
    } else {
        const calc = n1 + n2
        document.querySelector('#res').innerHTML = calc
    }

}

limparCampos = () => {
    document.querySelector('#n1').value = ""
    document.querySelector('#n2').value = ""
    document.querySelector('#res').innerHTML = "..."
}

// 2.

const media = (v1, v2, v3) => {
    v1 = parseFloat(v1.value)
    v2 = parseFloat(v2.value)
    v3 = parseFloat(v3.value)
    const calcular = (v1 + v2 + v3) / 3
    document.querySelector('#res-2').innerHTML = calcular.toFixed(2)
}

const porcentagem = (p1) => {
    p1 = parseFloat(p1.value)
    const calcp = p1 * 0.10
    document.querySelector('#res-3').innerHTML = calcp
}
