/**
 * Interface NotificationService
 * Se encarga de definir el método notify.
 * El método notify se encarga de notificar y es de tipo void (no retorna nada).
 */
export interface NotificationService {
  notify(message: string): void;
}