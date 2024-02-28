// PRUEBAS PARA  LA CLASE FILESYSTEMHANDLER

import 'mocha'
import { expect } from 'chai'
import { FileSystemHandler } from './../../src/EJERCICIO3/FileSystemHandler'

// PRUEBAS PARA LA CLASE FileSystemHandler
describe('Pruebas para la clase FileSystemHandler', () => {
  // PRUEBA PARA EL METODO readFile
  it ('Comprobar que el método readFile recibe un string y retorna un string', () => {
    const filePath = 'src/EJERCICIO3/test.txt';
    const fileReader: FileSystemHandler = new FileSystemHandler();
    expect(typeof fileReader.readFile(filePath)).to.be.equal('string');
  });
  // prueba en la funcion readFile si hay un error al leer el archivo
  it ('Comprobar que si hay un error al leer el archivo, retorna un string vacio', () => {
    const fileReader: FileSystemHandler = new FileSystemHandler();
    expect(fileReader.readFile('src/EJERCICIO3/test2.txt')).to.be.equal(' ');
  });
  // prueba de catch
  it ('Comprobar que si hay un error al leer el archivo, retorna un string vacio', () => {
    const fileReader: FileSystemHandler = new FileSystemHandler();
    expect(fileReader.readFile('src/EJERCICIO3/test2.txt')).to.be.equal(' ');
  });
  // prueba de catch(error)
  // prueba para lanzar un error si no se puede leer el archivo
  it ('Imprimir por pantalla el error', () => {
    let errorLog: string | undefined;
    const originalConsoleError = console.error;
    console.error = (message: string) => { errorLog = message; };
    const fileReader: FileSystemHandler = new FileSystemHandler();
    fileReader.readFile('/path/to/non/existent/file.txt');
    expect(errorLog).to.include('Error al leer el archivo:');
    console.error = originalConsoleError;
  });
  // pruebas funcion writeFile
  it ('Comprobar que el método writeFile recibe un string y retorna undefined', () => {
    const fileReader: FileSystemHandler = new FileSystemHandler();
    expect(fileReader.writeFile('src/EJERCICIO3/test.txt', 'Hola Mundo')).to.be.equal(undefined);
  });
  // prueba en la funcion writeFile si hay un error al escribir en el archivo
  it ('Comprobar que si hay un error al escribir en el archivo, retorna un string vacio', () => {
    const fileReader: FileSystemHandler = new FileSystemHandler();
    expect(fileReader.writeFile('src/EJERCICIO3/test2.txt', 'Hola Mundo')).to.be.equal(undefined);
  });
  // prueba de catch
  it ('Comprobar que si hay un error al escribir en el archivo, retorna un string vacio', () => {
    const fileReader: FileSystemHandler = new FileSystemHandler();
    expect(fileReader.writeFile('src/EJERCICIO3/test2.txt', 'Hola Mundo')).to.be.equal(undefined);
  });
  // prueba de catch(error)
  // prueba para lanzar un error si no se puede escribir en el archivo
  it ('Imprimir por pantalla el error', () => {
    let errorLog: string | undefined;
    const originalConsoleError = console.error;
    console.error = (message: string) => { errorLog = message; };
    const fileReader: FileSystemHandler = new FileSystemHandler();
    fileReader.writeFile('/path/to/non/existent/file.txt', ' ');
    expect(errorLog).to.include('Error al escribir en el archivo:');
    console.error = originalConsoleError;
  });
});