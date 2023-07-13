import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-add-supplier',
  templateUrl: './add-supplier.component.html',
  styleUrls: ['./add-supplier.component.css']
})
export class AddSupplierComponent {
  provider: any;
  loading: boolean = false;
  errorMessage: string = '';

  constructor(private fb: FormBuilder, 
              private _supplierServices: SupplierService,
              private toastr: ToastrService) { }
  addProvider(){
    this.loading=true
    console.log(this.addProviderForm.value)
    if(this.addProviderForm.valid){
      
      this._supplierServices.addProvider(this.addProviderForm.value).subscribe(response => {
        this.toastr.success(`${this.addProviderForm.value.nombreProveedor} fue registrada con exito`, 'Proveedor registrado');
      })
      this.loading=false
    }else {
      this.errorMessage = 'Verificar campos obligatorios del formulario';
      this.toastr.error(this.errorMessage, 'Error!');
    }

    

  }

  public addProviderForm: FormGroup = this.fb.group({
    nombreProveedor : ['', Validators.required, Validators.min(3) ],
  });

}
