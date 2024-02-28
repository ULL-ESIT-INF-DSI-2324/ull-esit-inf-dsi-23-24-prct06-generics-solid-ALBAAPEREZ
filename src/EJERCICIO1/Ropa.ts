import { Enser } from './Enser';

/**
 * Clase que representa ropa
 * La ropa es un enser que se traslada de un lugar a otro.
 * Cada ropa tiene un nombre, una cantidad, una descripción y un peso.
 * @param nombre nombre de la ropa
 * @param cantidad cantidad de ropa
 * @param descripcion descripción de la ropa
 * @param peso peso de la ropa
 * @param toString función que devuelve la representación en string de la ropa
 */
export class Ropa implements Enser {
  nombre: string;
  cantidad: number = 1;
  descripcion: string = 'Ropa';
  peso: number;

  /**
   * Constructor de la clase Ropa
   * Se encarga de crear ropa con un nombre, una cantidad, una descripción y un peso.
   * @param nombre NOmbre de la ropa
   * @param cantidad Cantidad de ropa
   * @param descripcion descripción de la ropa
   * @param peso peso de la ropa
   */
  constructor(nombre: string, cantidad: number, descripcion: string, peso: number) {
    this.nombre = nombre;
    this.cantidad = cantidad;
    this.descripcion = descripcion;
    this.peso = peso;
  }

  /**
   * Función que devuelve la representación en string de la ropa
   * Devuelve un string con el nombre, la descripción, la cantidad y el peso de la ropa.
   * @returns representación en string de la ropa
   * @returns representación en string de la ropa
   */
  public toString(): string {
    return `Ropa: ${this.nombre} - ${this.descripcion} - ${this.cantidad} unidades - ${this.peso} kilos`;
  }
}
