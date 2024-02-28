// PRUEBAS PARA LA CLASE FACTURA

import 'mocha';
import { expect } from 'chai';
import { Factura } from '../../src/EJERCICIO2/Factura';

describe('Pruebas para la clase Factura', () => {
  it('Se crea una factura con los datos correctos', () => {
    const factura: Factura = {
      vendedor: 'Vendedor',
      comprador: 'Comprador',
      concepto: 'Concepto',
      importe: 100,
      fecha: '01/01/2021',
      impuesto: 21,
      total: 121,
      toString: () => 'Factura',
      generarFactura: () => 'Factura'
    };
    expect(factura.vendedor).to.be.equal('Vendedor');
    expect(factura.comprador).to.be.equal('Comprador');
    expect(factura.concepto).to.be.equal('Concepto');
    expect(factura.importe).to.be.equal(100);
    expect(factura.fecha).to.be.equal('01/01/2021');
    expect(factura.impuesto).to.be.equal(21);
    expect(factura.total).to.be.equal(121);
    expect(factura.toString()).to.be.equal('Factura');
    expect(factura.generarFactura()).to.be.equal('Factura');
  });
  // Pruebas para el método toString
  it('toString devuelve la factura en string', () => {
    const factura: Factura = {
      vendedor: 'Vendedor',
      comprador: 'Comprador',
      concepto: 'Concepto',
      importe: 100,
      fecha: '01/01/2021',
      impuesto: 21,
      total: 121,
      toString: () => 'Factura',
      generarFactura: () => 'Factura'
    };
    expect(factura.toString()).to.be.equal('Factura');
  });
  // Pruebas para comprobar que es una interfaz
  it('Se puede crear una factura con los datos correctos', () => {
    const factura: Factura = {
      vendedor: 'Vendedor',
      comprador: 'Comprador',
      concepto: 'Concepto',
      importe: 100,
      fecha: '01/01/2021',
      impuesto: 21,
      total: 121,
      toString: () => 'Factura',
      generarFactura: () => 'Factura'
    };
    expect(factura).to.be.not.null;
  });
  // pruebas para comprobar que cada atributo tienes el tipo correcto
  it('El vendedor es de tipo string', () => {
    const factura: Factura = {
      vendedor: 'Vendedor',
      comprador: 'Comprador',
      concepto: 'Concepto',
      importe: 100,
      fecha: '01/01/2021',
      impuesto: 21,
      total: 121,
      toString: () => 'Factura',
      generarFactura: () => 'Factura'
    };
    expect(factura.vendedor).to.be.a('string');
    expect(factura.comprador).to.be.a('string');
    expect(factura.concepto).to.be.a('string');
    expect(factura.importe).to.be.a('number');
    expect(factura.fecha).to.be.a('string');
    expect(factura.impuesto).to.be.a('number');
    expect(factura.total).to.be.a('number');
    expect(factura.toString()).to.be.a('string');
    expect(factura.generarFactura()).to.be.a('string');
  });
});