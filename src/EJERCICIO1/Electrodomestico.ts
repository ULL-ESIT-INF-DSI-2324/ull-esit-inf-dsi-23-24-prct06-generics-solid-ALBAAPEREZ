import { Enser } from './Enser';

/**
 * Clase que representa un electrodoméstico
 * Los electrodomésticos son enseres que se trasladan de un lugar a otro.
 * Cada electrodoméstico tiene un nombre, una descripción, una cantidad y un peso.
 * @param nombre nombre del electrodoméstico
 * @param descripcion descripción del electrodoméstico
 * @param cantidad cantidad de electrodomésticos
 * @param peso peso del electrodoméstico
 * @param toString función que devuelve la representación en string de un electrodoméstico
 */
export class Electrodomestico implements Enser {
  nombre: string;
  descripcion: string = 'Electrodoméstico';
  cantidad: number = 1;
  peso: number;

  /**
   * Función que devuelve la representación en string de un electrodoméstico
   * Devuelve un string con el nombre, la descripción, la cantidad y el peso del electrodoméstico.
   * @param nombre NOMbre del electrodoméstico
   * @param peso peso del electrodoméstico
   */
  constructor(nombre: string, peso: number) {
    this.nombre = nombre;
    this.peso = peso;
  }

  /**
   * Función que devuelve la representación en string de un electrodoméstico
   * Devuelve un string con el nombre, la descripción, la cantidad y el peso del electrodoméstico.
   * @returns representación en string del electrodoméstico
   */
  public toString(): string {
    return `Electrodoméstico: ${this.nombre} - ${this.descripcion} - ${this.cantidad} unidades - ${this.peso} kilos`;
  }
}