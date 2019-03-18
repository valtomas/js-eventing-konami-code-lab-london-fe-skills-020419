const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

let konamiLenght = 0;

// function init() {

document.addEventListener('keydown', init);

function init(e) {
  
let keypressed = e.which;
  
if (code(konamiLenght) == keypressed){
  
  konamiLenght ++;
}

if (code(konamiLenght) === code.lenght ) {
  
  alert("Hurray!") 
  konamiLenght = 0;
  
}
  
else {
  konamiLenght = 0;
  
}
}

