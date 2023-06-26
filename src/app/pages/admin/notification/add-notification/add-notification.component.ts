import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { NotifyService } from 'src/app/services/notify.service';
import { Notification } from 'src/app/interfaces/notification';



@Component({
  selector: 'app-add-notification',
  templateUrl: './add-notification.component.html',
  styleUrls: ['./add-notification.component.css']
})
export class AddNotificationComponent {

  notify: any
  loading: boolean = false;
  formAddNotify: FormGroup;
  id:number;

  constructor(private notifyServices: NotifyService ,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute) {
      this.formAddNotify = this.fb.group({
        idRolPermiso: ['', Validators.required],
        contenidoMensaje: ['', Validators.required],
        aplicaImportador: [false, Validators.required],
      })
      this.id = Number(this.aRoute.snapshot.paramMap.get('id'));

    }

  onSaveNotify(){

    const notificacion: Notification = {
      idRolPermiso: this.formAddNotify.value.idRolPermiso,
      contenidoMensaje: this.formAddNotify.value.contenidoMensaje,
      aplicaImportador: this.formAddNotify.value.aplicaImportador

    }
    console.log(this.formAddNotify)
    if(this.id != 0) {
      notificacion.id = this.id;
      this.editNotify(this.id, notificacion);
    } else {
      this.addNotify(notificacion);
    }
    
  }

  editNotify(id: number, notification: Notification) {
    this.loading = true;
    this.notifyServices.updateNotification(id, notification).subscribe(() => {
      this.loading = false;
      console.log('llegue')
      this.mensajeExito('actualizada');
      this.router.navigate(['/notification']);
    })
  }
  addNotify(notification: Notification) {
    this.loading = true;
    this.notifyServices.addNotification(notification).subscribe(data => {
      this.loading = false;
      this.mensajeExito('registrada');
      this.router.navigate(['/notification']);
    })
  }
  mensajeExito(texto: string) {
    this._snackBar.open(`La Notificacion fue ${texto} con exito`,'', {
      duration: 4000,
      horizontalPosition: 'right',
    });
  }
}


