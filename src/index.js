/// <reference types="jquery" />

let nextURL = null;
let listaPokemon = document.querySelector('#lista-pokemon')


listarPokemons();


function listarPokemons(url){
    url = url || 'https://pokeapi.co/api/v2/pokemon'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(pokemon => {
        listadorDePokemon(pokemon.results);
        nextURL = pokemon.next
    })

    .catch(error => {
    console.log(error + " Error en la peticion");
    })
}

let pintarPokemon = ``

function listadorDePokemon(usuarios) {

    usuarios.map((pokemon) =>{

        pintarPokemon = `
        <a href=${pokemon.url} 
        target="_blank" rel="noopener noreferrer" name="nombre-pokemon">${pokemon.name}</a><br>
        
        `

        listaPokemon.innerHTML += pintarPokemon;
    })
}

document.querySelector("#cambiar-pagina").addEventListener("click",(e) =>{
    console.log('No anda')

    $("a").remove();
    $('br').remove();

    if(nextURL)
    listarPokemons(nextURL);
  });
















