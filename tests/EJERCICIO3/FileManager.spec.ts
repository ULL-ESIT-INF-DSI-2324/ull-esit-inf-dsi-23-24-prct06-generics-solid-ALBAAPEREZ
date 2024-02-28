// test/file-manager.test.ts
import 'mocha';
// test/file-manager.test.ts
import { expect } from 'chai';
import { FileReader } from './../../src/EJERCICIO3/FileReader';
import { FileWriter } from './../../src/EJERCICIO3/FileWriter';

describe('FileManager', () => {
  it ('Comprobar que file manager es una clase', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileWriter).to.be.an.instanceof(FileWriter);
  });
  it ('Comprobar que el constructor recibe un string', () => {
    const fileWriter: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileWriter).to.have.property('filePath').that.is.a('string');
  });
  it ('Comprobar que el método readFile recibe un string y retorna un string', () => {
    const filePath = 'src/EJERCICIO3/test.txt';
    const fileReader: FileReader = new FileReader(filePath);
    expect(typeof fileReader.readFile()).to.be.equal('string');
  });

  it ('Comprobar que el método writeFile recibe un string y retorna undefined', () => {
    const fileReader: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileReader.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  it ('Comprobar que el método writeFile recibe un string', () => {
    const fileReader: FileWriter = new FileWriter('src/EJERCICIO3/test.txt');
    expect(fileReader.writeFile('Hola Mundo')).to.be.equal(undefined);
  });
  it ('Comprobar que son instancias de la clase FileReader', () => {
    const fileReader: FileReader = new FileReader('src/EJERCICIO3/test.txt');
    expect(fileReader).to.be.an.instanceof(FileReader);
  });
});