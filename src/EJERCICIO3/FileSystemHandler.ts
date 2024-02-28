import { FileHandler } from './FileHandler';
import * as fs from 'fs';

/**
 * Clase que representa un manejador de archivos del sistema de archivos.
 * Implementa la interfaz FileHandler. 
 * Lo que haces es implementar los métodos de la interfaz FileHandler.
 */
export class FileSystemHandler implements FileHandler {
  /**
   * Metodo que se encarga de leer un archivo.
   * Lo que hace es leer un archivo utilizando el módulo fs de Node.js.
   * @param filePath ruta del archivo
   * @returns string retorna el contenido del archivo.
   */
  public readFile(filePath: string): string {
    try {
      return fs.readFileSync(filePath, 'utf-8');
    } catch (error) {
      console.error('Error al leer el archivo:', error.message);
      return '';
    }
  }

  /**
   * Metodo que se encarga de escribir en un archivo.
   * Lo que hace es escribir en un archivo utilizando el módulo fs de Node.js.
   * @param filePath ruta del archivo
   * @param data datos a escribir en el archivo.
   */
  public writeFile(filePath: string, data: string): void {
    try {
      fs.writeFileSync(filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error) {
      console.error('Error al escribir en el archivo:', error.message);
    }
  }
}