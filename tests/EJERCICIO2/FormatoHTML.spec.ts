// PRUEBAS PARA LA CLASE FORMATOHTML

import 'mocha';
import { expect } from 'chai';
import { FormatoHTML } from '../../src/EJERCICIO2/FormatoHTML';

// PRUEBAS PARA LA CLASE FORMATOHTML
describe('Pruebas para la clase FormatoHTML', () => {
  it('Se crea un formato HTML', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML).to.be.not.null;
  });
  it('Se puede obtener el vendedor', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.getVendedor()).to.be.equal('Vendedor');
  });
  it('Se puede obtener el comprador', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.getComprador()).to.be.equal('Comprador');
  });
  it('Se puede obtener el concepto', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.getConcepto()).to.be.equal('Concepto');
  });
  it('Se puede obtener el importe', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.getImporte()).to.be.equal(100);
  });
  it('Se puede obtener la fecha', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.getFecha()).to.be.equal('01/01/2021');
  });
  it('Se puede obtener el impuesto', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.getImpuesto()).to.be.equal(21);
  });
  it('Se puede obtener el total', () => { 
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.getTotal()).to.be.equal(121);
  });
  // Funciona tosString
  it('toString devuelve la factura en string', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.toString()).to.be.equal('Vendedor - Comprador - Concepto - 100 - 01/01/2021 - 21 - 121');
  });
  // Pruebas para comprobar que es una clase
  it('Es una clase', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML).to.be.an.instanceof(FormatoHTML);
  });
  // Prueba para comprobar que se genera en formato HTML
  it('Se genera la factura en formato HTML', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    const facturaGenerada = formatoHTML.generarFactura().replace(/\s+/g, '');
    const facturaEsperada = '<html><head><title>Factura</title></head><body><h1>Factura</h1><p>Vendedor:Vendedor</p><p>Comprador:Comprador</p><p>Concepto:Concepto</p><p>Importe:100</p><p>Fecha:01/01/2021</p><p>Impuesto:21</p><p>Total:121</p></body></html>';
    expect(facturaGenerada).to.be.equal(facturaEsperada);
  });
  // pruebas para comprobar que cada atributo tienes el tipo correcto
  it('El vendedor es un string', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.getVendedor()).to.be.a('string');
    expect(formatoHTML.getComprador()).to.be.a('string');
    expect(formatoHTML.getConcepto()).to.be.a('string');
    expect(formatoHTML.getImporte()).to.be.a('number');
    expect(formatoHTML.getFecha()).to.be.a('string');
    expect(formatoHTML.getImpuesto()).to.be.a('number');
    expect(formatoHTML.getTotal()).to.be.a('number');
  });
  // pruebas para comprobar que cada atributo no es nulo
  it('El vendedor no es nulo', () => {
    const formatoHTML = new FormatoHTML('Vendedor', 'Comprador', 'Concepto', 100, '01/01/2021', 21, 121);
    expect(formatoHTML.getVendedor()).to.be.not.null;
    expect(formatoHTML.getComprador()).to.be.not.null;
    expect(formatoHTML.getConcepto()).to.be.not.null;
    expect(formatoHTML.getImporte()).to.be.not.null;
    expect(formatoHTML.getFecha()).to.be.not.null;
    expect(formatoHTML.getImpuesto()).to.be.not.null;
    expect(formatoHTML.getTotal()).to.be.not.null;
  });
});