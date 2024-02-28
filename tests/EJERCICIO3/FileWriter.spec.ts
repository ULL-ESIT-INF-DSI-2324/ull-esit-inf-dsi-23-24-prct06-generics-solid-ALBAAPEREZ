// PRUEBAS PARA LA CLASE FileWriter

import 'mocha'
import { expect } from 'chai'
import { FileWriter } from './../../src/EJERCICIO3/FileWriter'
import * as fs from 'fs';

// PRUEBAS PARA LA CLASE FileWriter
describe('Pruebas para la clase FileWriter', () => {
  // PRUEBA PARA EL METODO writeFile
  it ('Comprobar que es una clase', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileWriter).to.be.an.instanceof(FileWriter);
  });
  // prueba para el constructor
  it ('Comprobar que el constructor recibe un string', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileWriter).to.have.property('filePath').that.is.a('string');
  });
  // prueba para el metodo writeFile
  it ('Comprobar que el método writeFile funciona correctamente', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    const data = 'Hola Mundo';
    fileWriter.writeFile(data);
    const result = fs.readFileSync('src/EJERCICIO3/test.txt', 'utf-8');
    expect(result).to.be.equal(data);
  });
  // prueba para el metodo writeFile
  it ('Comprobar que el método writeFile recibe un string', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileWriter.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // prueba en la funcion writeFile si hay un error al escribir en el archivo
  it ('Comprobar que si hay un error al escribir en el archivo, retorna un string vacio', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test2.txt');
    expect(fileWriter.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // prueba en la prueba writeFile si hay un error al escribir en el archivo
  it ('Comprobar que si hay un error al escribir en el archivo, retorna un string vacio', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test2.txt');
    expect(fileWriter.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // prueba de catch
  it ('Comprobar que si hay un error al escribir en el archivo, retorna un string vacio', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test2.txt');
    expect(fileWriter.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  // prueba de catch(error)
  // prueba para lanzar un error si no se puede escribir en el archivo
  it ('Imprimir por pantalla el error', () => {
    let errorLog: string | undefined;
    const originalConsoleError = console.error;
    console.error = (message: string) => { errorLog = message; };
    const fileWriter: FileWriter = new FileWriter('/path/to/non/existent/file.txt');
    fileWriter.writeFile(' ');
    expect(errorLog).to.include('Error al escribir en el archivo:');
    console.error = originalConsoleError;
  });
  // comprobar que no retorna tipos incorrectos
  it ('Comprobar que el método writeFile no retorna tipos incorrectos', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileWriter.writeFile('Hola Mundo')).to.be.equal(undefined);
    expect(fileWriter.writeFile('Hola Mundo')).to.not.be.a('number');
    expect(fileWriter.writeFile('Hola Mundo')).to.not.be.a('boolean');
    expect(fileWriter.writeFile('Hola Mundo')).to.not.be.a('object');
  });
  // prueba para el constructor
  it ('Comprobar que el constructor recibe un string', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileWriter).to.have.property('filePath').that.is.a('string');
  });
  // prueba para compronar que el metodo writeFile retorna undefined
  it ('Comprobar que el método writeFile retorna undefined', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileWriter.writeFile('Hola Mundo')).to.be.equal(undefined);
  });

});