import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LicenseService } from 'src/app/services/license.service';


@Component({
  selector: 'app-add-license',
  templateUrl: './add-license.component.html',
  styleUrls: ['./add-license.component.css']
})
export class AddLicenseComponent {
  loading: boolean = false;

  constructor(private fb: FormBuilder, private licenseService: LicenseService,) { }


  public addLicenseForm: FormGroup = this.fb.group({
    expediente : ['', Validators.required, Validators.min(1) ],
    faadmonm:['', [Validators.required, Validators.minLength(3)] ],
    importador:['', [Validators.required, Validators.minLength(3)] ],
    timport:['', Validators.required ],
    aadmon:['' , Validators.required],
    producto:['' , Validators.required],
    faadmon:['' , Validators.required],
    pais:['' , Validators.required],
    aamodifica:['' , Validators.required],
    estado:['' , Validators.required]

  })

  onSave(): void {
    this.loading=true
    console.log(this.addLicenseForm.value)
    if(this.addLicenseForm.valid){
      this.loading=false
      this.licenseService.addLicense(this.addLicenseForm.value).subscribe(response => {
        alert('Licencia agregada exitosamente.')
      })
    }

    this.addLicenseForm.reset();
  }

  ngOnInit(): void {
  }
  // Validaciones
  isValidField(field:string) :Boolean | null{
    return this.addLicenseForm.controls[field].errors
    && this.addLicenseForm.controls[field].touched
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
