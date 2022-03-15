//Ejercicio 1
var x = Number(prompt('Dame un número'));
var y= 1;
while (y <= x) {
    if(y % 5 === 0) {
        console.log(y);
        y++;
    }
}

//Ejercicio 2
var num = Number(prompt('Dame un número'));
var index = 1;
do {
    if(index % 5 === 0) {
        console.log(index);
    }
    index++;
} while (index <= num);

//Ejercicio3
for(var index = 1; index <= 50; index++) {
    if(index % 2 !== 0) {
        console.log(`${index} es número impar`);
    }
}