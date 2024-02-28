// PRUEBAS DE LA CLASE PRINTERSCANNER

import 'mocha';
import { expect } from 'chai';
import { PrinterScanner } from '../../src/EJERCICIO4/PrinterScanner';

// pruebas de la clase PrinterScanner
describe('PrinterScanner', () => {
  // prueba para imprimir un mensaje al escanear
  it('Should print a message', () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.print()).to.be.undefined;
  });
  // la fucnoin scan no debe retornar nada
  it('Should not return anything', () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.scan()).to.be.undefined;
  });
  // la funcion scan no debe recibir parametros
  it('Should not receive any parameters', () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.scan()).to.be.undefined;
  });
  // debe ser de tipo void
  it('Should be of type void', () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.scan()).to.be.undefined;
  });
  // la funcion scan debe imprimir un mensaje
  it('Should print a message', () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.scan()).to.be.undefined;
  });
  // no debe retornar tipos de datos
  it('Should not return anything', () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.scan()).not.to.be.a('string');
    expect(printerScanner.scan()).not.to.be.a('number');
    expect(printerScanner.scan()).not.to.be.a('boolean');
    expect(printerScanner.scan()).not.to.be.a('object');
  });
  // la funcion print debe imprimir un mensaje
  it('Should print a message', () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.print()).to.be.undefined;
  });
  // no debe retornar tipos de datos
  it('Should not return anything', () => {
    const printerScanner = new PrinterScanner();
    expect(printerScanner.print()).not.to.be.a('string');
    expect(printerScanner.print()).not.to.be.a('number');
    expect(printerScanner.print()).not.to.be.a('boolean');
    expect(printerScanner.print()).not.to.be.a('object');
  });
});
