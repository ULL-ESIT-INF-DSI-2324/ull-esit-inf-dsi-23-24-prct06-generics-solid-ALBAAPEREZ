// PRUEBAS PARA EL EJERCICIO 3
import 'mocha'
import { expect } from 'chai'
import { FileHandler } from './../../src/EJERCICIO3/FileHandler'
import { FileReader } from './../../src/EJERCICIO3/FileReader'


// PRUEBAS PARA LA INTERFAZ FileHandler
describe('Pruebas para la interfaz FileHandler', () => {
  // PRUEBA PARA EL METODO readFile
  it ('Comprobar que el método readFile recibe un string y retorna un string', () => {
    const filePath = 'src/EJERCICIO3/test.txt';
    const fileReader: FileHandler = new FileReader(filePath);
    expect(typeof fileReader.readFile(filePath)).to.be.equal('string');
  });
});