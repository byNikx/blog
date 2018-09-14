import { Injectable, NgZone } from '@angular/core';
import { MatSnackBar } from '@angular/material';


@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  private _show: any = {
    snackbar: (message: string, action: string): void => {
      this.zone.run(() => {
        this.snackBar.open(message, action, {
          duration: 2000,
          horizontalPosition: 'left',
          verticalPosition: 'bottom'
        });
      });
    },
  };
  get show(): any {
    return this._show;
  }

  constructor(
    public snackBar: MatSnackBar,
    private zone: NgZone
  ) { }



}
