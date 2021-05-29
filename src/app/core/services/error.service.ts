import { Injectable } from '@angular/core';
import * as alertify from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor() {
    alertify.set('notifier', 'position', 'bottom-right');
  }

  showErrorAlertMessage(message: string) {
    alertify.error(message).delay(100);
  }

  showSuccessAlertMessage(message: string) {
    alertify.success(message).delay(100);
  }
}
