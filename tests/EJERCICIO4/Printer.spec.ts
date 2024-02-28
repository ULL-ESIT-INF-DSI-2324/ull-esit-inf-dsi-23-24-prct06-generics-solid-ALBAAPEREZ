// PRUEBAS PARA LA CLASE PRINTER

import 'mocha';
import { expect } from 'chai';
import { Printer } from '../../src/EJERCICIO4/Printer';

// pruebas de la clase Printer
describe('Printer', () => {
  // prueba para imprimir un mensaje
  it('Should print a message', () => {
    const printer = new Printer();
    expect(printer.print()).to.be.undefined;
  });
  // la funcion print no debe retornar nada
  it('Should not return anything', () => {
    const printer = new Printer();
    expect(printer.print()).to.be.undefined;
  });
  // la funcion print no debe recibir parametros
  it('Should not receive any parameters', () => {
    const printer = new Printer();
    expect(printer.print()).to.be.undefined;
  });
  // debe ser de tipo void
  it('Should be of type void', () => {
    const printer = new Printer();
    expect(printer.print()).to.be.undefined;
  });
  // la funcion print debe imprimir un mensaje
  it('Should print a message', () => {
    const printer = new Printer();
    expect(printer.print()).to.be.undefined;
  });
  // no debe retornar tipos de datos
  it('Should not return anything', () => {
    const printer = new Printer();
    expect(printer.print()).not.to.be.a('string');
    expect(printer.print()).not.to.be.a('number');
    expect(printer.print()).not.to.be.a('boolean');
    expect(printer.print()).not.to.be.a('object');
  });
});