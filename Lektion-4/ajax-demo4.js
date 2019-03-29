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
  
  let btn = document.getElementById('btn1');
  btn.addEventListener('click',function(){
    load('demo.json', demoCallback);
  });
  
 function demoCallback(xhr){
  const demo = document.getElementById('demo1');
  // Konvertering av JSON-strängen till ett JSON-objekt
  const user = JSON.parse(xhr.responseText);
  
  let result = '<ul>';

  result += '<li>'+ user.name;
  result += '<br>' + user.email;
  result += '</br>' + user.company.name + '</li>'
  result += '</ul>'
  demo.innerHTML = result;
 }