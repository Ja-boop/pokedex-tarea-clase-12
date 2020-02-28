/// <reference types="jquery" />

let nextURL = null;
let listaPokemon = document.querySelector('#lista-pokemon');
let pokemones = document.querySelectorAll('.nombre-pokemon');
let listaDeEstadisticasYFotos = document.querySelector('#estadisticas-fotos');


listarPokemons();


function listarPokemons(url) {
    url = url || 'https://pokeapi.co/api/v2/pokemon'

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(pokemon => {
    
        listadorDePokemon(pokemon.results);
        nextURL = pokemon.next

        $(".nombre-pokemon").click( (e) =>  {
        
            let linkDelPokemon = e.currentTarget.value;  
        
            fetch(linkDelPokemon)
            .then(respuesta => respuesta.json())
            .then(pokemon => {

                console.log(pokemon.types[0].type.name);

                mostrarFotosYEstadisticas(pokemon);

            })

        e.preventDefault()
        })

    

    })

    .catch(error => {
        console.log(error + " Error en la peticion");
    })
}

let ponerPokemon = ``
let ponerFotosYEstadisticas = ``

function mostrarFotosYEstadisticas(pokemon) {

    $(listaDeEstadisticasYFotos).append(`<p>${pokemon.types[0].type.name}</p>`)

}

function listadorDePokemon(usuarios) {

    usuarios.map((pokemon) => {

        ponerPokemon = `
        <button value=${pokemon.url} 
        target="_blank" rel="noopener noreferrer" class="nombre-pokemon">${pokemon.name}</button><br>
        
        `
      
        listaPokemon.innerHTML += ponerPokemon;
    })
}

document.querySelector("#cambiar-pagina").addEventListener("click", (e) => {
    console.log('El boton funciona')

    $(".nombre-pokemon").remove();
    $('br').remove();

    if (nextURL)
        listarPokemons(nextURL);
});
















