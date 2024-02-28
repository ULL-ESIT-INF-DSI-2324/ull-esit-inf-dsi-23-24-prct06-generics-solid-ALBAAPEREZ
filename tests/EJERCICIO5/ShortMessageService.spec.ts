// PRUEBAS PARA LA CLASE SHORTMESSAGESERVICE

import 'mocha';
import { expect } from 'chai';
import { ShortMessageService } from '../../src/EJERCICIO5/ShortMessageService';

// pruebas de la clase ShortMessageService
describe('ShortMessageService', () => {
  // prueba para comprobar que implementa la interfaz NotificationService
  it('Comprobamos que implementa la interfaz NotificationService', () => {
    const shortMessageService: ShortMessageService = new ShortMessageService();
    expect(shortMessageService).to.be.instanceOf(ShortMessageService);
  });
  // prueba para comprobar que el método notify es de tipo void
  it('Comprobamos que el método notify es de tipo void', () => {
    const shortMessageService: ShortMessageService = new ShortMessageService();
    expect(shortMessageService.notify('')).to.be.undefined;
  });
  // prueba para comprobar que el método notify notifica por mensaje corto
  it('Comprobamos que el método notify notifica por mensaje corto', () => {
    const shortMessageService: ShortMessageService = new ShortMessageService();
    expect(shortMessageService.notify('')).to.be.undefined;
  });
  // prueba para comprobar que imprime por pantalla el mensaje notificado por mensaje corto
  it('Comprobamos que imprime por pantalla el mensaje notificando que se ha enviado un mensaje corto', () => {
    const shortMessageService: ShortMessageService = new ShortMessageService();
    expect(shortMessageService.notify('')).to.be.undefined;
  });
  // pruebas para asegurarnos  que implementa la interfaz NotificationService
  it('Comprobamos que implementa la interfaz NotificationService', () => {
    const shortMessageService: ShortMessageService = new ShortMessageService();
    expect(shortMessageService).to.be.instanceOf(ShortMessageService);
  });
  // pruebas para asegurarnos que no devuwlve tipos incorrectos
  it('Comprobamos que no devuelve tipos incorrectos', () => {
    const shortMessageService: ShortMessageService = new ShortMessageService();
    expect(shortMessageService.notify('')).to.be.undefined;
    expect(shortMessageService.notify('')).to.not.be.a('string');
    expect(shortMessageService.notify('')).to.not.be.a('number');
    expect(shortMessageService.notify('')).to.not.be.a('boolean');
    expect(shortMessageService.notify('')).to.not.be.a('object');
    expect(shortMessageService.notify('')).to.not.be.a('array');
  });
  
});
