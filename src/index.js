/// <reference types="jquery" />

fetch("https://pokeapi.co/api/v2/pokemon/")
.then(respuesta => respuesta.json())
.then(respuestaJSON => {
    console.log(respuestaJSON)

    Object.keys(respuestaJSON.results).forEach(nombrePokemon => {
        $("h4").append($(`<p name="nombre-pokemon">${nombrePokemon}</p>`));
    });

})
