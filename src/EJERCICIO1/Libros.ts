import { Enser } from './Enser';

/**
 * Clase que representa un libro
 * Los libros son enseres que se trasladan de un lugar a otro.
 * Cada libro tiene un nombre, una cantidad, una descripción y un peso.
 * @param nombre nombre del libro
 * @param cantidad cantidad de libros
 * @param descripcion descripción del libro
 * @param peso peso del libro
 * @param toString función que devuelve la representación en string de un libro
 */
export class Libro implements Enser {
  nombre: string;
  cantidad: number = 1;
  descripcion: string = 'Libro';
  peso: number;

  /**
   * Función que devuelve la representación en string de un libro
   * Devuelve un string con el nombre, la descripción, la cantidad y el peso del libro.
   * @param nombre Nombre del libro
   * @param cantidad cantidad de libros
   * @param descripcion descripción del libro
   * @param peso peso del libro
   */
  constructor(nombre: string, cantidad: number, descripcion: string, peso: number) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.descripcion = descripcion;
    this.peso = peso;
  }

  /**
   * Función que devuelve la representación en string de un libro
   * Devuelve un string con el nombre, la descripción, la cantidad y el peso del libro.
   * @returns representación en string del libro
   */
  public toString(): string {
    return `Libro: ${this.nombre} - ${this.descripcion} - ${this.cantidad} unidades - ${this.peso} kilos`;
  }
}