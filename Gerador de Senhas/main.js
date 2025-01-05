let tamanhos = document.querySelector('#tamanho')
let botaoGerar = document.querySelector('#gerar')
let ABC = document.querySelector('#ABC')
let abc = document.querySelector('#abc')
let numeros = document.querySelector('#numeros')
let simbolos = document.querySelector('#simbolos')
let copiar = document.querySelector('#copiar')
let senha = document.querySelector('#password')
const caracteres = {
    letrasM: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
    letrasm: 'abcdefghijklmnopqrstuvwxyz',
    numeros: '1234567890',
    simbolos: '!@#$%^&*'
}
let caracteresPermitidos = []

let resultado = ''
function verificar(){
    caracteresPermitidos = []
    if(ABC.checked){
        caracteresPermitidos.push(caracteres.letrasM)
    }
    if(abc.checked){
        caracteresPermitidos.push(caracteres.letrasm)
    }
    if(numeros.checked){
        caracteresPermitidos.push(caracteres.numeros)
    }
    if(simbolos.checked){
        caracteresPermitidos.push(caracteres.simbolos)
    }

}
function gerar(n){
    
    resultado = ''
    n = parseInt(n)
    if (isNaN(n) || n <= 0 || n>20){
        alert('Coloque um tamanho válido!')
        return
    }else if(!simbolos.checked && !numeros.checked && !abc.checked && !ABC.checked){
        alert('Coloque alguma especificação!')
    } else{
        verificar()
        let todosCaracteres = caracteresPermitidos.join('')
        for (let i = 0;i<n;i++){
            resultado+=todosCaracteres[Math.floor(Math.random() * todosCaracteres.length)]
        }
    }
    
    senha.innerHTML = `Password:  ${resultado}`
}
botaoGerar.addEventListener('click', () => {
    gerar(tamanhos.value)
})
document.querySelector('#copiar').addEventListener('click', () => {
    navigator.clipboard.writeText(resultado).then(() => {
      senha.innerHTML = `Password: Copied!`
      setTimeout(() => {
        senha.innerHTML = `Password:  ${resultado}`
      }, 1000)
    }).catch(err => {
      console.error('Erro ao copiar:', err)
    })
  })
//O que tem de errado na criação da senha?

//Tem algum erro? A função está executando sozinha!

