import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor(
    private toastr: ToastrService
  ) { }

  msjError(e: HttpErrorResponse){
    if (e.error.msg) {
      this.toastr.error(e.error.msg, 'Error');

    }else{
      this.toastr.error('ha ocurrido un error, contacte al administrador', 'Error');
    }

  }




}
