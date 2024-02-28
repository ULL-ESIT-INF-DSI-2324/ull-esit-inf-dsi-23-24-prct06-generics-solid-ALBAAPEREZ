import * as fs from 'fs';

/**
 * Clase que se encarga de leer un archivo
 * Tiene un constructor que recibe la ruta del archivo.
 * Tiene un método que se encarga de leer el archivo.
 */
export class FileReader {
  /**
   * Constructor de la clase.
   * Se encarga de inicializar las propiedades de la clase.
   * @param filePath ruta del archivo
   */
  constructor(private filePath: string) {}

  /**
   * Metodo que se encarga de leer un archivo.
   * Para ello, utiliza el módulo fs de Node.js.
   * Basicamente, lee el archivo y retorna su contenido.
   * @returns retorna el contenido del archivo.
   */
  public readFile(): string {
    try {
      const content: string = fs.readFileSync(this.filePath, 'utf-8');
      return content;
    } catch (error) {
      console.error('Error al leer el archivo:', error.message);
      return '';
    }
  }

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