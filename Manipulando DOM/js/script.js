// alert("Hello World");
// console.log("OK");

// 1. Mudando valores com .value
function mudarTexto() {
    document.querySelector('.texto1').value = "Buenas";
}

// 2. Mudando valores com .innerText
function mudarTexto2() {
    // document.getElementById('texto2').innerText = "Inner<br> Text";
    document.getElementById('texto2').innerText =
        "<ul>" +
        "<li>Item 1</li>" +
        "<li>Item 2</li>" +
        "<li>Item 3</li>" +
        "</ul>";
    // console.log("texto2");
}

// 3. Mudando valores com .innerHTML
function mudarTexto3() {
    // document.getElementById('texto3').innerHTML = "Inner<br> HTML";
    document.getElementById('texto3').innerHTML =
        "<ul>" +
        "<li>Item 1</li>" +
        "<li>Item 2</li>" +
        "<li>Item 3</li>" +
        "</ul>";
}

// 4. Mudando uma imagem a clicar
const mudarImagem = () => {
    document.querySelector('#img1').src = "img/img2.jpg"
}

const voltarImagem = () => {
    document.querySelector('#img1').src = "img/img1.jpg"
}

// 5. Mudando uma imagem ao passar o mouse
const mudarImagem2 = () => {
    document.querySelector('#img2').src = "img/img1.jpg"
}

const voltarImagem2 = () => {
    document.querySelector('#img2').src = "img/img2.jpg"
}

// 6. Mudando o CSS (estilo)
const mudarCorTexto = () => {
    const texto = document.querySelector('#texto6');

    texto.innerHTML = "Ok"
    texto.style.color = 'red'
    texto.style.backgroundColor = "yellow"
}

const voltarCorTexto = () => {
    const texto = document.querySelector('#texto6');
    texto.style.color = 'black'
}

// 7. Mudando o CSS (com parâmetro)
const mudarTexto7 = (elemento) => {
    elemento.innerHTML = "texto alterado pelo javascript";
}

// 8. Chamando uma function que chama outra
const calcular = (valor1, valor2) => {
    valor1 = parseFloat(valor1.value)
    valor2 = parseFloat(valor2.value)

    const resultado = somar(valor1, valor2)

    mostrarResultado(resultado)
}

const somar = (valor1, valor2) => {
    return valor1 + valor2
}

const mostrarResultado = (resultado) => {
    document.querySelector('#resultado').innerHTML = resultado
}

// 9. Clicar, segurar e soltar
const segurar = (elemento) => {
    elemento.innerHTML = 'Solta!'
    elemento.style.backgroundColor = "#252977"
}

const soltar = (elemento) => {
    elemento.innerHTML = "clica!"
    elemento.style.backgroundColor = "#ff7f50"
}
