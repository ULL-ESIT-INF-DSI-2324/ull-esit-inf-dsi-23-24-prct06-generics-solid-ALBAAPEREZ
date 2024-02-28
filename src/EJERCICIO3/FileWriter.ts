import * as fs from 'fs';


/**
 * Clase que se encarga de escribir en un archivo.
 * Tiene un constructor que recibe la ruta del archivo.
 * Tiene un método que se encarga de escribir en el archivo.
 * Utiliza el módulo fs de Node.js.
 */
export class FileWriter {
  /**
   * Constructor de la clase.
   * Se encarga de inicializar las propiedades de la clase.
   * @param filePath ruta del archivo
   */
  constructor(private filePath: string) {}

  /**
   * Metodo que se encarga de escribir en un archivo.
   * Utiliza el módulo fs de Node.js.
   * @param data datos a escribir en el archivo.
   * @returns void no retorna nada.
   */
  public writeFile(data: string): void {
    try {
      fs.writeFileSync(this.filePath, data, 'utf-8');
      console.log('Archivo escrito exitosamente.');
    } catch (error) {
      console.error('Error al escribir en el archivo:', error.message);
    }
  }
}