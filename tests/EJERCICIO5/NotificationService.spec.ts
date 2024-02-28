// PRUEBAS DE LA CLASE NOTIFICATIONSERVICE

import 'mocha';
import { expect } from 'chai';
import { NotificationService } from '../../src/EJERCICIO5/NotificationService';
import { EmailService } from '../../src/EJERCICIO5/EmailService';

// pruebas de la clase NotificationService
describe('NotificationService', () => {
  // prueba para comprobar que es una interfaz
  it('Comprobamos que es una interfaz', () => {
    const notificationService: NotificationService = new EmailService();
    expect(notificationService).to.be.instanceOf(EmailService);
  });
  // prueba para comprobar que tiene el método notify
  it('Comprobamos que tiene el método notify', () => {
    const notificationService: NotificationService = new EmailService();
    expect(notificationService.notify).to.exist;
  });
  // prueba para comprobar que el método notify es de tipo void
  it('Comprobamos que el método notify es de tipo void', () => {
    const notificationService: NotificationService = new EmailService();
    expect(notificationService.notify('')).to.be.undefined;
  });
});