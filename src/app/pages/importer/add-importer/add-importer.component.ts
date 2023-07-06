import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { Substance } from 'src/app/interfaces/substance';
import { ToastrService } from 'ngx-toastr';
import { Importer } from 'src/app/interfaces/importer';
import { ImporterService } from 'src/app/services/importer.service';

@Component({
  selector: 'app-add-importer',
  templateUrl: './add-importer.component.html',
  styleUrls: ['./add-importer.component.css']
})
export class AddImporterComponent {

  formModal: any;
  importer: any;
  subscription!: Subscription;
  loading: boolean = false;
  id:number;
  addImporterForm: FormGroup;
  titleImporter: string = 'Crear'

  constructor(private _importerService: ImporterService ,
    private fb: FormBuilder,
    private toastr: ToastrService,
    private router: Router,
    private aRoute: ActivatedRoute) {
      const idUser = sessionStorage.getItem('idUser')
      this.addImporterForm = this.fb.group({
        nombreImportador : ['', Validators.required ],
        tipoImportador: ['', [Validators.required] ],
        estado:['', [Validators.required] ],
        usuarioCreacion: Number(idUser)
      })
      
      this.id = Number(this.aRoute.snapshot.paramMap.get('id'))
      console.log(this.id)
    }

    ngOnInit(): void {

      if(this.id != 0) {
        this.titleImporter= 'Editar';
        this.loading=false
        this.getImporterById(this.id)
      

      } else {
        this.loading=false
      }
      
    }

    getImporterById(id: number){
      this.loading=true
      this._importerService.getImporterId(id).subscribe(data => {
        this.addImporterForm.patchValue({
          nombreImportador: data.nombreImportador,
          tipoImportador: data.tipoImportador,
          estado: data.estado
        })
        console.log(this.addImporterForm)
        this.loading=false
      })

    }

    onSave(){
      this.loading=true
      const importer: Importer = {
        nombreImportador: this.addImporterForm.value.nombreImportador,
        tipoImportador: Number(this.addImporterForm.value.tipoImportador),
        estado: this.addImporterForm.value.estado,
        usuarioCreacion: this.addImporterForm.value.usuarioCreacion
      }

      if (this.id !== 0) {
        // Es editar 
        importer.id = this.id;
        this._importerService.updateImporter(this.id, importer).subscribe(() => {
          this.toastr.info(`El Item ${importer.nombreImportador} fue actualizado con exito`, 'Item actualizado');
          this.loading = false;
          this.router.navigate(['/importer']);
        })
  
      } else {
        // Es agregagar
        this._importerService.addImporter(importer).subscribe(() => {
          this.toastr.success(`El Item ${importer.nombreImportador} fue registrado con exito`, 'Item registrado');
          this.loading = false;
          this.router.navigate(['/importer']);
        })
      }
    }

      // servicio crear
  addSubstance(substance: Substance) {
    this.loading = true;
    this._importerService.addImporter(substance).subscribe(data => {
      this.loading = false;
      this.router.navigate(['/importer']);
    })
  }

  deleteImporter(id:number){
    console.log(id)
  }

}
