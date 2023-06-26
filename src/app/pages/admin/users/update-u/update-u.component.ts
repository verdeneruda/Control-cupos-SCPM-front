import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Users } from 'src/app/interfaces/users';
import { UsersService } from 'src/app/services/users.service';

@Component({
  selector: 'app-update-u',
  templateUrl: './update-u.component.html',
  styleUrls: ['./update-u.component.css']
})
export class UpdateUComponent {

  public dataId!:number;
  public listUsers!: Users
  loading: boolean = false;

  constructor(private substanceService: UsersService ,
    private fb: FormBuilder,
    private router: Router,
    private activatedroute: ActivatedRoute ) { }



  ngOnInit(): void {
    this.activatedroute.paramMap.subscribe((param:Params)=>{
      this.dataId = param['get']('id');
      
    })
  };

}
