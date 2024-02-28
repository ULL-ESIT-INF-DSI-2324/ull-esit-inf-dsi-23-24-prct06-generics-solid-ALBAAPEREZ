// PRUEBAS PARA LA CLASE COMPLEX

import 'mocha'
import { expect } from 'chai'
import { Complex } from './../../src/MODIFICACION/Complex'

// PRUEBAS PARA LA CLASE Complex
describe('Pruebas para la clase Complex', () => {
  describe('Pruebas para el constructor', () => {
    // PRUEBA PARA EL CONSTRUCTOR
    it ('Comprobar que el constructor recibe dos números', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex).to.have.property('real').that.is.a('number');
      expect(complex).to.have.property('imaginary').that.is.a('number');
    });
    // pruebas que aseguran el correcto funcionamiento del constructor
    it ('Comprobar que el constructor funciona correctamente', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.real).to.be.equal(1);
      expect(complex.imaginary).to.be.equal(1);
    });
  });
  // pruebas de la funcion add
  describe('Pruebas para el método add', () => {
    // PRUEBA PARA EL METODO add
    it ('Comprobar que el método add recibe un número complejo y retorna un número complejo', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.add(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
    // pruebas que aseguran el correcto funcionamiento del método add
    it ('Comprobar que el método add funciona correctamente', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.add(new Complex(1, 1)).real).to.be.equal(2);
      expect(complex.add(new Complex(1, 1)).imaginary).to.be.equal(2);
    });
    // pruebas para comprobar que se hace bien la suma de dos números complejos
    it ('Comprobar que el método add suma correctamente dos números complejos', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.add(new Complex(1, 1)).real).to.be.equal(2);
      expect(complex.add(new Complex(1, 1)).imaginary).to.be.equal(2);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.add(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.add).to.be.a('function');
    });
    //comprobamos que el metodo add recibe un numero complejo y retorna un numero complejo
    it ('Comprobar que el método add recibe un número complejo y retorna un número complejo', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.add(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
    // comprobarmos que implementa la interfaz Aritmeticable
    it ('Comprobar que implementa la interfaz Aritmeticable', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex).to.have.property('add').that.is.a('function');
      expect(complex).to.have.property('subtract').that.is.a('function');
      expect(complex).to.have.property('multiply').that.is.a('function');
      expect(complex).to.have.property('divide').that.is.a('function');
    });
  });
  // pruebas de la funcion subtract
  describe ('Pruebas para el método subtract', () => {
    // PRUEBA PARA EL METODO subtract
    it ('Comprobar que el método subtract recibe un número complejo y retorna un número complejo', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.subtract(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
    // pruebas que aseguran el correcto funcionamiento del método subtract
    it ('Comprobar que el método subtract funciona correctamente', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.subtract(new Complex(1, 1)).real).to.be.equal(0);
      expect(complex.subtract(new Complex(1, 1)).imaginary).to.be.equal(0);
    });
    // pruebas para comprobar que se hace bien la resta de dos números complejos
    it ('Comprobar que el método subtract resta correctamente dos números complejos', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.subtract(new Complex(1, 1)).real).to.be.equal(0);
      expect(complex.subtract(new Complex(1, 1)).imaginary).to.be.equal(0);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.subtract(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.subtract).to.be.a('function');
    });
    //comprobamos que el metodo subtract recibe un numero complejo y retorna un numero complejo
    it ('Comprobar que el método subtract recibe un número complejo y retorna un número complejo', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.subtract(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
  });
  // pruebas de la funcion multiply
  describe ('Pruebas para el método multiply', () => {
    // PRUEBA PARA EL METODO multiply
    it ('Comprobar que el método multiply recibe un número complejo y retorna un número complejo', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.multiply(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
    // pruebas que aseguran el correcto funcionamiento del método multiply
    it ('Comprobar que el método multiply funciona correctamente', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.multiply(new Complex(1, 1)).real).to.be.equal(0);
      expect(complex.multiply(new Complex(1, 1)).imaginary).to.be.equal(2);
    });
    // pruebas para comprobar que se hace bien la multiplicación de dos números complejos
    it ('Comprobar que el método multiply multiplica correctamente dos números complejos', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.multiply(new Complex(1, 1)).real).to.be.equal(0);
      expect(complex.multiply(new Complex(1, 1)).imaginary).to.be.equal(2);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.multiply(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.multiply).to.be.a('function');
    });
    //comprobamos que el metodo multiply recibe un numero complejo y retorna un numero complejo
    it ('Comprobar que el método multiply recibe un número complejo y retorna un número complejo', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.multiply(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
  });
  // pruebas de la funcion divide
  describe ('Pruebas para el método divide', () => {
    // PRUEBA PARA EL METODO divide
    it ('Comprobar que el método divide recibe un número complejo y retorna un número complejo', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.divide(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
    // pruebas que aseguran el correcto funcionamiento del método divide
    it ('Comprobar que el método divide funciona correctamente', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.divide(new Complex(1, 1)).real).to.be.equal(1);
      expect(complex.divide(new Complex(1, 1)).imaginary).to.be.equal(0);
    });
    // pruebas para comprobar que se hace bien la división de dos números complejos
    it ('Comprobar que el método divide divide correctamente dos números complejos', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.divide(new Complex(1, 1)).real).to.be.equal(1);
      expect(complex.divide(new Complex(1, 1)).imaginary).to.be.equal(0);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.divide(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.divide).to.be.a('function');
    });
    //comprobamos que el metodo divide recibe un numero complejo y retorna un numero complejo
    it ('Comprobar que el método divide recibe un número complejo y retorna un número complejo', () => {
      const complex: Complex = new Complex(1, 1);
      expect(complex.divide(new Complex(1, 1))).to.be.an.instanceof(Complex);
    });
  });
});