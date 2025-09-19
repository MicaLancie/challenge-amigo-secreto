//declaracion de funcion
let amigos = [];

function agregarAmigo(){
    let nombre = document.getElementById('amigo').value;

if(nombre == ''){ //si no se ingresó ninguno nombre aparece este aviso
alert('Por favor, ingrese un nombre')
}else{
    amigos.push(nombre);
    listaAmigos();
}

limpiar();
}
//if donde el campo es vacío, else si no es vacio

function limpiar(){
 document.querySelector('#amigo').value = '';
} //funcion que limpia lo ingresado

function listaAmigos(){
let lista = document.getElementById('listaAmigos');
let htmlLista = '';//limpia la lista antes de cargarla

//array que recorre la lista amigos
for(let i = 0; i < amigos.length; i++){
  htmlLista += `<li>${amigos[i]}</li>`;
}
 lista.innerHTML = htmlLista;
}

//sorteo aleatorio
function sortearAmigo(){
    
    if( amigos.length == 0){
    alert("No hay amigos para sortear");
    return;
        }
        let indice = Math.floor(Math.random()*amigos.length);
        let ganador = amigos[indice];
        
    document.getElementById('resultado').innerHTML = `¡El amigo sorteado es: ${ganador}!`;
}
