//Ejercicio1
console.log('Ejercicio 1')





//Ejercicio2
console.log('Ejercicio 2')
function sumaArray(numbers) {
  var sum = 0;
  for(let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

const result2 = sumaArray([1,2,3,4,10,11])
console.log(result2);

//Ejercicio 3
console.log('Ejercicio 3');
function isPalindrome(word) {
  const array = word.split('');
  const reverseArray = array.reverse();
  const reverseString = reverseArray.join('');
  if(reverseString == word){
    return word + ' is a palindrome word'
  }
  else {
    return word + ' is not a palindrome word'
  }
}
const result3 = isPalindrome('one');
console.log(result3);
