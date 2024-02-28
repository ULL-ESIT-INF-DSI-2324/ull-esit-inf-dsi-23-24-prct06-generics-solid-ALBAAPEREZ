// PRUEBAS PARA LA INTERFAZ Aritmeticable

import 'mocha'
import { expect } from 'chai'
import { Arithmeticable } from './../../src/MODIFICACION/Aritmeticable'

// PRUEBAS PARA LA INTERFAZ Aritmeticable
describe('Pruebas para la interfaz Aritmeticable', () => {
  // PRUEBA PARA LA INTERFAZ Aritmeticable
  it ('Comprobar que es una interfaz', () => {
    const arithmeticable: Arithmeticable<number> = {
      add: (other: number): number => other,
      subtract: (other: number): number => other,
      multiply: (other: number): number => other,
      divide: (other: number): number => other
    };
    expect(arithmeticable).to.be.an('object');
  });
  // PRUEBA PARA EL METODO add
  it ('Comprobar que le metodo add recibe un T y retorna un T', () => {
    const arithmeticable: Arithmeticable<number> = {
      add: (other: number): number => other,
      subtract: (other: number): number => other,
      multiply: (other: number): number => other,
      divide: (other: number): number => other
    };
    expect(arithmeticable.add(1)).to.be.equal(1);
  });
  // PRUEBA PARA EL METODO subtract
  it ('Comprobar que le metodo subtract recibe un T y retorna un T', () => {
    const arithmeticable: Arithmeticable<number> = {
      add: (other: number): number => other,
      subtract: (other: number): number => other,
      multiply: (other: number): number => other,
      divide: (other: number): number => other
    };
    expect(arithmeticable.subtract(1)).to.be.equal(1);
  });
  // PRUEBA PARA EL METODO multiply
  it ('Comprobar que le metodo multiply recibe un T y retorna un T', () => {
    const arithmeticable: Arithmeticable<number> = {
      add: (other: number): number => other,
      subtract: (other: number): number => other,
      multiply: (other: number): number => other,
      divide: (other: number): number => other
    };
    expect(arithmeticable.multiply(1)).to.be.equal(1);
  });
  // PRUEBA PARA EL METODO divide
  it ('Comprobar que le metodo divide recibe un T y retorna un T', () => {
    const arithmeticable: Arithmeticable<number> = {
      add: (other: number): number => other,
      subtract: (other: number): number => other,
      multiply: (other: number): number => other,
      divide: (other: number): number => other
    };
    expect(arithmeticable.divide(1)).to.be.equal(1);
  });
  // Comprobar que no retornar tipos incorrectos
  it ('Comprobar que no retorna tipos incorrectos', () => {
    const arithmeticable: Arithmeticable<number> = {
      add: (other: number): number => other,
      subtract: (other: number): number => other,
      multiply: (other: number): number => other,
      divide: (other: number): number => other
    };
    expect(arithmeticable.add(1)).to.be.a('number');
    expect(arithmeticable.subtract(1)).to.be.a('number');
    expect(arithmeticable.multiply(1)).to.be.a('number');
    expect(arithmeticable.divide(1)).to.be.a('number');
  });
});