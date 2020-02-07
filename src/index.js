/// <reference types="jquery" />

fetch("https://pokeapi.co/api/v2/pokemon/")
.then(respuesta => respuesta.json())
.then(respuestaJSON => {
    console.log(respuestaJSON.results);
    let listaNombreDePokemons;
    let urlDePokemon;

        sacarElNombreYURLDeLosPokemon();

    
        
    
    

    
    

    
        function sacarElNombreYURLDeLosPokemon (){
        for(i = 0; i <= 20; i++){
            listaNombreDePokemons = respuestaJSON.results[0 + i].name;
            urlDePokemon = respuestaJSON.results[0 + i].url;

            $("ul").append($(`<a href=${urlDePokemon} 
            target="_blank" rel="noopener noreferrer" name="nombre-pokemon">${listaNombreDePokemons}</a><br>`));
        }
        
        }
})

