/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator() {
  this.sum = (a, b) => a + b;
  this.subtraction = (a, b) => a - b;
  this.multiplication = (a, b) => a * b;
  this.division = (a, b) => a / b;
}

let calc = new Calculator();
console.log(
  calc.sum(3, 2),
  calc.subtraction(3, 2),
  calc.multiplication(3, 2),
  calc.division(3, 2)
);
