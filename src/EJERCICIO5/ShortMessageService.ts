import { NotificationService } from './NotificationService';

/**
 * Clase ShortMessageService que implementa la interfaz NotificationService.
 * Lo que hace es implementar el método notify de la interfaz NotificationService.
 * El método notify se encarga de notificar por SMS.
 */
export class ShortMessageService implements NotificationService {
  /**
   * Función que se encarga de notificar por SMS.
   * Imprime un mensaje notificando por SMS.
   * @param message 
   */
  notify(message: string): void {
    console.log(`Sending notification by SMS: ${message}`);
  }
}