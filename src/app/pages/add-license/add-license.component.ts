import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];

@Component({
  selector: 'app-add-license',
  templateUrl: './add-license.component.html',
  styleUrls: ['./add-license.component.css']
})
export class AddLicenseComponent {

  constructor(private fb: FormBuilder, private authService: AuthService,) { }


  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = ELEMENT_DATA;

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
    console.log(this.addLicenseForm.value)
    if(this.addLicenseForm.valid){
      this.authService.addLicense(this.addLicenseForm.value).subscribe(response => {
        alert('Licencia agregada exitosamente.')
      })
    }

    this.addLicenseForm.reset();
  }

  ngOnInit(): void {
  }

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
