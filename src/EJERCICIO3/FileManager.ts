import { FileHandler } from './FileHandler';

/**
 * Clase que representa un administrador de archivos.
 * Tiene la capacidad de leer y escribir archivos.
 * Cuenta con un constructor que recibe un manejador de archivos y una ruta de archivo.
 */
export class FileManager {
  /**
   * Constructor de la clase.
   * Se encarga de inicializar las propiedades de la clase.
   * @param fileHandler fichero manejador
   * @param filePath fichero ruta
   */
  constructor(private fileHandler: FileHandler, private filePath: string) {}

  /**
   * Método que se encarga de leer un archivo.
   * @returns string retorna el contenido del archivo.
   */
  public readFile(): string {
    return this.fileHandler.readFile(this.filePath);
  }

  /**
   * Metodo que se encarga de escribir en un archivo.
   * @param data d
   */
  public writeFile(data: string): void {
    this.fileHandler.writeFile(this.filePath, data);
  }
}