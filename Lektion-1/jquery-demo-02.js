// jQuery selectors

$(document).ready(function() {
  // Type selectors (element selector)
  //$('p').hide();

  // ID-selector
  $("#demo").hide();

  // class-selectorer
  $(".demo").hide();

  // Universal-selector
  // $('*').hide();

  //Group of selectors
  //$("h3,h4").hide();

  //Descendant selector
  $("li a").hide();

  //Child combinator selector
  $("div > p").hide();

  //Sibling combinator
  $('div + p').hide();

  // Subsequent-sibling
  $('article ~ p').hide();

  //This selector (viktig)
  $('p').click(function(){
      $(this).hide();
  });
});
