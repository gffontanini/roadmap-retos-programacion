/*
 * EJERCICIO:
 * - Crea ejemplos utilizando todos los tipos de operadores de tu lenguaje:
 *   Aritméticos, lógicos, de comparación, asignación, identidad, pertenencia, bits...
 *   (Ten en cuenta que cada lenguaje puede poseer unos diferentes)
 * - Utilizando las operaciones con operadores que tú quieras, crea ejemplos
 *   que representen todos los tipos de estructuras de control que existan
 *   en tu lenguaje:
 *   Condicionales, iterativas, excepciones...
 * - Debes hacer print por consola del resultado de todos los ejemplos.
 *
 * DIFICULTAD EXTRA (opcional):
 * Crea un programa que imprima por consola todos los números comprendidos
 * entre 10 y 55 (incluidos), pares, y que no son ni el 16 ni múltiplos de 3.
 *
 * Seguro que al revisar detenidamente las posibilidades has descubierto algo nuevo.
 */

let a = 2;
let b = 10;

//Operadores aritméticos

let addition = a + b; // 12
let substraction = b - a; // 8
let multiplication = a * b; // 20
let exponentiation = b ** a; //100
let division = b / a; // 5
let modulus = b % a; // 0
let increment = ++a; // 3
let decrement = --b; // 9

console.log(
	addition,
	substraction,
	multiplication,
	exponentiation,
	division,
	modulus,
	increment,
	decrement
);

//Comparison operators

let equal = 30 == 20; // false
let equalValueNType = 30 === "30"; // false
let notEqual = 30 !== 20; // true
let notEqualValueNType = 30 !== "30"; // true
let greater = 30 > 20; // true
let less = 30 < 20; // false
let greaterOrEqual = 30 >= 20; //true
let lessOrEqual = 30 <= 20; // false

console.log(
	equal,
	equalValueNType,
	notEqual,
	notEqualValueNType,
	greater,
	less,
	greaterOrEqual,
	lessOrEqual
);

//logical operators

let and = 20 > 10 && 10 > 5; //true
let or = 10 > 5 || 10 < 5; //true (devuelve true si alguna de las operaciones es correcta)
let not = !(10 < 5); //true

console.log(and, or, not);

//type operators

let numberVariable = 351;
let stringVariable = "351";

console.log(typeof numberVariable); // number
//instanceof no sé como se utiliza

//tampoco los bitwise operators

//DIFICULTAD EXTRA

for (let i = 10; i <= 56; i++) {
	if (i % 2 === 0 && i !== 16 && i % 3 !== 0) {
		console.table(i);
	}
}
