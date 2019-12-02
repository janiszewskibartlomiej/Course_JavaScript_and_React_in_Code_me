/*
Popracuj z filmikiem. Pobaw się definicjami zmiennych w przestrzeni globalnej i w funkcji. Przejrzyj metody listy Array szczegolnie:
.push()
.map()
.forEach()
.filter()
.reduce()
.includes()
.slice()

wyszukaj przykłady na stronach mdn (np. Google Search: mdn array map)

Spisz pytania. Jezeli cenis sobie anonimowosc - przyslij mi pytania mailem/podio, lub zadaj je podczas zajec - powtorka
*/

//JavaScript Array push() Method
//The unshift() method adds new items to the beginning of an array, and returns the new length.

let fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.push("Kiwi");
//result -> ["Banana", "Orange", "Apple", "Mango", "Kiwi"];


//JavaScript Array map() Method
//The map() method creates a new array with the results of calling a function for every array element.
//The map() method calls the provided function once for each element in an array, in order.

var numbers = [65, 44, 12, 4];
var newarray = numbers.map(myFunction)

function myFunction(num) {
  return num * 10;
}

document.getElementById("demo").innerHTML = newarray;;

//result -> newarray = [650,440,120,40];

//JavaScript Array forEach() Method
//The forEach() method calls a function once for each element in an array, in order.

var sum = 0;
var numbers = [65, 44, 12, 4];
numbers.forEach(myFunction);

function myFunction(item) {
  sum += item;
  document.getElementById("demo").innerHTML = sum;
}

//result -> sum = 125


//JavaScript Array filter() Method
//The filter() method creates an array filled with all array elements that pass a test (provided as a function).

var ages = [32, 33, 16, 40];

function checkAdult(age) {
  return age >= 18;
}

function myFunction() {
  document.getElementById("demo").innerHTML = ages.filter(checkAdult);
}

// result -> 32,33,40

//JavaScript Array reduce() Method
//The reduce() method reduces the array to a single value.
//The reduce() method executes a provided function for each value of the array (from left-to-right).
//The return value of the function is stored in an accumulator (result/total).

var numbers = [175, 50, 25];

document.getElementById("demo").innerHTML = numbers.reduce(myFunc);

function myFunc(total, num) {
  return total - num;
}

//result -> 100

var numbers = [15.5, 2.3, 1.1, 4.7];

function getSum(total, num) {
  return total + Math.round(num);
}

function myFunction(item) {
  document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);
}

//result -> 24

var total = [0, 1, 2, 3].reduce(function(a, b) {
  return a + b;
});
// total == 6

var flattened = [[0, 1], [2, 3], [4, 5]].reduce(function(a, b) {
  return a.concat(b);
});
// flattened is [0, 1, 2, 3, 4, 5]


//JavaScript Array includes() Method
//The includes() method determines whether an array contains a specified element.
//This method returns true if the array contains the element, and false if not.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var n = fruits.includes("Mango");

// result -> true


//JavaScript Array slice() Method
//The slice() method returns the selected elements in an array, as a new array object.
//The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3);

//result ->  Orange,Lemon

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]
