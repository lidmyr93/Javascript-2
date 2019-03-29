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
  
  
  
 let btn1 = document.getElementById('btn1');
 btn1.addEventListener('click', function(){
     load('cd_catalog.xml', demoCallback);
 });


 function demoCallback(xhr){

   let xml = xhr.responseXML;

   
   let titles = xml.getElementsByTagName('TITLE');
   let artists = xml.getElementsByTagName('ARTIST');
  
   
   let result = '<table>';
       result += '<thead><tr><td>Title</td><td>Artist</td></tr></thead>';
    //title är en HTMLCollection so liknar en array
    //Man får iterera över en Collection
    //Men får inte använda forEach
    //eller andra metoder som används på arrayer
    for (let i = 0; i < titles.length; i++){
      result += '<tr><td>' + titles[i].textContent + '</td><td>'+artists[i].textContent+'</td></tr>';
    };
    
    result += '</ol>';
    const demo = document.getElementById('demo1');
    demo.innerHTML = result;
  }
  