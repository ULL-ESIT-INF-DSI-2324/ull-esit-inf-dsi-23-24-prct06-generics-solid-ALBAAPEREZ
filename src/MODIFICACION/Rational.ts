import { Arithmeticable } from './Aritmeticable';

/**
 * Clase que representa un número racional.
 * Implementa la interfaz Arithmeticable que puede tener cualquier tipo de dato.
 * Contiene los métodos add, subtract, multiply y divide.
 * 
 */
export class Rational implements Arithmeticable<Rational> {
  /**
   * Constructor de la clase Rational.
   * Se encarga de inicializar los atributos de la clase.
   * @param numerator numerador del número racional.
   * @param denominator denominador del número racional.
   */
  constructor(public numerator: number, public denominator: number) {}

  /**
   * Métod de suma de dos números racionales.
   * Lo que hace es sumar el numerador de un número racional por el denominador del otro y viceversa.
   * @param other otro número racional.
   * @returns retorna un nuevo número racional que es el resultado de la suma.
   */
  add(other: Rational): Rational {
    const numerator = this.numerator * other.denominator + other.numerator * this.denominator;
    const denominator = this.denominator * other.denominator;
    return new Rational(numerator, denominator);
  }

  /**
   * Método de resta de dos números racionales.
   * Lo que hace es restar el numerador de un número racional por el denominador del otro y viceversa.
   * @param other otro número racional.
   * @returns retorna un nuevo número racional que es el resultado de la resta.
   */
  subtract(other: Rational): Rational {
    const numerator = this.numerator * other.denominator - other.numerator * this.denominator;
    const denominator = this.denominator * other.denominator;
    return new Rational(numerator, denominator);
  }

  /**
   * Método que multiplica dos números racionales.
   * Lo que hace es multiplicar el numerador de un número racional por el numerador del otro y viceversa.
   * @param other otro numero racional.
   * @returns retorna un nuevo número racional que es el resultado de la multiplicación.
   */
  multiply(other: Rational): Rational {
    const numerator = this.numerator * other.numerator;
    const denominator = this.denominator * other.denominator;
    return new Rational(numerator, denominator);
  }

  /**
   * Método que divide dos números racionales.
   * Lo que hace es dividir el numerador de un número racional por el denominador del otro y viceversa.
   * @param other otro número racional.
   * @returns retorna un nuevo número racional que es el resultado de la división.
   */
  divide(other: Rational): Rational {
    const numerator = this.numerator * other.denominator;
    const denominator = this.denominator * other.numerator;
    return new Rational(numerator, denominator);
  }

  /**
   * Método que hace el abs de un número racional.
   * Lo que hace es devolver el valor absoluto del numerador y del denominador.
   * @returns retorna un nuevo número racional que es el resultado del valor absoluto.
   * 
   */
  abs(): Rational {
    return new Rational(Math.abs(this.numerator), Math.abs(this.denominator));
  }

  /**
   * Método que simplifica un número racional.
   * Lo que hace es simplificar el numerador y el denominador.
   * @returns retorna un nuevo número racional que es el resultado de la simplificación.
   */
  simplify(): Rational {
    const gcd = this.gcd(this.numerator, this.denominator);
    return new Rational(this.numerator / gcd, this.denominator / gcd);
  }

  /**
   * Método que calcula el máximo común divisor de dos números.
   * Lo que hace es calcular el máximo común divisor de dos números.
   * @param a primer número.
   * @param b segundo número.
   * @returns retorna el máximo común divisor de los dos números.
   */
  gcd(a: number, b: number): number {
    if (b === 0) {
      return a;
    }
    return this.gcd(b, a % b);
  }
}