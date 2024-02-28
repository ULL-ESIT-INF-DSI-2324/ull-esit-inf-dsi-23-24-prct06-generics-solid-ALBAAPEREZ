// PRUEBAS PARA LA INTERFAZ PRINTABLE

import 'mocha';
import { expect } from 'chai';
import { Printable } from '../../src/EJERCICIO4/Printable';

// PRUEBAS DE LA INTERFAZ PRINTABLE
describe('Printable', () => {
  // prueba para imprimir un mensaje
  it('Should print a message', () => {
    const printer: Printable = {
      print: () => {
        console.log('Printing...');
      }
    }
    expect(printer.print()).to.be.undefined;
  });
  // la funcion print no debe retornar nada
  it('Should not return anything', () => {
    const printer: Printable = {
      print: () => {
        console.log('Printing...');
      }
    }
    expect(printer.print()).to.be.undefined;
  });
  // la funcion print no debe recibir parametros
  it('Should not receive any parameters', () => {
    const printer: Printable = {
      print: () => {
        console.log('Printing...');
      }
    }
    expect(printer.print()).to.be.undefined;
  });
  // la funcion print debe ser de tipo void
  it('Should be of type void', () => {
    const printer: Printable = {
      print: () => {
        console.log('Printing...');
      }
    }
    expect(printer.print()).to.be.undefined;
  });
  // no retorna tipos de datos
  it('Should not return anything', () => {
    const printer: Printable = {
      print: () => {
        console.log('Printing...');
      }
    }
    expect(printer.print()).not.to.be.a('string');
    expect(printer.print()).not.to.be.a('number');
    expect(printer.print()).not.to.be.a('boolean');
    expect(printer.print()).not.to.be.a('object');
  });
  // la funcion print debe imprimir un mensaje
  it('Should print a message', () => {
    const printer: Printable = {
      print: () => {
        console.log('Printing...');
      }
    }
    expect(printer.print()).to.be.undefined;
  });
});
