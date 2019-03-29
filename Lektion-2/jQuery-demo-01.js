$(document).ready(function(){
    //Lägga till en css-style
    $('#demo1').click(function(){
        $('.demo1').css('color', 'gold')
    });//demo1
    
    //Lägga till flera css-stylar
    $('#demo2').click(function(){
        $('.demo2').css({
            'color' : '#FFF',
            'background-color' :'#000',
            'font-size' : '2em',
        });
        let $myColor = $('.demo2').css('color');
        console.log($myColor);
    });//demo2

    //Lägga till en CSS-klass
    $('#demo3').click(function(){
        $('.demo3').addClass('blue');
    });//demo3

    //Lägga till en Bootstrap-klass
    $('#demo4').click(function(){
        $('.demo4').addClass('alert alert-success')
    });//demo5

    //Ta bort en Bootstrap-klass
    $('#demo5').click(function(){
        $('.demo4').removeClass('alert alert-success')
    });//demo5

    //Växla en Bootstrap-klass
    $('#demo6').click(function(){
        $('.demo4').toggleClass('alert alert-success');
    });//demo6

    //min lösning
   /*  $('#demo7').click(function(){
        let test = $('#demo7').text();
        console.log(test);
        if(test === test){
            $('.demo7').addClass('alert alert-success');
            $('#demo7').text('Ta bort');
        }
        else{
            $('.demo7').removeClass('alert alert-success');
            $('#demo7').text('Lägg till');
        }


    });//demo7 */

    // Bättre lösning
    $('#demo7').click(function(){
        $('.demo7').toggleClass('alert alert-success');
        //Ändra text på knappen
        ($(this).text() === 'Lägg till')? $(this).text('Ta bort'):  $(this).text('Lägg till');

        //Ändra färg på knappen
        $(this).toggleClass('btn-danger');
    });

//Visa alla knappar med button klassen btn-primare
$('button').addClass('btn-primary mb-1');
    
}); // ready