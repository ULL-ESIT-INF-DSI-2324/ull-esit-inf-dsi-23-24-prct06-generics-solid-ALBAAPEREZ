// PRUEBAS PARA LA CLASE CAJA

import 'mocha'
import { expect } from 'chai'
import { Caja } from '../../src/EJERCICIO1/Caja'

// PRUEBAS PARA LA CLASE CAJA
describe('Pruebas para la clase Caja', () => {
  describe('Pruebas para el método agregarEnser', () => {
    it ('Se agrega un enser a la caja', () => {
      const caja = new Caja(2, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      expect(caja['enseres'].length).to.equal(1);
    });
    // Prueba para verificar que no se puede agregar un enser si la caja está llena
    it ('No se puede agregar un enser si la caja está llena', () => {
      const caja = new Caja(1, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      caja.agregarEnser({nombre: 'Televisor', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      expect(caja['enseres'].length).to.equal(1);
    });
    // Prueba para verificar que se actualiza el peso actual de la caja
    it ('Se actualiza el peso actual de la caja', () => {
      const caja = new Caja(2, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      expect(caja['pesoActual']).to.equal(5);
    });
    // prueba que imprime el mensaje si no se puede agregar el enser
    it ('Imprime el mensaje si no se puede agregar el enser', () => {
      const caja = new Caja(1, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      caja.agregarEnser({nombre: 'Televisor', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      expect(caja['enseres'].length).to.equal(1);
    });
    // Prueba para verificar que no se puede agregar un enser si excede el peso máximo
    it ('No se puede agregar un enser si excede el peso máximo', () => {
      const caja = new Caja(2, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 15});
      expect(caja['enseres'].length).to.equal(0);
    });
    // prueba para comprobar que es una función
    it ('Es una función', () => {
      const caja = new Caja(2, 10);
      expect(typeof caja.agregarEnser).to.equal('function');
    });
  });
  // pruebas para la función eliminarEnserPorNombre
  describe('Pruebas para el método eliminarEnserPorNombre', () => {
    // Prueba para verificar que se elimina un enser de la caja por nombre
    it ('Se elimina un enser de la caja por nombre', () => {
      const caja = new Caja(2, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      caja.eliminarEnserPorNombre('Licuadora');
      expect(caja['enseres'].length).to.equal(0);
    });
    // Prueba para verificar que se actualiza el peso actual de la caja
    it ('Se actualiza el peso actual de la caja', () => {
      const caja = new Caja(2, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      caja.eliminarEnserPorNombre('Licuadora');
      expect(caja['pesoActual']).to.equal(0);
    });
    // Prueba para verificar que se imprime el mensaje si no se encuentra el enser
    it ('Imprime el mensaje si no se encuentra el enser', () => {
      const caja = new Caja(2, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      caja.eliminarEnserPorNombre('Televisor');
      expect(caja['enseres'].length).to.equal(1);
    });
    // prueba para comprobar que es una función
    it ('Es una función', () => {
      const caja = new Caja(2, 10);
      expect(typeof caja.eliminarEnserPorNombre).to.equal('function');
    });
  });
  // pruebas para la función listarEnseres
  describe('Pruebas para el método listarEnseres', () => {
    // Prueba para verificar que se lista el contenido de la caja
    it ('Se lista el contenido de la caja', () => {
      const caja = new Caja(2, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      caja.agregarEnser({nombre: 'Televisor', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      caja.listarEnseres();
    });
    // prueba para comprobar que es una función
    it ('Es una función', () => {
      const caja = new Caja(2, 10);
      expect(typeof caja.listarEnseres).to.equal('function');
    });
    // prueba para comprobar que imprime el mensaje si la caja está vacía
    it ('Imprime el mensaje si la caja está vacía', () => {
      const caja = new Caja(2, 10);
      caja.listarEnseres();
    });    
  });
  // pruebas para la funcion buscarEnserPorNombre
  describe('Pruebas para el método buscarEnserPorNombre', () => {
    // Prueba para verificar que se busca un enser por nombre
    it ('Se busca un enser por nombre', () => {
      const caja = new Caja(2, 10);
      caja.agregarEnser({nombre: 'Licuadora', descripcion: 'Electrodoméstico', cantidad: 1, peso: 5});
      caja.buscarEnserPorNombre('Licuadora');
    });
    // Prueba para verificar que se imprime el mensaje si no se encuentra el enser
    it ('Imprime el mensaje si no se encuentra el enser', () => {
      const caja = new Caja(2, 10);
      caja.buscarEnserPorNombre('Licuadora');
    });
    // prueba para comprobar que es una función
    it ('Es una función', () => {
      const caja = new Caja(2, 10);
      expect(typeof caja.buscarEnserPorNombre).to.equal('function');
    });
  });
});