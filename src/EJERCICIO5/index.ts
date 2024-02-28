import { EmailService } from './EmailService';
import { Notifier } from './Notifier';
import { ShortMessageService } from './ShortMessageService';

const emailNotifier = new Notifier(new EmailService());
emailNotifier.sendNotification('Hello World!');

const shortMessageNotifier = new Notifier(new ShortMessageService());
shortMessageNotifier.sendNotification('Hello World!');