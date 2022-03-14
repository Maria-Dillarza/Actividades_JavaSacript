//Ejercicios se prueban enconsola de navegador

//Ingresa un número y multiplicalo por 2
var numero = Number(prompt('Ingresa un Núero'))
var total = numero * 2
console.log(total)

//Ingresa 2 números y muestra en pantalla el resultado de restar los numeros 
var numero1 = prompt('Ingresa un número')
var numero2 = prompt('Ingresa un segundo número') 
var total = numero1 - numero2
document.write(total)

//Área de un cículo
var  radio = 5.3
var area = Math.PI * (radio**2)
document.write('El area de un circulo con radio 5.3 es: ', area)

//Área de un rombo
var p = 5
var D = 8
var d = 6
var area = (D * d) / 2
document.write('El area del rombo es: ', area , 'cm')
