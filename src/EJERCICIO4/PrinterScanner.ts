import { Printable } from './Printable';
import { Scannable } from './Scanabble';

/**
 * Clase PrinterScanner que implementa las interfaces Printable y Scannable.
 * Lo que hace es implementar los métodos print y scan de las interfaces Printable y Scannable.
 * El método print imprime un mensaje y el método scan escanea.
 * Ambos métodos son de tipo void (no retornan nada).
 */
export class PrinterScanner implements Printable, Scannable {

  /**
   * Metodo que se encarga de imprimir.
   * Lo que hace es imprimir un mensaje.
   */
  print(): void {
    console.log('Printing...');
  }

  /**
   * Metodo que se encarga de escanear.
   * Lo que hace es imprimir un mensaje.
   */
  scan(): void {
    console.log('Scanning...');
  }
}
