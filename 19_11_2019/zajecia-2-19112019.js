/// powtorka

let nazwaZmiennej = "tekst";
const PI = 3.14;

if (typeof nazwaZmiennej === "string") {
  nazwaZmiennej = "tekst";
} else if (typeof nazwaZmiennej === "number") {
  nazwaZmiennej = "number";
} else {

}


switch (typeof nazwaZmiennej) {
case "string":
  console.log('->> string');
  break;
case "number":
  console.log('->> number');
  break;
default:
  console.log('->>> ....');
  break;
}

for (let i = 0, ; i < 10; i += 1) {
  console.log(i);
}
