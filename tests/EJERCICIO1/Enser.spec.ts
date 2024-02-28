// PRUEBAS PARA LA CLASE ENSER

import 'mocha'
import { expect } from 'chai'
import { Enser } from '../../src/EJERCICIO1/Enser'

// PRUEBAS PARA LA CLASE ENSER
describe('Pruebas para la clase Enser', () => {
  // pruebas para comprobar que se crea un objeto Enser
  it('Se crea un objeto Enser', () => {
    const enser: Enser = {
      nombre: 'Libro',
      descripcion: 'Libro de historia',
      cantidad: 2,
      peso: 2
    }
    expect(enser.nombre).to.be.equal('Libro')
    expect(enser.descripcion).to.be.equal('Libro de historia')
    expect(enser.cantidad).to.be.equal(2)
    expect(enser.peso).to.be.equal(2)
  });
  // prueba para comprobar que se crea un objeto Enser con los valores por defecto
  it('Se crea un objeto Enser con valores por defecto', () => {
    const enser: Enser = {
      nombre: 'Libro',
      descripcion: 'Libro de historia',
      cantidad: 1,
      peso: 1
    }
    expect(enser.nombre).to.be.equal('Libro')
    expect(enser.descripcion).to.be.equal('Libro de historia')
    expect(enser.cantidad).to.be.equal(1)
    expect(enser.peso).to.be.equal(1)
  });
  // prueba para comprobar que es una interfaz
  it('Es una interfaz', () => {
    const enser: Enser = {
      nombre: 'Libro',
      descripcion: 'Libro de historia',
      cantidad: 1,
      peso: 1
    }
    expect(enser).to.be.instanceOf(Object)
  });
  // prueba para comprobar los atributos de la interfaz
  it('Atributos de la interfaz', () => {
    const enser: Enser = {
      nombre: 'Libro',
      descripcion: 'Libro de historia',
      cantidad: 1,
      peso: 1
    }
    expect(enser).to.have.property('nombre')
    expect(enser).to.have.property('descripcion')
    expect(enser).to.have.property('cantidad')
    expect(enser).to.have.property('peso')
  });
});