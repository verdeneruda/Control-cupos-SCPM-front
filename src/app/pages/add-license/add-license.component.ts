import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CountryService } from 'src/app/services/country.service';
import { ImporterService } from 'src/app/services/importer.service';
import { LicenseService } from 'src/app/services/license.service';


@Component({
  selector: 'app-add-license',
  templateUrl: './add-license.component.html',
  styleUrls: ['./add-license.component.css']
})
export class AddLicenseComponent {
  loading: boolean = false;
  importer: any;
  country:any;
  typeImporter: any;
  firstSelectorItems: any[] | undefined;
  secondSelectorItems: any[] | undefined;
  selectedFirstItem: any;

  constructor(private fb: FormBuilder, 
              private _licenseService: LicenseService,
              private _importerServices: ImporterService,
              private _countryServices: CountryService) { }


  public addLicenseForm: FormGroup = this.fb.group({
    expediente : ['', Validators.required, Validators.min(1) ],
    faadmonm:['', [Validators.required, Validators.minLength(3)] ],
    importador:['', [Validators.required, Validators.minLength(3)] ],
    aadmon:['' , Validators.required],
    producto:['' , Validators.required],
    faadmon:['' , Validators.required],
    pais:['' , Validators.required],
    aamodifica:['' , Validators.required],
    estado:['' , Validators.required]

  });

  public addProviderForm: FormGroup = this.fb.group({
    nombreProveedor : ['', Validators.required, Validators.min(3) ],

  });


  onSave(): void {
    this.loading=true
    console.log(this.addLicenseForm.value)
    if(this.addLicenseForm.valid){
      
      this._licenseService.addLicense(this.addLicenseForm.value).subscribe(response => {
        alert('Licencia agregada exitosamente.')
      })
      this.loading=false
    }

    this.addLicenseForm.reset();
  }

  ngOnInit(): void {

    this.loadImporter();
    this.loadCountry();
  }

  addProvider(){
    this.loading=true
    console.log(this.addProviderForm.value)
    if(this.addProviderForm.valid){
      
      this._licenseService.addProvider(this.addProviderForm.value).subscribe(response => {
        alert('Proveedor agregad0 exitosamente.')
      })
      this.loading=false
    }

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
  isValidField(field:string) :Boolean | null{
    return this.addLicenseForm.controls[field].errors
    && this.addLicenseForm.controls[field].touched
  }

  onImporterChange(id:any) : void{
    console.log('prueba en onChange'+id)
    this.loading = true;
    this._importerServices.getImporterId(id).subscribe(res => {
      this.typeImporter = res;
      this.loading = false;
    });
    
    
  }

  getFieldErrors(field: string): string | null {
    if (!this.addLicenseForm.controls[field])
    return null;
    const errors = this.addLicenseForm.controls[field].errors || {};

    for (const key of Object.keys(errors)) {
      switch(key) {
        case 'required':
          return 'Este Campo es Requerido';

          case 'minlength':
            return 'Minimo de caracteres requerido';
      }
    }
    return ''
  }

}
