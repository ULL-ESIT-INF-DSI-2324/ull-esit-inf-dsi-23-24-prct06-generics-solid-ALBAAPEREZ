import { Printable } from './Printable';

/**
 * Clase Printer que implementa la interfaz Printable.
 * Lo que hace es implementar el método print de la interfaz Printable.
 * El método print imprime un mensaje.
 */
export class Printer implements Printable {
  /**
   * Metodo que se encarga de imprimir.
   * Lo que hace es imprimir un mensaje.
   */
  print(): void {
    console.log('Printing...');
  }
}