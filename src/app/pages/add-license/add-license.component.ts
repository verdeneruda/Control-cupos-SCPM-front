import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LicenseAdd } from 'src/app/interfaces/license';
import { CountryService } from 'src/app/services/country.service';
import { ImporterService } from 'src/app/services/importer.service';
import { LicenseService } from 'src/app/services/license.service';
import { SupplierService } from 'src/app/services/supplier.service';


@Component({
  selector: 'app-add-license',
  templateUrl: './add-license.component.html',
  styleUrls: ['./add-license.component.css']
})
export class AddLicenseComponent {
  loading: boolean = false;
  importer: any;
  country:any;
  provider: any;
  selectedFirstItem: any;
  addLicenseForm: FormGroup;
  id: number;
  router: any;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, 
              private _licenseService: LicenseService,
              private _importerServices: ImporterService,
              private _countryServices: CountryService,
              private _supplierServices: SupplierService,
              private aRoute: ActivatedRoute,
              private toastr: ToastrService,) {

                const idUser = sessionStorage.getItem('idUser')
                this.addLicenseForm = this.fb.group({
                  nroExpediente : ['', Validators.required, ],
                  nitEmpresa : ['', Validators.required],
                  fechaActoAdtvoMod:['' , Validators.required],
                  importadorId:[ , Validators.required ],
                  nroActoAdtvo:['', [Validators.required] ],
                  fechaActoAdtvo:['' , Validators.required],
                  paisProcedencia: [ , Validators.required],
                  nroActoAdtvoMod:['' , Validators.required],
                  proveedores:['' , Validators.required],
                  estado: [false , Validators.required],
                  usuarioCreacion: Number(idUser)
                })
                this.id = Number(this.aRoute.snapshot.paramMap.get('id'))


              }


  onSave(): void {
    this.loading=true
    console.log(this.addLicenseForm.value) 
    if(this.addLicenseForm.valid){
      this.addLicenseForm.value.importadorId = parseInt(this.addLicenseForm.value.importadorId)
      this.addLicenseForm.value.paisProcedencia = parseInt(this.addLicenseForm.value.paisProcedencia)
      this.addLicenseForm.value.estado = Boolean(this.addLicenseForm.value.estado)
      for (let i = 0; i< this.addLicenseForm.value.proveedores.length; i++){
        this.addLicenseForm.value.proveedores[i] = parseInt(this.addLicenseForm.value.proveedores[i])
      }
      console.log('valor de arreglo'+this.addLicenseForm.value.proveedores[0])
      this._licenseService.addLicense(this.addLicenseForm.value).subscribe(response => {
        this.toastr.success(`${this.addLicenseForm.value.nroExpediente} fue registrada con exito`, 'Item registrado');
        this.addLicenseForm.reset();
      })
      this.loading=false
    }else{
      this.errorMessage = 'Verificar campos obligatorios del formulario';
      this.toastr.error(this.errorMessage, 'Error!');
        console.log('Error verificar json'+this.addLicenseForm)
        this.loading=false
    }
  }

  

  ngOnInit(): void {

    this.loadImporter();
    this.loadCountry();
    this.loadProvider();
  }

  loadCountry(){
    this.loading = true;
    this._countryServices.getPais().subscribe(res => {
      this.country = res;
      this.loading = false;
    });
  }
  loadImporter(){
    this.loading = true;
    this._importerServices.getImporter().subscribe(res => {
      this.importer = res;
      this.loading = false;
    });
  }

  // Validaciones
  // isValidField(field:string) :Boolean | null{
  //   return this.addLicenseForm.controls[field].errors
  //   && this.addLicenseForm.controls[field].touched
  // }

  loadProvider() {
    this.loading = true;
    this._supplierServices.getProvider().subscribe(res => {
      this.provider = res;
      this.loading = false;
    });
    
    
  }

}
