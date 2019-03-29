//Ajax demo

function load(url, callback) {
    
    let xhr = new XMLHttpRequest();
    
    
    xhr.onreadystatechange = function() {
     
      if(this.readyState === 4 && this.status === 200){
          callback(this);
      }
    };
    xhr.open("GET", url, true);
    xhr.send();
  } //load
  
  /* let btn = document.getElementById('btn1');
  btn.addEventListener('click',function(){
    load(`https://cors.io/?http://api.namnapi.se/v2/names.json?limit=${numbval}`, demoCallback);
  }); */
  
  function demoCallback(xhr){
    const demo = document.getElementById('demo1');
    console.log(xhr);
    
    const user = JSON.parse(xhr.responseText);
    console.log(user.names.length);
    let result = '<ul>';
    let firstName = '';
    let lastName = '';
    //OBS user är en array i detta fall som innehåller ett objekt
    for(let i=0; i < user.names.length; i++){
      let people = user.names[i];
      firstName = people.firstname;
      lastName = people.surname;
      result += '<li>' + firstName+ ' ' + lastName + '</li>';
    }
    result += '</ul>'
    demo.innerHTML = result;
  };
  
  const number = document.getElementById('select-demo');
  let numbval;
  number.addEventListener('change',function(){
    numbval = this.value;
    load(`https://cors.io/?http://api.namnapi.se/v2/names.json?limit=${numbval}`, demoCallback);
    console.log(numbval);
 });

 