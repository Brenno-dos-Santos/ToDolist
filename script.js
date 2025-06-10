
//definir constantes para uso no código
const btnadd =document.getElementById('btn-add');
const tarefa = document.getElementById('tarefa')
const tastlist = document.getElementById('tasklist')
const titulo = document.getElementById('titulo')

let nome = prompt("qual o seu nome? ")
titulo.innerHTML = `Lista de tarefa: ${nome}`;
// acompanha o evento de clique do botão adicionar tarefa
btnadd.addEventListener("click",criaTarefa);

function criaTarefa(){
    

}