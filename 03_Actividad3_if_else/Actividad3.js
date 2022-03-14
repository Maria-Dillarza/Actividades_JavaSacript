//Ejercicio 1
var numero= Number(prompt('Ingresa un número'));
if(numero % 2 == 0) {
  console.log(numero, ' es divisible entre 2.');
} else {
  console.log(numero, ' no es divisible entre 2.')
}

//Ejercicio 2
var numero= Number(prompt('Ingresa un número'));
if(numero % 2 == 0) {
  alert(numero + ' es par.');
} else {
  alert(numero + ' no es par.');
}

//Ejercicio 3
var numero= Number(prompt('Ingresa un número.'));
if(numero == 1000) {
  alert('GANASTE UN PREMIO');
} else {
  alert(numero + ' Lo sentimos, sigue participando.');
}

//Ejercicio 4
var num1= Number(prompt('Ingresa un número.'));
var num2= Number(prompt('Ingresa un segundo número.'));
if(num1 < num2) {
  alert(num1 + ' es el menor');
} else {
    alert(num2 + ' es el menor');
}
 //Ejercicio 5
var num1= 10
var num2= 20
var num3= 100
if(num1 > num2 && num1 > num3) {
  alert(num1 + ' es el mayor');
} else if (num2 > num1 && num2 > num3) {
  alert(num2 + ' es el mayor');
} else if (num3 > num1 && num3 > num2) {
  alert(num2 + ' es el mayor');
}