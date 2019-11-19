var a; typeof a;
"object"
var s = '10'; s +=1;
"101"
!!'false';
true
!!undefined;
false
typeof-Infinity;
"number"
10 % 0;
NaN
undefined == null;
true
undefined === null;
false
false === ";
VM522:1 Uncaught SyntaxError: Invalid or unexpected token
a = 3e+3;a+=1;
3001
let z; typeof z;
"undefined"
z = 10
10
const z = 'Hmmm...';
VM661:1 Uncaught SyntaxError: Identifier 'z' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM661:1
const c = 'No popatrz';
VM718:1 Uncaught SyntaxError: Identifier 'c' has already been declared
    at <anonymous>:1:1
(anonymous) @ VM718:1
c = 'Oj tak.';
"Oj tak."
var a, v; v = a || 10;
3001
v
3001
a = 'ddd'
"ddd"
v
3001
a
"ddd"
