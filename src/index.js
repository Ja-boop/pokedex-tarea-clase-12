/// <reference types="jquery" />

fetch("https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20")
.then(respuesta => respuesta.json())
.then(respuestaJSON => {

    console.log(respuestaJSON.next);
    console.log(respuestaJSON.results);
    let listaNombreDePokemons;
    let urlDePokemon;

    
    for(i = 0; i < 20; i++){
        listaNombreDePokemons = respuestaJSON.results[i].name;
        urlDePokemon = respuestaJSON.results[i].url;

        $("ul").append($(`<a href=${urlDePokemon} 
        target="_blank" rel="noopener noreferrer" name="nombre-pokemon">${listaNombreDePokemons}</a><br>`));
    }
        
    
})

