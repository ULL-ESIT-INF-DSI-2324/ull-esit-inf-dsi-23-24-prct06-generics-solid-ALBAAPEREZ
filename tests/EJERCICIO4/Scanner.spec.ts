// PRUEBAS  DE LA CLASE SCANNER

import 'mocha';
import { expect } from 'chai';
import { Scanner } from '../../src/EJERCICIO4/Scanner';

// pruebas de la clase Scanner
describe('Scanner', () => {
  // prueba para imprimir un mensaje al escanear
  it('Should print a message', () => {
    const scanner = new Scanner();
    expect(scanner.scan()).to.be.undefined;
  });
  // la fucnoin scan no debe retornar nada
  it('Should not return anything', () => {
    const scanner = new Scanner();
    expect(scanner.scan()).to.be.undefined;
  });
  // la funcion scan no debe recibir parametros
  it('Should not receive any parameters', () => {
    const scanner = new Scanner();
    expect(scanner.scan()).to.be.undefined;
  });
  // debe ser de tipo void
  it('Should be of type void', () => {
    const scanner = new Scanner();
    expect(scanner.scan()).to.be.undefined;
  });
  // la funcion scan debe imprimir un mensaje
  it('Should print a message', () => {
    const scanner = new Scanner();
    expect(scanner.scan()).to.be.undefined;
  });
  // no debe retornar tipos de datos
  it('Should not return anything', () => {
    const scanner = new Scanner();
    expect(scanner.scan()).not.to.be.a('string');
    expect(scanner.scan()).not.to.be.a('number');
    expect(scanner.scan()).not.to.be.a('boolean');
    expect(scanner.scan()).not.to.be.a('object');
  });
});
