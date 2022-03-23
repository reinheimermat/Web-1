// * Variáveis com escopo global

const btnAtivar = document.querySelector('#btnAtivar')
const btnLogar = document.querySelector('#btnLogar')
const modal = document.getElementById('#modal')
const loader = document.querySelector('#load')
const notificacao = document.querySelector('notificacao')
let isLoading = false

// TODO: Forma Avançada 1 (com função anônima)
btnAtivar.addEventListener('click', () => {
    modal.classList.toggle('animar')
    document.querySelector('#email')
    notificacao.style.display = none
})

// * Controle do botão
btnLogar.addEventListener('click', () => console.log('1. isLoad' + isLoading))

// * Verifica se está carregando
if (isLoading == false) {
    isLoading = true
}