import { NotificationService } from './NotificationService';

/**
 * Clase Notifier.
 * Se encarga de notificar. 
 * Basicamente delega la notificación al servicio de notificación.
 */
export class Notifier {
  /**
   * Constructor de la clase Notifier.
   * Se encarga de inyectar la dependencia de NotificationService.
   * @param notificationService notificación.
   */
  constructor(private notificationService: NotificationService) {
  }
  
  /**
   * Función que se encarga de enviar una notificación.
   * Basicamente delega la notificación al servicio de notificación.
   * @param message mensaje a notificar.
   */
  sendNotification(message: string): void {
    this.notificationService.notify(message);
  }
}