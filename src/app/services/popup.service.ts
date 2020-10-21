import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar'

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private popup: MatSnackBar) { }

  success(msg: string, dur = 2000) {
    this.popup.open(msg, 'SUCCESS', {
      duration: dur,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    })
  }

  error(msg: string, dur = 2000) {
    this.popup.open(msg, 'ERROR', {
      duration: dur,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    })
  }

  info(msg: string, dur = 2000) {
    this.popup.open(msg, 'INFO', {
      duration: dur,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    })
  }

  warn(msg: string, dur = 2000) {
    this.popup.open(msg, 'WARN', {
      duration: dur,
      horizontalPosition: 'end',
      verticalPosition: 'bottom',
    })
  }
}
