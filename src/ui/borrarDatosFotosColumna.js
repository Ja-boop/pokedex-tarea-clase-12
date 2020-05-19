export function borrarDatosFotosColumnas(){
    $(".nombre-pokemon").remove();
        $('br').remove();
        $('.imagen-pokemon').remove();
        $(tipoPokemon).text("");
        $('#p-tipo-pokemon').addClass('hide');
}