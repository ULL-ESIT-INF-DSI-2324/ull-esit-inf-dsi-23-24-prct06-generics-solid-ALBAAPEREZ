// PRUEBAS PARA EL EJERCICIO 3
import 'mocha'
import { expect } from 'chai'
import { FileReader } from './../../src/EJERCICIO3/FileReader'
import * as fs from 'fs';


// PRUEBAS PARA LA CLASE FileReader
describe('Pruebas para la clase FileReader', () => {
  // PRUEBA PARA EL METODO readFile
  it ('Comprobar que es una clase', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader).to.be.an.instanceof(FileReader);
  });
  // prueba para el constructor
  it ('Comprobar que el constructor recibe un string', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader).to.have.property('filePath').that.is.a('string');
  });
  // prueba para el metodo writeFile
  it ('Comprobar que el método writeFile funciona correctamente', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    const data = 'Hola Mundo';
    fileReader.writeFile(data);
    const result = fs.readFileSync('src/EJERCICIO3/test.txt', 'utf-8');
    expect(result).to.be.equal(data);
  });
  it('Comprobar que el método readFile funciona correctamente', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    const result = fileReader.readFile();
    expect(result).to.be.equal('Hola Mundo');
  });
  // prueba para el metodo readFile
  it ('Comprobar que el método readFile retorna un string', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader.readFile()).to.be.a('string');
  });
  // prueba para el metodo writeFile
  it ('Comprobar que el método writeFile recibe un string', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // prueba en la funcion writeFile si hay un error al escribir en el archivo
  it ('Comprobar que si hay un error al escribir en el archivo, retorna un string vacio', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test2.txt');
    expect(fileReader.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // prueba en la prueba writeFile si hay un error al escribir en el archivo
  it ('Comprobar que si hay un error al escribir en el archivo, retorna un string vacio', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test2.txt');
    expect(fileReader.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // prueba para el metodo writeFile
  it ('Comprobar que el método writeFile recibe un string', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // Pruebas para comprobar que el método readFile retorna el contenido del archivo
  it ('Comprobar que el método readFile retorna el contenido del archivo', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader.readFile()).to.be.equal('Hola Mundo');
  });
  // pruebas para comprobar que no retona tipos de datos incorrectos
  it ('Comprobar que el método readFile retorna un string', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader.readFile()).to.be.a('string');
    expect(fileReader.readFile()).not.to.be.a('number');
    expect(fileReader.readFile()).not.to.be.a('boolean');
    expect(fileReader.readFile()).not.to.be.a('object');
    expect(fileReader.readFile()).not.to.be.a('array');
  });
  // pruebas para comprobar que el metodo writeFile retorna undefined
  it ('Comprobar que el método writeFile retorna undefined', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // prueba de la funcion wrtieFile que si hay un error al escribir en el archivo
  it ('Comprobar que si hay un error al escribir en el archivo, retorna mensaje de error', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test2.txt');
    expect(fileReader.writeFile(' ')).to.be.equal(undefined);
  });
  // instancia de la clase FileReader
  it ('Comprobar que es una instancia de la clase FileReader', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader).to.be.an.instanceof(FileReader);
  });
  // el constructor recbe un string
  it ('Comprobar que el constructor recibe un string', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader).to.have.property('filePath').that.is.a('string');
  });
  // Prueba para comprobar que si hay un error al escribir en el archivo, retorna undefined
  it('Si hay un error al escribir en el archivo, el método writeFile debe retornar undefined', () => {
    const fileReaderWithError = new FileReader('src/EJERCICIO3/nonexistent.txt');
    expect(fileReaderWithError.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // pruebas para la uncion readFile si hay un error al leer el archivo
  it ('Comprobar que si hay un error al leer el archivo, retorna un string vacio', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test2.txt');
    expect(fileReader.readFile()).to.be.equal(' ');
  });
  // prueba de catch en el metodo readFile
  it ('Comprobar que si hay un error al leer el archivo, retorna mensaje de error', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test2.txt');
    expect(fileReader.readFile()).to.be.equal(' ');
  });
  // prueba para lanzar un error si no se puede leer en el archivo
  it ('Imprimir por pantalla el error', () => {
    let errorLog: string | undefined;
    const originalConsoleError = console.error;
    console.error = (message: string) => { errorLog = message; };
    const fileReader: FileReader = new FileReader('/path/to/non/existent/file.txt');
    fileReader.readFile();
    expect(errorLog).to.include('Error al leer el archivo:');
    console.error = originalConsoleError;
  });
  // / prueba para lanzar un error si no se puede escribir en el archivo
  it ('Imprimir por pantalla el error', () => {
    let errorLog: string | undefined;
    const originalConsoleError = console.error;
    console.error = (message: string) => { errorLog = message; };
    const fileReader: FileReader = new FileReader('/path/to/non/existent/file.txt');
    fileReader.writeFile(' ');
    expect(errorLog).to.include('Error al escribir en el archivo:');
    console.error = originalConsoleError;
  });
});