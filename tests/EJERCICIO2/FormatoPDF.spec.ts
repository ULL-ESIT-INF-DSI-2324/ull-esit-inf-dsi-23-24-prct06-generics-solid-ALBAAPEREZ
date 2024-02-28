// PRUEBAS PARA LA CLASE PDF

import 'mocha';
import { expect } from 'chai';
import { FormatoPDF } from '../../src/EJERCICIO2/FormatoPDF';

// PRUEBAS PARA LA CLASE PDF
describe('Pruebas para la clase PDF', () => {
  it('Se crea un formato PDF', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF).to.be.not.null;
  });
  it('Se puede obtener el vendedor', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getVendedor()).to.be.equal('Vendedor');
  });
  it('Se puede obtener el comprador', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getComprador()).to.be.equal('Comprador');
  });
  it('Se puede obtener el concepto', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getConcepto()).to.be.equal('Concepto');
  });
  it('Se puede obtener el importe', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getImporte()).to.be.equal(100);
  });
  it('Se puede obtener la fecha', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getFecha()).to.be.equal('01/01/2021');
  });
  it('Se puede obtener el impuesto', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getImpuesto()).to.be.equal(21);
  });
  it('Se puede obtener el total', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getTotal()).to.be.equal(121);
  });
  // Funciona tosString
  it('toString devuelve la factura en string', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.toString()).to.be.equal('Vendedor: Vendedor, Comprador: Comprador, Concepto: Concepto, Importe: 100, Fecha: 01/01/2021, Impuesto: 21, Total: 121');
  });
  // Pruebas para comprobar que es una clase
  it('Es una clase', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF).to.be.an.instanceof(FormatoPDF);
  });
  // Pruebas para comprobar que cada atributo tienes el tipo correcto
  it('El vendedor es un string', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getVendedor()).to.be.a('string');
  });
  it('El comprador es un string', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getComprador()).to.be.a('string');
  });
  // Prueba para ver que funciona la funcion de generar factura
  it('Se genera la factura', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    formatoPDF.generarFactura();
  });
  // Prueba para ver que no retorna tipos incorrectos
  it('El concepto es un string', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getConcepto()).to.be.a('string');
  });
  // Prueba para ver que no retorna tipos incorrectos
  it('El importe es un number', () => {
    const formatoPDF = new FormatoPDF('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoPDF.getImporte()).to.be.a('number');
    expect(formatoPDF.getTotal()).to.be.a('number');
    expect(formatoPDF.getImpuesto()).to.be.a('number');
    expect(formatoPDF.getFecha()).to.be.a('string');
    expect(formatoPDF.getConcepto()).to.be.a('string');
  });
});