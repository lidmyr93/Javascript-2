//Callback demo

//Exempel 1 från MDN
//https://developer.mozilla.org/en-US/docs/Glossary/Callback_function

//Läs in data och skicka vidare till en annan funktion
function processUserInput(callback) {
    let name = prompt("Vad heter du?");
    //Anrop till en annan function som skickas in som argument till processUserInput
    callback(name);
}
// En funktion som behandlar datan, skickar till alert
function greeting(name) {
    alert("Hej " + name);
}

function greetingConsole(name){
    console.log('Hej ' + name);
}
/* processUserInput(greeting);
processUserInput(greetingConsole); */

//Exempel 2
//Synkron (Synchronous) callback

let myArray = ['a','b', 'c'];
console.log('Start');
//https://www.w3schools.com/jsref/jsref_foreach.asp
myArray.forEach(function(element){
    console.log(element);
})
console.log('Slut');

//Exempel 3
console.log('Asynkron (Asynchronous) callback');

console.log('Start');
setTimeout(function(){
    for (const element of myArray) {
        console.log(element);
    }
}, 10000);
//Vi går vidare till nästa sats och kommer tillbaka (callback) efter 10 skeunder
console.log('Slut');
