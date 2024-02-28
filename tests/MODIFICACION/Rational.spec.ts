// PRUEBAS PARA LA CLASE Rational

import 'mocha'
import { expect } from 'chai'
import { Rational } from './../../src/MODIFICACION/Rational'

// PRUEBAS PARA LA CLASE Rational
describe ('Pruebas para la clase Rational', () => {
  // pruebas constructor y correcta inicializacion de los atributos
  describe('Pruebas para el constructor', () => {
    // PRUEBA PARA EL CONSTRUCTOR
    it ('Comprobar que el constructor recibe dos números', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational).to.have.property('numerator').that.is.a('number');
      expect(rational).to.have.property('denominator').that.is.a('number');
    });
    // pruebas que aseguran el correcto funcionamiento del constructor
    it ('Comprobar que el constructor funciona correctamente', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.numerator).to.be.equal(1);
      expect(rational.denominator).to.be.equal(1);
    });
    // se inicializan los atributos correctamente
    it ('Comprobar que se inicializan los atributos correctamente', () => {
      const rational: Rational = new Rational(1, 1);
      const rational2: Rational = new Rational(2, 2);
      expect(rational.numerator).to.be.equal(1);
      expect(rational.denominator).to.be.equal(1);
      expect(rational2.numerator).to.be.equal(2);
      expect(rational2.denominator).to.be.equal(2);
    });
  });
  // pruebas para el metodo add
  describe('Pruebas para el método add', () => {
    // PRUEBA PARA EL METODO add
    it ('Comprobar que el método add recibe un número racional y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.add(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // pruebas que aseguran el correcto funcionamiento del método add
    it ('Comprobar que el método add funciona correctamente', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.add(new Rational(1, 1)).numerator).to.be.equal(2);
      expect(rational.add(new Rational(1, 1)).denominator).to.be.equal(1);
    });
    // pruebas para comprobar que se hace bien la suma de dos números racionales
    it ('Comprobar que el método add suma correctamente dos números racionales', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.add(new Rational(1, 1)).numerator).to.be.equal(2);
      expect(rational.add(new Rational(1, 1)).denominator).to.be.equal(1);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.add(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.add).to.be.a('function');
    });
    //comprobamos que el metodo add recibe un numero racional y retorna un numero racional
    it ('Comprobar que el método add recibe un número racional y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.add(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // comprobarmos que implementa la interfaz Arithmeticable
    it ('Comprobar que implementa la interfaz Arithmeticable', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational).to.have.property('add').that.is.a('function');
      expect(rational).to.have.property('subtract').that.is.a('function');
      expect(rational).to.have.property('multiply').that.is.a('function');
      expect(rational).to.have.property('divide').that.is.a('function');
    });
  });
  // pruebas de la funcion subtract
  describe ('Pruebas para el método subtract', () => {
    // PRUEBA PARA EL METODO subtract
    it ('Comprobar que el método subtract recibe un número racional y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.subtract(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // pruebas que aseguran el correcto funcionamiento del método subtract
    it ('Comprobar que el método subtract funciona correctamente', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.subtract(new Rational(1, 1)).numerator).to.be.equal(0);
      expect(rational.subtract(new Rational(1, 1)).denominator).to.be.equal(1);
    });
    // pruebas para comprobar que se hace bien la resta de dos números racionales
    it ('Comprobar que el método subtract resta correctamente dos números racionales', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.subtract(new Rational(1, 1)).numerator).to.be.equal(0);
      expect(rational.subtract(new Rational(1, 1)).denominator).to.be.equal(1);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.subtract(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.subtract).to.be.a('function');
    });
    //comprobamos que el metodo subtract recibe un numero racional y retorna un numero racional
    it ('Comprobar que el método subtract recibe un número racional y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.subtract(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // comprobarmos que implementa la interfaz Arithmetic
    it ('Comprobar que implementa la interfaz Arithmetic', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational).to.have.property('add').that.is.a('function');
      expect(rational).to.have.property('subtract').that.is.a('function');
      expect(rational).to.have.property('multiply').that.is.a('function');
      expect(rational).to.have.property('divide').that.is.a('function');
    });
  });
  // pruebas de la funcion multiply
  describe ('Pruebas para el método multiply', () => {
    // PRUEBA PARA EL METODO multiply
    it ('Comprobar que el método multiply recibe un número racional y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.multiply(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // pruebas que aseguran el correcto funcionamiento del método multiply
    it ('Comprobar que el método multiply funciona correctamente', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.multiply(new Rational(1, 1)).numerator).to.be.equal(1);
      expect(rational.multiply(new Rational(1, 1)).denominator).to.be.equal(1);
    });
    // pruebas para comprobar que se hace bien la multiplicación de dos números racionales
    it ('Comprobar que el método multiply multiplica correctamente dos números racionales', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.multiply(new Rational(1, 1)).numerator).to.be.equal(1);
      expect(rational.multiply(new Rational(1, 1)).denominator).to.be.equal(1);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.multiply(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.multiply).to.be.a('function');
    });
    //comprobamos que el metodo multiply recibe un numero racional y retorna un numero racional
    it ('Comprobar que el método multiply recibe un número racional y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.multiply(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // comprobarmos que implementa la interfaz Arithmetic
    it ('Comprobar que implementa la interfaz Arithmetic', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational).to.have.property('add').that.is.a('function');
      expect(rational).to.have.property('subtract').that.is.a('function');
      expect(rational).to.have.property('multiply').that.is.a('function');
      expect(rational).to.have.property('divide').that.is.a('function');
    });
  });
  // pruebas de la funcion divide
  describe ('Pruebas para el método divide', () => {
    // PRUEBA PARA EL METODO divide
    it ('Comprobar que el método divide recibe un número racional y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.divide(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // pruebas que aseguran el correcto funcionamiento del método divide
    it ('Comprobar que el método divide funciona correctamente', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.divide(new Rational(1, 1)).numerator).to.be.equal(1);
      expect(rational.divide(new Rational(1, 1)).denominator).to.be.equal(1);
    });
    // pruebas para comprobar que se hace bien la división de dos números racionales
    it ('Comprobar que el método divide divide correctamente dos números racionales', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.divide(new Rational(1, 1)).numerator).to.be.equal(1);
      expect(rational.divide(new Rational(1, 1)).denominator).to.be.equal(1);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.divide(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.divide).to.be.a('function');
    });
    //comprobamos que el metodo divide recibe un numero racional y retorna un numero racional
    it ('Comprobar que el método divide recibe un número racional y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.divide(new Rational(1, 1))).to.be.an.instanceof(Rational);
    });
    // comprobarmos que implementa la interfaz arithmetic
    it ('Comprobar que implementa la interfaz Arithmetic', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational).to.have.property('add').that.is.a('function');
      expect(rational).to.have.property('subtract').that.is.a('function');
      expect(rational).to.have.property('multiply').that.is.a('function');
      expect(rational).to.have.property('divide').that.is.a('function');
    });
  });
  // pruebas para el metodo abs
  describe ('Pruebas para el método abs', () => {
    // PRUEBA PARA EL METODO abs
    it ('Comprobar que el método abs no recibe ningún parámetro y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.abs()).to.be.an.instanceof(Rational);
    });
    // pruebas que aseguran el correcto funcionamiento del método abs
    it ('Comprobar que el método abs funciona correctamente', () => {
      const rational: Rational = new Rational(-1, -1);
      expect(rational.abs().numerator).to.be.equal(1);
      expect(rational.abs().denominator).to.be.equal(1);
    });
    // pruebas para comprobar que se hace bien el valor absoluto de un número racional
    it ('Comprobar que el método abs hace correctamente el valor absoluto de un número racional', () => {
      const rational: Rational = new Rational(-1, -1);
      expect(rational.abs().numerator).to.be.equal(1);
      expect(rational.abs().denominator).to.be.equal(1);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const rational: Rational = new Rational(-1, -1);
      expect(rational.abs()).to.be.an.instanceof(Rational);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const rational: Rational = new Rational(-1, -1);
      expect(rational.abs).to.be.a('function');
    });
    //comprobamos que el metodo abs no recibe parametros y retorna un numero racional
    it ('Comprobar que el método abs no recibe ningún parámetro y retorna un número racional', () => {
      const rational: Rational = new Rational(-1, -1);
      expect(rational.abs()).to.be.an.instanceof(Rational);
    });
    // comprobarmos que implementa la interfaz arithmetic
    it ('Comprobar que implementa la interfaz Arithmetic', () => {
      const rational: Rational = new Rational(-1, -1);
      expect(rational).to.have.property('add').that.is.a('function');
      expect(rational).to.have.property('subtract').that.is.a('function');
      expect(rational).to.have.property('multiply').that.is.a('function');
      expect(rational).to.have.property('divide').that.is.a('function');
    });
  });
  // pruebas para el metodo simplify
  describe ('Pruebas para el método simplify', () => {
    // PRUEBA PARA EL METODO simplify
    it ('Comprobar que el método simplify no recibe ningún parámetro y retorna un número racional', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.simplify()).to.be.an.instanceof(Rational);
    });
    // pruebas que aseguran el correcto funcionamiento del método simplify
    it ('Comprobar que el método simplify funciona correctamente', () => {
      const rational: Rational = new Rational(2, 4);
      expect(rational.simplify().numerator).to.be.equal(1);
      expect(rational.simplify().denominator).to.be.equal(2);
    });
    // pruebas para comprobar que se hace bien la simplificación de un número racional
    it ('Comprobar que el método simplify simplifica correctamente un número racional', () => {
      const rational: Rational = new Rational(2, 4);
      expect(rational.simplify().numerator).to.be.equal(1);
      expect(rational.simplify().denominator).to.be.equal(2);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const rational: Rational = new Rational(2, 4);
      expect(rational.simplify()).to.be.an.instanceof(Rational);
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const rational: Rational = new Rational(2, 4);
      expect(rational.simplify).to.be.a('function');
    });
    //comprobamos que el metodo simplify no recibe parametros y retorna un numero racional
    it ('Comprobar que el método simplify no recibe ningún parámetro y retorna un número racional', () => {
      const rational: Rational = new Rational(2, 4);
      expect(rational.simplify()).to.be.an.instanceof(Rational);
    });
    // comprobarmos que implementa la interfaz arithmetic
    it ('Comprobar que implementa la interfaz Arithmetic', () => {
      const rational: Rational = new Rational(2, 4);
      expect(rational).to.have.property('add').that.is.a('function');
      expect(rational).to.have.property('subtract').that.is.a('function');
      expect(rational).to.have.property('multiply').that.is.a('function');
    });
  });
  // pruebas para gcd
  describe ('Pruebas para el método gcd', () => {
    // PRUEBA PARA EL METODO gcd
    it ('Comprobar que el método gcd recibe dos números y retorna un número', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.gcd(1, 1)).to.be.a('number');
    });
    // pruebas que aseguran el correcto funcionamiento del método gcd
    it ('Comprobar que el método gcd funciona correctamente', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.gcd(1, 1)).to.be.equal(1);
    });
    // pruebas para comprobar que se hace bien el gcd de dos números
    it ('Comprobar que el método gcd hace correctamente el gcd de dos números', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.gcd(1, 1)).to.be.equal(1);
    });
    // pruebas para comprobar que no se retorna tipos incorrectos
    it ('Comprobar que no retorna tipos incorrectos', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.gcd(1, 1)).to.be.a('number');
    });
    // comporbarmos que es una funcion
    it ('Comprobar que es una función', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.gcd).to.be.a('function');
    });
    //comprobamos que el metodo gcd recibe dos numeros y retorna un numero
    it ('Comprobar que el método gcd recibe dos números y retorna un número', () => {
      const rational: Rational = new Rational(1, 1);
      expect(rational.gcd(1, 1)).to.be.a('number');
    });
  });
});