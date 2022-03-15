//Ejercicio 1
var array = [1, 4, 6, 10, 22, 55, 46, 2, 5, 0];
var array2 = [];
var indexArray2 = 0;
for(var i = 0; i < array.length; i++) {
  if (array[i] > 3) {
    array2[indexArray2] = array[i];
    indexArray2++;
  }
}
console.log(array2);

//Ejercicio2
var emptyArray = [];
var contador = 0;
while(contador < 5) {
  emptyArray.push(contador);
  contador++;
}
console.log(emptyArray);

//Ejercicio2 sin push
var emptyArray1 = [];
var contador = 0;
while(contador < 5) {
  emptyArray1[contador] = contador;
  contador++;
}
console.log(emptyArray1);