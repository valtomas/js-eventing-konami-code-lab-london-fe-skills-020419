const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

let konamiLenght = 0;

function init() {
  
  document.body.addEventListener("keydown", KonamiListener);
}



function KonamiListener(e) {
  
let keypressed = parseInt(e.detail || e.which);
console.log (keypressed);

if (code(konamiLenght) === keypressed){
  konamiLenght ++;
}

if (konamiLenght === code.lenght ) {
  
  alert("Hurray!"); 
  konamiLenght = 0;
  
}
  
else {
  konamiLenght = 0;
  
}
}


