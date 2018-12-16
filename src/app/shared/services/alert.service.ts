import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private snackbar: MatSnackBar
  ) { }

  public show(content: string, button?: string, duration?: number) {
    setTimeout(() => {
      this.snackbar.open(content, button ? button : null, {duration: duration ? duration : 3000});
    });
  }


}
