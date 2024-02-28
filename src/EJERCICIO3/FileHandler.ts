/**
 * Interface que define los métodos que debe implementar un manejador de archivos.
 * Tiene dos métodos, uno para leer un archivo y otro para escribir en un archivo.
 */
export interface FileHandler {
  readFile(filePath: string): string;
  writeFile(filePath: string, data: string): void;
}