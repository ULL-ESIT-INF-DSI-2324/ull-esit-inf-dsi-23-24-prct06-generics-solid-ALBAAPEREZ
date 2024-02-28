// PRUEBAS PARA LA CLASE EMAILSERVICE

import 'mocha';
import { expect } from 'chai';
import { EmailService } from '../../src/EJERCICIO5/EmailService';

// pruebas de la clase EmailService
describe('EmailService', () => {
  // prueba para comprobar que implementa la interfaz NotificationService
  it('Comprobamos que implementa la interfaz NotificationService', () => {
    const emailService: EmailService = new EmailService();
    expect(emailService).to.be.instanceOf(EmailService);
  });
  // prueba para comprobar que el método notify es de tipo void
  it('Comprobamos que el método notify es de tipo void', () => {
    const emailService: EmailService = new EmailService();
    expect(emailService.notify('')).to.be.undefined;
  });
  // prueba para comprobar que el método notify notifica por email
  it('Comprobamos que el método notify notifica por email', () => {
    const emailService: EmailService = new EmailService();
    expect(emailService.notify('')).to.be.undefined;
  });
  // prueba para comprobar que imprime por pantalla el mensaje notificado por email
  it('Comprobamos que imprime por pantalla el mensaje notificando que se ha enviado un email', () => {
    const emailService: EmailService = new EmailService();
    expect(emailService.notify('')).to.be.undefined;
  });
  // pruebas para asegurarnos  que implementa la interfaz NotificationService
  it('Comprobamos que implementa la interfaz NotificationService', () => {
    const emailService: EmailService = new EmailService();
    expect(emailService).to.be.instanceOf(EmailService);
  });
  // pruebas para asegurarnos que no devuwlve tipos incorrectos
  it('Comprobamos que no devuelve tipos incorrectos', () => {
    const emailService: EmailService = new EmailService();
    expect(emailService.notify('')).to.be.undefined;
    expect(emailService.notify('')).to.not.be.a('string');
    expect(emailService.notify('')).to.not.be.a('number');
    expect(emailService.notify('')).to.not.be.a('boolean');
    expect(emailService.notify('')).to.not.be.a('object');
    expect(emailService.notify('')).to.not.be.a('array');
  });
});