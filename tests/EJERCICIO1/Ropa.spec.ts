// PRUEBAS PARA LA CLASE ROPA

import 'mocha'
import { expect } from 'chai'
import { Ropa } from '../../src/EJERCICIO1/Ropa'

// PRUEBAS PARA LA CLASE ROPA
describe('Pruebas para la clase Ropa', () => {
  // pruebas para comprobar que se crea un objeto Ropa
  it('Se crea un objeto Ropa', () => {
    const ropa = new Ropa('Camisa', 1, 'Ropa', 0.5);
    expect(ropa.nombre).to.be.equal('Camisa');
    expect(ropa.descripcion).to.be.equal('Ropa');
    expect(ropa.cantidad).to.be.equal(1);
    expect(ropa.peso).to.be.equal(0.5);
  });
  // prueba para comprobar que se crea un objeto Ropa con los valores por defecto
  it('Se crea un objeto Ropa con valores por defecto', () => {
    const ropa = new Ropa('Pantalón', 1, 'Ropa', 0.5);
    expect(ropa.nombre).to.be.equal('Pantalón');
    expect(ropa.descripcion).to.be.equal('Ropa');
    expect(ropa.cantidad).to.be.equal(1);
    expect(ropa.peso).to.be.equal(0.5);
  });
  // prueba para comprobar que es una clase
  it('Es una clase', () => {
    const ropa = new Ropa('Pantalón', 1, 'Ropa', 0.5);
    expect(ropa).to.be.instanceOf(Ropa);
  });
  // prueba para comprobar los atributos de la clase
  it('Atributos de la clase', () => {
    const ropa = new Ropa('Pantalón', 1, 'Ropa', 0.5);
    expect(ropa).to.have.property('nombre');
    expect(ropa).to.have.property('descripcion');
    expect(ropa).to.have.property('cantidad');
    expect(ropa).to.have.property('peso');
  });
  // prueba para comprobar el método toString
  it('Método toString', () => {
    const ropa = new Ropa('Camisa', 1, 'Ropa', 0.5);
    expect(ropa.toString()).to.be.equal('Ropa: Camisa - Ropa - 1 unidades - 0.5 kilos');
  });
  // prueba para comprobar que es una función
  it('Es una función', () => {
    const ropa = new Ropa('Camisa', 1, 'Ropa', 0.5);
    expect(typeof ropa.toString).to.be.equal('function');
  });
});