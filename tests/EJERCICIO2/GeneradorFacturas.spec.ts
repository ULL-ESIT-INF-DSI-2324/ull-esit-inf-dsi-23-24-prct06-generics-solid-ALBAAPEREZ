// PRUEBAS PARA LA CLASE GENERADORFACTURAS

import 'mocha';
import { expect } from 'chai';
import { GeneradorFacturas } from '../../src/EJERCICIO2/GeneradorFacturas';

// PRUEBAS PARA LA CLASE GENERADORFACTURAS
describe('Pruebas para la clase GeneradorFacturas', () => {
  it('Se crea un generador de facturas', () => {
    const generador = new GeneradorFacturas();
    expect(generador).to.be.not.null;
  });
  it('Se puede agregar un formato', () => {
    const generador = new GeneradorFacturas();
    generador.agregarFormato('formato', (factura) => `Formato personalizado para formato: ${factura.toString()}`);
    expect(generador.mostrarFormatosDisponibles()).to.be.deep.equal(['formato']);
  });
  it('Se puede borrar un formato', () => {
    const generador = new GeneradorFacturas();
    generador.agregarFormato('formato', (factura) => `Formato personalizado para formato: ${factura.toString()}`);
    generador.borrarFormato('formato');
    expect(generador.mostrarFormatosDisponibles()).to.be.deep.equal([]);
  });
  it('Se puede generar una factura', () => {
    const generador = new GeneradorFacturas();
    generador.agregarFormato('formato', (factura) => `Formato personalizado para formato: ${factura.toString()}`);
    const factura = {
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
    expect(generador.generarFactura('formato', factura)).to.be.equal('Formato personalizado para formato: Factura');
  });
  it('Se puede mostrar los formatos disponibles', () => {
    const generador = new GeneradorFacturas();
    generador.agregarFormato('formato', (factura) => `Formato personalizado para formato: ${factura.toString()}`);
    expect(generador.mostrarFormatosDisponibles()).to.be.deep.equal(['formato']);
  });

  // prueba para que si no se genera un formato, devuelva un mensaje
  it('Si no se genera un formato, devuelve un mensaje', () => {
    const generador = new GeneradorFacturas();
    const factura = {
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
    expect(generador.generarFactura('formato', factura)).to.be.equal('No existe el formato');
  });
  // Pruebas para comprobar que e suna clase
  it('Se puede crear un generador de facturas', () => {
    const generador = new GeneradorFacturas();
    expect(generador).to.be.not.null;
  });
  // Pruebas para comprobar que se agregan formatos
  it('Se puede agregar un formato', () => {
    const generador = new GeneradorFacturas();
    generador.agregarFormato('formato', (factura) => `Formato personalizado para formato: ${factura.toString()}`);
    expect(generador.mostrarFormatosDisponibles()).to.be.deep.equal(['formato']);
  });
  // Pruebas para comprobar que se borran formatos
  it('Se puede borrar un formato', () => {
    const generador = new GeneradorFacturas();
    generador.agregarFormato('formato', (factura) => `Formato personalizado para formato: ${factura.toString()}`);
    generador.borrarFormato('formato');
    expect(generador.mostrarFormatosDisponibles()).to.be.deep.equal([]);
  });
  // Pruebas para comprobar que se generan facturas
  it('Se puede generar una factura', () => {
    const generador = new GeneradorFacturas();
    generador.agregarFormato('formato', (factura) => `Formato personalizado para formato: ${factura.toString()}`);
    const factura = {
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
    expect(generador.generarFactura('formato', factura)).to.be.equal('Formato personalizado para formato: Factura');
  });
  // Pruebas para comprobar que se muestran los formatos
  it('Se puede mostrar los formatos disponibles', () => {
    const generador = new GeneradorFacturas();
    generador.agregarFormato('formato', (factura) => `Formato personalizado para formato: ${factura.toString()}`);
    expect(generador.mostrarFormatosDisponibles()).to.be.deep.equal(['formato']);
  });
});