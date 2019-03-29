//jQuery caching

$(document).ready(function(){

    //Caching innebär att man skapar en referens till ett jQuery objekt
    let $myListItems = $('li');
    console.log($myListItems); 
    console.log($myListItems.toArray()); 
    
    $myListItems.addClass('hot');

}); // ready