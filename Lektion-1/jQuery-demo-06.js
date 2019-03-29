
$(document).ready(function(){
    let $testUl = $('ul');
   
    //append()
    $testUl.append('<li>Append</li>');

    //prepend()
    $testUl.prepend('<li>prepend</li>');

    //before()
    $testUl.before('<li>before</li>');
    
    //after()
    $testUl.after('<li>after</li>');

}); //READY