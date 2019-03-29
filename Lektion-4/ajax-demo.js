//Ajax demo

function load() {
  //Lite om objektet XMLHttpRequest
  let xhr = new XMLHttpRequest();
  console.log(xhr);
  //Skicka en request (förfrågan) till en lokal server

  //readyState är en egenskap som finna i xhr
  // Vi kör en callback vid ändring i readyState
  /*0: request not initialized 
    1: server connection established
    2: request received 
    3: processing request 
    4: request finished and response is ready */
  xhr.onreadystatechange = function() {
    console.log(this.readyState);
    console.log(this.status);
    if(this.readyState === 4 && this.status === 200){
        //Här kan vi bearbeta data
        const demo1 = document.getElementById('demo1');
        demo1.innerHTML = this.responseText;
        
    }
  };
  //Steg 1
  xhr.open("GET", "demo.txt", true); //true anger om det ska köras asynkront (false = synkront)
  xhr.open("GET", "demo2.txt", true); //true anger om det ska köras asynkront (false = synkront)
  //Steg 2
  xhr.send();
} //load

load();