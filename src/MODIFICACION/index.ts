
// Menu principal donde se comprueba el correcto funcionamiento de las clases y métodos.
// Cree instancias de la clase genérica 'ArithmeticableCollection' a partir de sus clases 'Complex' y 'Rational' y demuestre su correcto funcionamiento.

import { ArithmeticableCollection } from './AritmeticableColletion';
import { Complex } from './Complex';
import { Rational } from './Rational';

// Creamos una colección de números complejos
const complexCollection = new ArithmeticableCollection<Complex>();
complexCollection.addArithmeticable(new Complex(1, 2));
complexCollection.addArithmeticable(new Complex(3, 4));
complexCollection.addArithmeticable(new Complex(5, 6));
complexCollection.addArithmeticable(new Complex(7, 8));
console.log(complexCollection.getNumberOfArithmeticables()); // Debería imprimir 4

// Creamos una colección de números racionales
const rationalCollection = new ArithmeticableCollection<Rational>();
rationalCollection.addArithmeticable(new Rational(1, 2));
rationalCollection.addArithmeticable(new Rational(3, 4));
rationalCollection.addArithmeticable(new Rational(5, 6));
rationalCollection.addArithmeticable(new Rational(7, 8));
rationalCollection.addArithmeticable(new Rational(9, 10));
console.log(rationalCollection.getNumberOfArithmeticables()); // Debería imprimir  5

// Obtenemos un elemento de cada colección
const complex = complexCollection.getArithmeticable(0);
console.log(complex); // Debería imprimir el primer número complejo

const rational = rationalCollection.getArithmeticable(0);
console.log(rational); // Debería imprimir el primer número racional

///// OPERACIONES ARITMÉTICAS  DE NUMEROS COMPLEJOS 
// Suma de dos números complejos
console.log(' ');
console.log(' ');
console.log('OPERACIONES ARITMÉTICAS DE NUMEROS COMPLEJOS');
console.log(' ');
console.log('Suma de todos los números complejos: ');
const sumComplex = complexCollection.sum();
console.log(sumComplex); // Debería imprimir el resultado de la suma de los números complejos


// Resta de dos números complejos
console.log(' ');
console.log('Resta de todos los números complejos: ');
const subComplex = complex.subtract(complexCollection.getArithmeticable(1));
console.log(subComplex); // Debería imprimir el resultado de la resta de los números complejos


// Multiplicación de dos números complejos
console.log(' ');
console.log('Multiplicación de todos los números complejos: ');
const multComplex = complex.multiply(complexCollection.getArithmeticable(1));
console.log(multComplex); // Debería imprimir el resultado de la multiplicación de los números complejos

// División de dos números complejos
console.log(' ');
console.log('División de todos los números complejos: ');
const divComplex = complex.divide(complexCollection.getArithmeticable(1));
console.log(divComplex); // Debería imprimir el resultado de la división de los números complejos


///// OPERACIONES ARITMÉTICAS  DE NUMEROS RACIONALES

// Suma de dos números racionales
console.log(' ');
console.log(' ');
console.log('OPERACIONES ARITMÉTICAS DE NUMEROS RACIONALES');
console.log(' ');
console.log('Suma de todos los números racionales: ');
const sumRational = rationalCollection.sum();
console.log(sumRational); // Debería imprimir el resultado de la suma de los números racionales

// Resta de dos números racionales
console.log(' ');
console.log('Resta de todos los números racionales: ');
const subRational = rational.subtract(rationalCollection.getArithmeticable(1));
console.log(subRational); // Debería imprimir el resultado de la resta de los números racionales

// Multiplicación de dos números racionales
console.log(' ');
console.log('Multiplicación de todos los números racionales: ');
const multRational = rational.multiply(rationalCollection.getArithmeticable(1));
console.log(multRational); // Debería imprimir el resultado de la multiplicación de los números racionales

// División de dos números racionales
console.log(' ');
console.log('División de todos los números racionales: ');
const divRational = rational.divide(rationalCollection.getArithmeticable(1));
console.log(divRational); // Debería imprimir el resultado de la división de los números racionales
