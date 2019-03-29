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
  
  
  
  //en callback funktion som skickas till funktionen load
  function demo1(xhr){
    const demo1 = document.getElementById('demo1');
    demo1.innerHTML = xhr.responseText;
  };
  //en callback funktion som skickas till funktionen load
  function demo2(xhr){
    const demo2 = document.getElementById('demo2');
    demo2.innerHTML = xhr.responseText;
  };

  
  const btn1 = document.getElementById('btn1');
  btn1.addEventListener('click', function(){
    load('demo.txt', demo1);
  });
  
  const btn2 = document.getElementById('btn2');
  btn2.addEventListener('click', function(){
    load('demo2.txt', demo2);
  });
  
  //Hämta data från flera olika textfiler
  const btn3 = document.getElementById('btn3');
  btn3.addEventListener('click', function(){
    load('demo.txt', demo3);
    load('demo2.txt', demo3);

  });

  function demo3(xhr){
    const demo1 = document.getElementById('demo3');
    demo1.innerHTML += xhr.responseText;
  }