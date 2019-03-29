// Manipulera innehåll med jQuery

$(document).ready(function(){

    //Metoden html()
    //Hämta html-kod
    let $demo = $('#demo1').html();
    console.log($demo);7

    //Ändra html-kod
    $('#demo2').html('<em>Här kommer ny html-kod</em>');

    //Metoden text()
    //Hämta text
    $demo = $('#demo3').text();
    console.log($demo);

    //Metoden val()
    //Hämta text som finns i input-fält

    $demo = $('#demo5').val();
    console.log($demo);

    //Metoden remove()

    $('#demo6').remove();

    //Metoden hide()
    $('#demo7').hide();
}); //ready