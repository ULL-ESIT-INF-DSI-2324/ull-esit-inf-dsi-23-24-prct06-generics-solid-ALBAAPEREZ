// PRUEEBAS PARA LA CLASE LIBRO

import 'mocha'
import { expect } from 'chai'
import { Libro } from '../../src/EJERCICIO1/Libros'

// PRUEBAS PARA LA CLASE LIBRO
describe('Pruebas para la clase Libro', () => {
  // pruebas para comprobar que se crea un objeto Libro
  it('Se crea un objeto Libro', () => {
    const libro = new Libro('Cien años de soledad', 1, 'Libro', 2);
    expect(libro.nombre).to.be.equal('Cien años de soledad');
    expect(libro.descripcion).to.be.equal('Libro');
    expect(libro.cantidad).to.be.equal(1);
    expect(libro.peso).to.be.equal(2);
  });
  // prueba para comprobar que se crea un objeto Libro con los valores por defecto
  it('Se crea un objeto Libro con valores por defecto', () => {
    const libro = new Libro('Cien años de soledad', 1, 'Libro', 2);
    expect(libro.nombre).to.be.equal('Cien años de soledad');
    expect(libro.descripcion).to.be.equal('Libro');
    expect(libro.cantidad).to.be.equal(1);
    expect(libro.peso).to.be.equal(2);
  });
  // prueba para comprobar que es una clase
  it('Es una clase', () => {
    const libro = new Libro('Cien años de soledad', 1, 'Libro', 2);
    expect(libro).to.be.instanceOf(Libro);
  });
  // prueba para comprobar los atributos de la clase
  it('Atributos de la clase', () => {
    const libro = new Libro('Cien años de soledad', 1, 'Libro', 2);
    expect(libro).to.have.property('nombre');
    expect(libro).to.have.property('descripcion');
    expect(libro).to.have.property('cantidad');
    expect(libro).to.have.property('peso');
  });
  // prueba para comprobar el método toString
  it('Método toString', () => {
    const libro = new Libro('Cien años de soledad', 1, 'Libro', 2);
    expect(libro.toString()).to.be.equal('Libro: Cien años de soledad - Libro - 1 unidades - 2 kilos');
  });
  // prueba para comprobar que es una función
  it('Es una función', () => {
    const libro = new Libro('Cien años de soledad', 1, 'Libro', 2);
    expect(typeof libro.toString).to.be.equal('function');
  });
  // comprobar que no devuelve undefined
  it('No devuelve undefined', () => {
    const libro = new Libro('Cien años de soledad', 1, 'Libro', 2);
    expect(libro.toString()).to.not.be.equal('undefined');
  });
  // comprobar que no devuelve null
  it('No devuelve null', () => {
    const libro = new Libro('Cien años de soledad', 1, 'Libro', 2);
    expect(libro.toString()).to.not.be.equal('null');
  });
});