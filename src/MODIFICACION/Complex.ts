import { Arithmeticable } from './Aritmeticable';

/**
 * Clase que representa un número complejo.
 * Implementa la interfaz Arithmeticable que puede tener cualquier tipo de dato.
 * Contiene los métodos add, subtract, multiply y divide.
 * 
 */
export class Complex implements Arithmeticable<Complex> {
  /**
   * Constructor de la clase Complex.
   * Se encarga de inicializar los atributos de la clase.
   * @param real numero real del número complejo.
   * @param imaginary parte imaginaria del número complejo.
   */
  constructor(public real: number, public imaginary: number) {}

  /**
   * Método de suma de dos números complejos.
   * Lo que hace es sumar el número real de un número complejo por el número real del otro y viceversa.
   * @param other otro número complejo.
   * @returns retorna un nuevo número complejo que es el resultado de la suma.
   */
  add(other: Complex): Complex {
    const real = this.real + other.real;
    const imaginary = this.imaginary + other.imaginary;
    return new Complex(real, imaginary);
  }

  /**
   * Método que resta dos números complejos.
   * Lo que hace es restar el número real de un número complejo por el número real del otro y viceversa.
   * @param other otro número complejo.
   * @returns retorna un nuevo número complejo que es el resultado de la resta.
   */
  subtract(other: Complex): Complex {
    const real = this.real - other.real;
    const imaginary = this.imaginary - other.imaginary;
    return new Complex(real, imaginary);
  }

  /**
   * Método que multiplica dos números complejos.
   * Lo que hace es multiplicar el número real de un número complejo por el número real del otro y viceversa.
   * @param other otro número complejo.
   * @returns retorna un nuevo número complejo que es el resultado de la multiplicación.
   */
  multiply(other: Complex): Complex {
    const real = this.real * other.real - this.imaginary * other.imaginary;
    const imaginary = this.real * other.imaginary + this.imaginary * other.real;
    return new Complex(real, imaginary);
  }

  /**
   * Métod que divide dos números complejos.
   * Lo que hace es dividir el número real de un número complejo por el número real del otro y viceversa.
   * @param other otro número complejo.
   * @returns retorna un nuevo número complejo que es el resultado de la división.
   */
  divide(other: Complex): Complex {
    const denominator = other.real * other.real + other.imaginary * other.imaginary;
    const real = (this.real * other.real + this.imaginary * other.imaginary) / denominator;
    const imaginary = (this.imaginary * other.real - this.real * other.imaginary) / denominator;
    return new Complex(real, imaginary);
  }
}