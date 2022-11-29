
var formulario = document.querySelector('form')
var botaoContinuar = document.querySelector('div.continuar a')
var botao_contraste_branco = document.getElementById('branco')
var botao_contraste_preto = document.getElementById('preto')
var botao_sem_contrate = document.getElementById('0contraste')
var todos = document.querySelectorAll('*')


formulario.addEventListener('submit', function(evento){
    evento.preventDefault()

    const formData = new FormData(this);
    let resposta;

    console.log(formData.classList);
    for (const [key, value] of formData) {
         console.log(key, value);
        if (key == 'alternativa') {
            resposta = value
        }
    }
// validacao // afirmativa correta ou errada 
    var alternativas = document.querySelectorAll('input[type="radio"]')
    alternativas.forEach(a => {
        a.parentElement.style.backgroundColor = 'white'
    });

    var marcado = document.querySelector('input[type="radio"]:checked')
    marcado.parentElement.style.borderRadius = '4px'
    
    if (resposta == 'true') {
        // alert('Acertou!!!')
        botaoContinuar.classList.remove('disabled')
        marcado.parentElement.style.backgroundColor = '#76B947'
    } else {
        // alert('Errou!!!')
        marcado.parentElement.style.backgroundColor = '#FF8A8A'
    }

})

//contrastes

function mudarParaBranco() {
    console.log(todos);

    todos.forEach(function(elemento){
        elemento.style.color = 'black'
        elemento.style.backgroundColor = 'white'
    })

    // Mudando a borda dos botões com a classe btn
    var botoes = document.querySelectorAll('.btn')
    botoes.forEach(function(botao){
        botao.style.border = '2px solid #000'
    })
}

botao_contraste_branco.addEventListener('click', mudarParaBranco);

function mudarParaPreto() {
    console.log(todos);

    todos.forEach(function(elemento){
        elemento.style.color = 'white'
        elemento.style.backgroundColor = 'black'
    })
    
    // Mudando a borda dos botões com a classe btn
    var botoes = document.querySelectorAll('.btn')
    botoes.forEach(function(botao){
        botao.style.border = '2px solid #FFF'
    })
}

botao_contraste_preto.addEventListener('click', mudarParaPreto);

