// PRUEBAS PARA LA CLASE MUEBLES
import 'mocha'
import { expect } from 'chai'
import { Mueble } from '../../src/EJERCICIO1/Mueble'

// PRUEBAS PARA LA CLASE MUEBLES
describe('Pruebas para la clase Muebles', () => {
  // pruebas para comprobar que se crea un objeto Muebles
  it('Se crea un objeto Muebles', () => {
    const muebles = new Mueble('Silla', 1, 'Muebles', 5);
    expect(muebles.nombre).to.be.equal('Silla');
    expect(muebles.descripcion).to.be.equal('Muebles');
    expect(muebles.cantidad).to.be.equal(1);
    expect(muebles.peso).to.be.equal(5);
  });
  // prueba para comprobar que se crea un objeto Muebles con los valores por defecto
  it('Se crea un objeto Muebles con valores por defecto', () => {
    const muebles = new Mueble('Mesa', 1, 'Muebles', 10);
    expect(muebles.nombre).to.be.equal('Mesa');
    expect(muebles.descripcion).to.be.equal('Muebles');
    expect(muebles.cantidad).to.be.equal(1);
    expect(muebles.peso).to.be.equal(10);
  });
  // prueba para comprobar que es una clase
  it('Es una clase', () => {
    const muebles = new Mueble('Mesa', 1, 'Muebles', 10);
    expect(muebles).to.be.instanceOf(Mueble);
  });
  // prueba para comprobar los atributos de la clase
  it('Atributos de la clase', () => {
    const muebles = new Mueble('Mesa', 1, 'Muebles', 10);
    expect(muebles).to.have.property('nombre');
    expect(muebles).to.have.property('descripcion');
    expect(muebles).to.have.property('cantidad');
    expect(muebles).to.have.property('peso');
  });
  // prueba para comprobar el método toString
  it('Método toString', () => {
    const muebles = new Mueble('Silla', 1, 'Mueble', 5);
    expect(muebles.toString()).to.be.equal('Mueble: Silla - 1 unidades - 5 kilos');
  });
});