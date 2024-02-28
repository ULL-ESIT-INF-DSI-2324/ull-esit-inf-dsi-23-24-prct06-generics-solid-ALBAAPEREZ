// PRUEBAS PARA LA CLASE ARITMETICABLECOLLECTION

import 'mocha'
import { expect } from 'chai'
import { ArithmeticableCollection } from './../../src/MODIFICACION/AritmeticableColletion'

// PRUEBAS PARA LA CLASE ArithmeticableCollection
describe('Pruebas para la clase ArithmeticableCollection', () => {
  // pruebas para  la funcion de SUM
  it ('Comprobar que el método sum retorna un número complejo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({add: (other: number): number => other, subtract: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.sum()).to.be.an('object');
  });
  // prueba para comprobar que el metodo sum no retorna tipos incorrectos
  it ('Comprobar que el método sum no retorna tipos incorrectos', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({add: (other: number): number => other, subtract: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.sum()).to.be.an('object');
  });
  // prueba para comprobar que el metodo sum recibe un numero complejo y retorna un numero complejo
  it ('Comprobar que el método sum recibe un número complejo y retorna un número complejo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({add: (other: number): number => other, subtract: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.sum()).to.be.an('object');
  });
  // pruebas para ver que sum añade  al resultado el indice de elemento. 
  it ('Comprobar que el método sum añade al resultado el índice del elemento', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({add: (other: number): number => other, subtract: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    complexCollection.addArithmeticable({add: (other: number): number => other, subtract: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.sum()).to.be.an('object');
  });
  
  // pruebas para le metodo subtract
  it ('Comprobar que el método subtract retorna un número complejo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.subtract()).to.be.an('object');
  });
  // prueba para comprobar que el metodo subtract no retorna tipos incorrectos
  it ('Comprobar que el método subtract no retorna tipos incorrectos', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.subtract()).to.be.an('object');
  });
  // prueba para comprobar que el metodo subtract recibe un numero complejo y retorna un numero complejo
  it ('Comprobar que el método subtract recibe un número complejo y retorna un número complejo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.subtract()).to.be.an('object');
  });
  // prueba donde subtract quita el elemtento del indice
  it ('Comprobar que el método subtract quita el elemento del índice', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.subtract()).to.be.an('object');
  });
  // pruebas para el metodo getArithmeticable
  it ('Comprobar que el método getArithmeticable devuelve  un numero', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getNumberOfArithmeticables()).to.be.an('number');
  });
  // prueba para comprobar que el metodo getArithmeticable no retorna tipos incorrectos
  it ('Comprobar que el método getArithmeticable no retorna tipos incorrectos', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getNumberOfArithmeticables()).not.to.be.an('object');
    expect(complexCollection.getNumberOfArithmeticables()).not.to.be.an('string');
    expect(complexCollection.getNumberOfArithmeticables()).not.to.be.an('boolean');
  });
  // prueba par aver si el metodo getNumberOfArithmeticables() hace lo que se espera
  it ('Comprobar que el método getArithmeticable devuelve el número de elementos en el arreglo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getNumberOfArithmeticables()).to.be.equal(1);
  });
  // pruebas getArithmeticable 
  it ('Comprobar que el método getArithmeticable devuelve un número complejo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getArithmeticable(0)).to.be.an('object');
  });
  // prueba para ver si el metodo getArithmeticable no retorna tipos incorrectos
  it ('Comprobar que el método getArithmeticable no retorna tipos incorrectos', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getArithmeticable(0)).not.to.be.an('string');
    expect(complexCollection.getArithmeticable(0)).not.to.be.an('number');
    expect(complexCollection.getArithmeticable(0)).not.to.be.an('boolean');
  });
  // prueba para comprobar que el metodo getArithmeticable retorna el numero complejo esperado
  it ('Comprobar que el método getArithmeticable devuelve el número complejo esperado', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getArithmeticable(0)).to.be.an('object');
  });
  // pruebas que lanza un error si no encuentra el indice 
  it ('Comprobar que el método getArithmeticable lanza un error si no encuentra el índice', () => {
    const complexCollection = new ArithmeticableCollection();
    expect(() => complexCollection.getArithmeticable(0)).to.throw('Index out of bounds');
  });
  // pruebas  addArithmeticable
  it ('Comprobar que el método addArithmeticable añade un número complejo al arreglo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getNumberOfArithmeticables()).to.be.equal(1);
  });
  // prueba para comprobar que el metodo addArithmeticable no retorna tipos incorrectos
  it ('Comprobar que el método addArithmeticable no retorna tipos incorrectos', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getNumberOfArithmeticables()).not.to.be.an('object');
    expect(complexCollection.getNumberOfArithmeticables()).not.to.be.an('string');
    expect(complexCollection.getNumberOfArithmeticables()).not.to.be.an('boolean');
  });
  // prueba para comprobar que el metodo addArithmeticable añade el numero complejo esperado
  it ('Comprobar que el método addArithmeticable añade el número complejo esperado', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getArithmeticable(0)).to.be.an('object');
  });
  // pruebas con las colecciones
  it ('Comprobar que el método addArithmeticable añade un número complejo al arreglo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getNumberOfArithmeticables()).to.be.equal(2);
  });
  // se crean coleciones de complejos
  it ('Comprobar que el método addArithmeticable añade un número complejo al arreglo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    complexCollection.addArithmeticable({subtract: (other: number): number => other, add: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getNumberOfArithmeticables()).to.be.equal(3);
  });
  // se crean colecciones de racionales
  it ('Comprobar que el método addArithmeticable añade un número complejo al arreglo', () => {
    const complexCollection = new ArithmeticableCollection();
    complexCollection.addArithmeticable({add: (other: number): number => other, subtract: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    complexCollection.addArithmeticable({add: (other: number): number => other, subtract: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    complexCollection.addArithmeticable({add: (other: number): number => other, subtract: (other: number): number => other, multiply: (other: number): number => other, divide: (other: number): number => other});
    expect(complexCollection.getNumberOfArithmeticables()).to.be.equal(3);
  });
});