$(document).ready(function() {
    //Click
    $("#demo1").click(function() {
      $(this).hide();
    });
    //Dubbel click
    $("#demo2").dblclick(function() {
      $(this).hide();
    });

    //Mouseenter
    $("#demo3").mouseenter(function() {
      $(this).text("Demo på mouseenter");
    });
    //Mouseout
    $("#demo3").mouseout(function() {
      $(this).text("Demo på mouseout");
    });
    //Mousedown
    $("#demo4").mousedown(function() {
      $(this).text("Demo på mousedown");
    });
    //Mouseup
    $("#demo4").mouseup(function() {
      $(this).text("Demo på mouseup");
    });
    //hover
    $("#demo5").hover(inFun, outFun);

    function inFun() {
      $(this).css("background-color", "red");
    }
    function outFun() {
      $(this).css("background-color", "green");
    }
    //hover alternativ syntax
    /*  $('#demo5').hover(function(){
        $(this).css('background-color', 'red');
    }, 
    function(){
        $(this).css('background-color', 'green');
    }); */

    //focus
    $("#demo6 input").focus(function() {
      $(this).css("background-color", "red");
    });
    //blur
    $("#demo6 input").blur(function() {
      $(this).css("background-color", "white");
    });

    //Metoden on
    $('#demo7')
        .on('click', function(){
            $(this).html('Click har aktiverats');
         })
         .on('dblclick', function(){
             $(this).html('dblclick har aktiverats');
         });
  }); //ready