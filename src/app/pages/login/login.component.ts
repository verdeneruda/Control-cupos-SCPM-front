import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, Validators} from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import {MatSnackBar, MatSnackBarRef} from '@angular/material/snack-bar';
import { ToastrService } from 'ngx-toastr';
import { MessagesService } from 'src/app/services/messages.service';


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
  loading: boolean = false;

  constructor(
    private router: Router,
    private _snackBar: MatSnackBar,
    private authService: AuthService,
    private toastr: ToastrService,
    private _messages: MessagesService
  ) { }


  onLogin2(): void {
    if (this.username == '' || this.password=='' ){
      this.toastr.error('Los campos son obligatorios', 'Error!');
    }else {
    this.authService.login(this.username, this.password)
    .subscribe(
      () => {
        this.router.navigate(['search-licence']);
        this.toastr.success(this.username, 'Bienvenido!');
      },
      error => {
        this.errorMessage = 'Usuario o contraseña incorrectos';
        this.toastr.error(this.errorMessage, 'Error!');
      }
    )};
    
  }

  onLogin(): void {
    this.loading = true;
    if (this.username == '' || this.password=='' ){
      this.toastr.error('Los campos son obligatorios', 'Error!');
      this.loading = false;
    }else {
    this.authService.login(this.username, this.password)
    .subscribe(
      () => {
        
        this.router.navigate(['search-licence']);
        this.toastr.success(this.username, 'Bienvenido!');
        this.loading = false;
      },
      error => {
        this.errorMessage = 'Usuario o contraseña incorrectos';
        this.toastr.error(this.errorMessage, 'Error!');
      }
    )};
    
  }

  logout(): void {
    
  }
  ngOnInit(): void {
    
  }
}

