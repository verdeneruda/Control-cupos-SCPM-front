import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  username: string = '';
  password: string = '';
  errorMessage: string = '';
  durationInSeconds = 3;
  fullName: string = '';

  constructor(
    private router: Router,
    private authService: AuthService,
    private _snackBar: MatSnackBar
  ) { }

  openSnackBar() {
    this._snackBar.openFromComponent(LoginSnackComponent, {
      duration: this.durationInSeconds * 3000,

    });
  }

  onLogin(): void {
    this.authService.login(this.username, this.password)
    .subscribe(
      () => {
        this.router.navigate(['search-licence']);
        this.mensajeExito('Bienvenido');
      },
      error => {
        this.errorMessage = 'Usuario o contraseña incorrectos';
        this.mensajeError('Usuario o contraseña incorrectos');
      }
    );
    
  }


  mensajeExito(texto: string) {
    this._snackBar.open(` ${texto} ${this.authService.fullName()} `,'', {
      duration: 4000,
      horizontalPosition: 'right',
      panelClass: 'success'
    });
  }
  mensajeError(texto: string) {
    this._snackBar.open(` ${texto} `,'OK' , {
      duration: 4000,
      horizontalPosition: 'right',
      panelClass: 'error'
    });
  }
  logout(): void {
    
  }
  ngOnInit(): void {
    
  }
}
export class LoginSnackComponent {
  snackBarRef = inject(MatSnackBarRef);
}
