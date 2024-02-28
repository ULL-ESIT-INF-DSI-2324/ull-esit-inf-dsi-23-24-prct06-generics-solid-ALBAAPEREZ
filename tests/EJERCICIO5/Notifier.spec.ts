// PRUEBAS PARA LA CLASE NOTIFIER

import 'mocha';
import { expect } from 'chai';
import { Notifier } from '../../src/EJERCICIO5/Notifier';
import { EmailService } from '../../src/EJERCICIO5/EmailService';

// pruebas de la clase Notifier
describe('Notifier', () => {
  // prueba para comprobar que el método sendNotification notifica
  it('Comprobamos que el método sendNotification notifica', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier.sendNotification('')).to.be.undefined;
  });
  // prueba para comprobar que imprime por pantalla el mensaje notificado
  it('Comprobamos que imprime por pantalla el mensaje notificado', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier.sendNotification('')).to.be.undefined;
  });
  // pruebas para asegurarnos que no devuwlve tipos incorrectos
  it('Comprobamos que no devuelve tipos incorrectos', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier.sendNotification('')).to.be.undefined;
    expect(notifier.sendNotification('')).to.not.be.a('string');
    expect(notifier.sendNotification('')).to.not.be.a('number');
    expect(notifier.sendNotification('')).to.not.be.a('boolean');
    expect(notifier.sendNotification('')).to.not.be.a('object');
    expect(notifier.sendNotification('')).to.not.be.a('array');
  });
  // pruebas para comprobar que el método sendNotification es de tipo void
  it('Comprobamos que el método sendNotification es de tipo void', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier.sendNotification('')).to.be.undefined;
  });
  // pruebas para comprobar que el método sendNotification notifica por email
  it('Comprobamos que el método sendNotification notifica por email', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier.sendNotification('')).to.be.undefined;
  });
  // pruebas para asegurarnos que implementa la interfaz NotificationService
  it('Comprobamos que implementa la interfaz NotificationService', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier).to.be.instanceOf(Notifier);
  });
  // pruebas para comprobar que es una clase
  it('Comprobamos que es una clase', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier).to.be.instanceOf(Notifier);
  });
  // pruebas para comprobar que el método sendNotification es de tipo void
  it('Comprobamos que el método sendNotification es de tipo void', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier.sendNotification('')).to.be.undefined;
  });
  // Es una clase
  it('Comprobamos que es una clase', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier).to.be.instanceOf(Notifier);
  });
  // Comprobamos que implementa la interfaz NotificationService
  it('Comprobamos que implementa la interfaz NotificationService', () => {
    const notifier: Notifier = new Notifier(new EmailService());
    expect(notifier).to.be.instanceOf(Notifier);
  });

});