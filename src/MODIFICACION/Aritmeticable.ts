
/**
 * Interface que define las operaciones aritméticas básicas.
 * @param T Tipo de dato sobre el que se realizarán las operaciones aritméticas.
 * Contiene los métodos add, subtract, multiply y divide.
 * @returns T Tipo de dato sobre el que se realizarán las operaciones aritméticas.
 */
export interface Arithmeticable<T> {
  add(other: T): T;
  subtract(other: T): T;
  multiply(other: T): T;
  divide(other: T): T;
}