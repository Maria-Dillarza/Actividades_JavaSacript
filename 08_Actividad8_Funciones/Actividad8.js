
//Ejercicio1
console.log('Ejercicio 1') 
const searchWord = (sentence, word) => sentence.includes(word);
//Test
const result1 = searchWord('Hola mundo', 'perro')
console.log(result1);

//Ejercicio2
console.log('Ejercicio 2')
function sumaArray(numbers) {
  var sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return 'The sum of all the numbers is: ' + sum;
}
//Test
const result2 = sumaArray([1,2,3,4,10,11])
console.log(result2);

//Ejercicio 3
console.log('Ejercicio 3');
function isPalindrome(word) {
  const array = word.split('');
  const reverseArray = array.reverse();
  const reverseString = reverseArray.join('');
  if(reverseString == word){
    return true + ' ' + word + ' is a palindrome word'
  }
  else {
    return false + ' ' + word + ' is not a palindrome word'
  }
}
//Test
const result3 = isPalindrome('oso');
console.log(result3);

//Ejercicio 4
console.log('Ejercicio 4');
function temperatureConverter(temperature, scale) {
  if (scale == '°C') {
    fahrenheit = (temperature * 1.8) + 32;
    return temperature + scale + ' ' + 'is equivalent to ' + fahrenheit + '°F';
  } else {
    celsius = (temperature -32) / 1.8;
    return temperature + scale + ' ' + 'is equivalent to ' + celsius + '°C'
  }
}
//Test
const result4 = temperatureConverter(80, '°F');
console.log(result4);