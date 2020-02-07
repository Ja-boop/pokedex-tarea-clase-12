/// <reference types="jquery" />

fetch("https://pokeapi.co/api/v2/pokemon/")
.then(respuesta => respuesta.json())
.then(respuestaJSON => {
    console.log(respuestaJSON.results);
    let listaNombreDePokemons;

    sacarLosNombresDeLosPokemon();

    
        
    
    

    
    

    
        function sacarLosNombresDeLosPokemon (){
        for(i = 0; i <= 20; i++){
            listaNombreDePokemons = respuestaJSON.results[0 + i].name;
            $("ul").append($(`<p name="nombre-pokemon">${listaNombreDePokemons}</p>`));
        }
        
    }
})

