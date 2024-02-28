// PRUEBAS PARA LA CLASE ELECTRODOMESTICO

import 'mocha'
import { expect } from 'chai'
import { Electrodomestico } from '../../src/EJERCICIO1/Electrodomestico'

// PRUEBAS PARA LA CLASE ELECTRODOMESTICO
describe('Pruebas para la clase Electrodomestico', () => {
  // pruebas para comprobar que se crea un objeto Electrodomestico
  it('Se crea un objeto Electrodomestico', () => {
    const electrodomestico = new Electrodomestico('Licuadora', 5);
    expect(electrodomestico.nombre).to.be.equal('Licuadora');
    expect(electrodomestico.descripcion).to.be.equal('Electrodoméstico');
    expect(electrodomestico.cantidad).to.be.equal(1);
    expect(electrodomestico.peso).to.be.equal(5);
  });
  // prueba para comprobar que se crea un objeto Electrodomestico con los valores por defecto
  it('Se crea un objeto Electrodomestico con valores por defecto', () => {
    const electrodomestico = new Electrodomestico('Televisor', 10);
    expect(electrodomestico.nombre).to.be.equal('Televisor');
    expect(electrodomestico.descripcion).to.be.equal('Electrodoméstico');
    expect(electrodomestico.cantidad).to.be.equal(1);
    expect(electrodomestico.peso).to.be.equal(10);
  });
  // prueba para comprobar que es una clase
  it('Es una clase', () => {
    const electrodomestico = new Electrodomestico('Televisor', 10);
    expect(electrodomestico).to.be.instanceOf(Electrodomestico);
  });
  // prueba para comprobar los atributos de la clase
  it('Atributos de la clase', () => {
    const electrodomestico = new Electrodomestico('Televisor', 10);
    expect(electrodomestico).to.have.property('nombre');
    expect(electrodomestico).to.have.property('descripcion');
    expect(electrodomestico).to.have.property('cantidad');
    expect(electrodomestico).to.have.property('peso');
  });
  // prueba para comprobar el método toString
  it('Método toString', () => {
    const electrodomestico = new Electrodomestico('Licuadora', 5);
    expect(electrodomestico.toString()).to.be.equal('Electrodoméstico: Licuadora - Electrodoméstico - 1 unidades - 5 kilos');
  });
  // prueba para comprobar que es una función
  it('Es una función', () => {
    const electrodomestico = new Electrodomestico('Licuadora', 5);
    expect(typeof electrodomestico.toString).to.be.equal('function');
  });
});