import { Enser } from './Enser';

/**
 * Clase que representa un mueble
 * Los muebles son enseres que se trasladan de un lugar a otro.
 * Cada mueble tiene un nombre, una cantidad, una descripción y un peso.
 * @param nombre nombre del mueble
 * @param cantidad cantidad de muebles
 * @param descripcion descripción del mueble
 * @param peso peso del mueble
 * @param toString función que devuelve la representación en string de un mueble
 */
export class Mueble implements Enser {
  nombre: string;
  cantidad: number = 1;
  descripcion: string = 'Mueble';
  peso: number;

  /**
   * Constructor de la clase Mueble
   * @param nombre nombre del mueble
   * @param cantidad cantidad de muebles
   * @param descripcion descripción del mueble
   * @param peso peso del mueble
   */
  constructor(nombre: string, cantidad: number, descripcion: string, peso: number) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.descripcion = descripcion;
    this.peso = peso;
  }

  /**
   * Función que devuelve la representación en string de un mueble
   * Devuelve un string con el nombre, la cantidad y el peso del mueble.
   * @returns representación en string del mueble 
   */
  public toString(): string {
    return `Mueble: ${this.nombre} - ${this.cantidad} unidades - ${this.peso} kilos`;
  }
}