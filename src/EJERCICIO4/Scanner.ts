import { Scannable } from './Scanabble';

/**
 * Clase Scanner que implementa la interfaz Scannable.
 * Lo que hace es implementar el método scan de la interfaz Scannable.
 * El método scan escanea.
 */
export class Scanner implements Scannable {
  /**
   * Metodo que se encarga de escanear.
   * Lo que hace es imprimir un mensaje.
   */
  scan(): void {
    console.log('Scanning...');
  }
}