import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor(private toastr: ToastrService) { }

  success(msg: string) {
    this.toastr.success(msg)
  }

  info(msg: string) {
    this.toastr.info(msg)
  }

  error(msg: string) {
    this.toastr.error(msg)
  }

  warn(msg: string) {
    this.toastr.warning(msg)
  }
}
