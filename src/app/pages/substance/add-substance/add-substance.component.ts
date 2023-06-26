import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { SubstanceService } from '../../../services/substance.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
declare var window: any;

@Component({
  selector: 'app-add-substance',
  templateUrl: './add-substance.component.html',
  styleUrls: ['./add-substance.component.css']
})
export class AddSubstanceComponent implements OnInit {

  dtoptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  formModal: any;
  substance: any;
  subscription!: Subscription;
  loading: boolean = false;

  constructor(private substanceService: SubstanceService ,
              private fb: FormBuilder,
              private router: Router,
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
    
    //List Substance
    this.LoadSubstance();
    //this.subscription = this.substanceService.refresh$.subscribe(()=>{
      //this.LoadSubstance();
    //});
    this.dtoptions = {
      pagingType: 'simple_numbers',
      language:{
        searchPlaceholder:'Buscar',
        lengthMenu: 'Mostrar _MENU_ registros por pagina',
        search: 'Buscar',
        info: 'Mostrando la pagina _PAGE_ de _PAGES_'
      },
    };
  }

  LoadSubstance() {
    this.loading = true;
    this.substanceService.getSubstance().subscribe(res => {
      this.substance = res;
      this.loading = false;
      this.dtTrigger.next(null);
    });
  }
  
  public addSubstanceForm: FormGroup = this.fb.group({
    sustancia1 : ['', Validators.required ],
    subpartida: ['', [Validators.required, Validators.min(1)] ],
    tipo:['', [Validators.required] ],
    descripcion:['', Validators.required ],
  })

  onSave() {
    if(this.addSubstanceForm.valid){
      this.loading = true;
      this.substanceService.addSubstance(this.addSubstanceForm.value).subscribe(response => {
        this.loading = false;
        this._snackBar.open('Sustancia Creada.','',{
          duration: 4000,
          horizontalPosition:'right'
        })
        this.addSubstanceForm.reset();
      })
    }
  }

}
