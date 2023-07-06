import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Substance } from 'src/app/interfaces/substance';
import { SubstanceService } from 'src/app/services/substance.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-add-substance',
  templateUrl: './add-substance.component.html',
  styleUrls: ['./add-substance.component.css']
})
export class AddSubstanceComponent {

  formModal: any;
  substance: any;
  subscription!: Subscription;
  loading: boolean = false;
  id:number;
  addSubstanceForm: FormGroup;
  titleSubstance: string = 'Crear'

  constructor(private _substanceService: SubstanceService ,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private toastr: ToastrService,
    private router: Router,
    private aRoute: ActivatedRoute) {
      const idUser = sessionStorage.getItem('idUser')
      this.addSubstanceForm = this.fb.group({
        sustancia1 : ['', Validators.required ],
        subpartida: ['', [Validators.required, Validators.min(1)] ],
        tipo:['', [Validators.required] ],
        descripcion:['', Validators.required ],
        usuarioCreacion: Number(idUser)
      })
      this.id = Number(this.aRoute.snapshot.paramMap.get('id'))
    }

    ngOnInit(): void {
      
      if(this.id != 0) {
        this.titleSubstance= 'Actualizar';
        this.loading=false
        this.getSubstanceById(this.id)
        //substance.id = this.id;
        //this.editNotify(this.id, notificacion);
      } else {
        this.loading=false
        //this.addSubstance(substance);
      }
      
    }

    getSubstanceById(id: number){
      this.loading=true
      this._substanceService.getSubstanceId(id).subscribe(data => {
        this.addSubstanceForm.patchValue({
          sustancia1: data.sustancia1,
          subpartida: data.subpartida,
          tipo: data.tipo,
          descripcion: data.descripcion
        })
        this.loading=false
      })

    }

    onSave(){
      this.loading=true
      const substance: Substance = {
        sustancia1: this.addSubstanceForm.value.sustancia1,
        subpartida: this.addSubstanceForm.value.subpartida,
        tipo: this.addSubstanceForm.value.tipo,
        descripcion: this.addSubstanceForm.value.descripcion,
        usuarioCreacion: this.addSubstanceForm.value.usuarioCreacion
      }

      if (this.id !== 0) {
        // Es editar 
        substance.id = this.id;
        this._substanceService.updateSubstance(this.id, substance).subscribe(() => {
          this.toastr.info(`El Item ${substance.sustancia1} fue actualizado con exito`, 'Item actualizado');
          this.loading = false;
          this.router.navigate(['/substance']);
        })
  
      } else {
        // Es agregagar
        this._substanceService.addSubstance(substance).subscribe(() => {
          this.toastr.success(`El Item ${substance.sustancia1} fue registrado con exito`, 'Item registrado');
          this.loading = false;
          this.router.navigate(['/substance']);
        })
      }
    }

      // servicio crear
  addSubstance(substance: Substance) {
    this.loading = true;
    this._substanceService.addSubstance(substance).subscribe(data => {
      this.loading = false;
      this.router.navigate(['/substance']);
    })
  }

}
