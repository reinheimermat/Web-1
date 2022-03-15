somar = (n1, n2) => {
    n1 = parseFloat(n1.value)
    n2 = parseFloat(n2.value)
    const calc = n1 + n2
    document.querySelector('#res').innerHTML = calc

}

limparCampos = () => {
    document.querySelector('#n1').value = ""
    document.querySelector('#n2').value = ""
    document.querySelector('#res').innerHTML = ""
}