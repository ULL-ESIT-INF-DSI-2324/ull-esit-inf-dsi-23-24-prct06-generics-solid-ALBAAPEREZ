import { NotificationService } from './NotificationService';

/**
 * Clase EmailService que implementa la interfaz NotificationService.
 * Lo que hace es implementar el método notify de la interfaz NotificationService.
 * El método notify se encarga de notificar por email.
 */
export class EmailService implements NotificationService {
  /**
   * Metodo que se encarga de notificar por email.
   * Imprime un mensaje notificando por email.
   */
  notify(message: string): void {
    console.log(`Sending notification by email: ${message}`);
  }
}