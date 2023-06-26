import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from 'rxjs';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  dtoptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  users: any
  loading: boolean = false;

  constructor(private usersServices: UsersService ,
              private fb: FormBuilder) { }

  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'simple_numbers',
      language:{
        searchPlaceholder:'Buscar',
        lengthMenu: 'Mostrar _MENU_ registros por pagina',
        search: 'Buscar',
        info: 'Mostrando la pagina _PAGE_ de _PAGES_'
      },
    };
        //List Substance
        this.listUsers();
  }

  listUsers() {
    this.loading = true;
    this.usersServices.getListUsers().subscribe(res => {
      this.users = res;
      this.loading = false;
      this.dtTrigger.next(null);
    });
}

public addUsersForm: FormGroup = this.fb.group({
  identificacion : ['', Validators.required ],
  usuarioCuenta: ['', [Validators.required,] ],
  nombres:['', [Validators.required] ],
  apellidos:['', Validators.required ],
  correo:['', Validators.required ],
  activo:['', Validators.required ],
})

onSaveUser() {

}

}
