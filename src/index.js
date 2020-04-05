/// <reference types="jquery" />

let nextURL = null;
let listaPokemon = document.querySelector('#lista-pokemon');
let pokemones = document.querySelectorAll('.nombre-pokemon');
let tipoPokemon = document.querySelector('#strong-tipo-pokemon');
const fotoPokemon = document.querySelector('#lista-imagenes-pokemon');
const barraDeBusqueda = document.querySelector('#barra-busqueda');
let pokemonesBarraBusqueda = [];


barraDeBusqueda.addEventListener('keyup', (e) => {
    const searchString = e.target.value.toLowerCase().match(/^[A-Za-z\-]+/);
    const pokemonesFiltrados = pokemonesBarraBusqueda.filter((pokemones) => {
        return (
            pokemones.name.toLowerCase().includes(searchString)
        );  
    });

    if(searchString !== null) {
        listadorDePokemon(pokemonesFiltrados);
    } else {
        $(".nombre-pokemon").remove();
        $('br').remove();
        $('.imagen-pokemon').remove();
        $(tipoPokemon).text("");
        $('#p-tipo-pokemon').addClass('hide');
    }

    $(".nombre-pokemon").click((e) => {
                let linkDelPokemon = e.currentTarget.value;
                fetch(linkDelPokemon)
                    .then(respuesta => respuesta.json())
                    .then(pokemon => {
                        console.log(pokemon);
                        mostrarTipoPokemon(pokemon.types);
                        mostrarImagenPokemon(pokemon);
                    })

                    .catch(error => {
                        console.log(error + " Error en la peticion");
                    })

                e.preventDefault()
            })
    
});


listarPokemons();


function listarPokemons(url) {
    url = url || 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=964'

    fetch(url)
        .then(respuesta => respuesta.json())
        .then(pokemon => {
            pokemonesBarraBusqueda = pokemon.results;
            nextURL = pokemon.next
            
        })

        .catch(error => {
            console.log(error + " Error en la peticion");
        })
}

function mostrarImagenPokemon(pokemon) {
   
    $('.imagen-pokemon').remove();
    $(fotoPokemon).append(`<p class="imagen-pokemon">Male: <img src=${pokemon.sprites.front_default}></p>`)
    $(fotoPokemon).append(`<p class="imagen-pokemon">Male Shiny: <img  src=${pokemon.sprites.front_shiny}></p>`)

    if (pokemon.sprites.front_female !== null) {
        $(fotoPokemon).append(`<p class="imagen-pokemon">Female: <img  src=${pokemon.sprites.front_female}></p`)
        $(fotoPokemon).append(`<p class="imagen-pokemon">Female Shiny: <img  src=${pokemon.sprites.front_shiny_female}></p>`)
    }
}

function mostrarTipoPokemon(pokemonTypes) {
    $('#p-tipo-pokemon').removeClass("hide");
    $('.tipo-pokemon').removeClass("hide");
    $(tipoPokemon).text("");

    pokemonTypes.map((pokemon) => {
        ponerTipoPokemon = `
            ${pokemon.type.name} 
        `
        tipoPokemon.innerHTML += ponerTipoPokemon;
    })



}



function listadorDePokemon(usuarios) {

    $(".nombre-pokemon").remove();
    $('br').remove();

    usuarios.map((pokemon) => {
        ponerPokemon = `
        <button value=${pokemon.url} 
        target="_blank" rel="noopener noreferrer" class="nombre-pokemon" style="width: 120px;text-transform: uppercase;">${pokemon.name}</button><br>
        
        `

        listaPokemon.innerHTML += ponerPokemon;
    })
}

/*document.querySelector("#cambiar-pagina").addEventListener("click", (e) => {
    console.log('El boton funciona')

    $(".nombre-pokemon").remove();
    $('br').remove();

    if (nextURL)
        listarPokemons(nextURL);
});
*/















