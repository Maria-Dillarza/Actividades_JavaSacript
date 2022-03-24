//Inicializando nuestro contador
let count = 0;
let counterElement = document.getElementById('contador');

function increment() {
  count++;
  counterElement.innerHTML = count;
}

function decrement() {
  if(count > 0) {
    count--;
    counterElement.innerHTML = count;
  }
}
