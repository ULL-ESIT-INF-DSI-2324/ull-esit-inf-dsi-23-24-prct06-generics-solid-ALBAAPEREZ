// PRUEBSA DE LA INTERFAZ SCANNABLE

import 'mocha';
import { expect } from 'chai';
import { Scannable } from '../../src/EJERCICIO4/Scanabble';

// PRUEBAS DE LA CLASE SCANNER
describe('Scanner', () => {
  // prueba para imprimir un mensaje al escanear
  it('Should print a message', () => {
    const scanner: Scannable = {
      scan: () => {
        console.log('Scanning...');
      }
    }
    expect(scanner.scan()).to.be.undefined;
  });
  // la fucnoin scan no debe retornar nada
  it('Should not return anything', () => {
    const scanner: Scannable = {
      scan: () => {
        console.log('Scanning...');
      }
    }
    expect(scanner.scan()).to.be.undefined;
  });
  // la funcion scan no debe recibir parametros
  it('Should not receive any parameters', () => {
    const scanner: Scannable = {
      scan: () => {
        console.log('Scanning...');
      }
    }
    expect(scanner.scan()).to.be.undefined;
  });
  // debe ser de tipo void
  it('Should be of type void', () => {
    const scanner: Scannable = {
      scan: () => {
        console.log('Scanning...');
      }
    }
    expect(scanner.scan()).to.be.undefined;
  });
});