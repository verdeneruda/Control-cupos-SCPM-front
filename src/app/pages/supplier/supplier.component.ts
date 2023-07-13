import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier',
  templateUrl: './supplier.component.html',
  styleUrls: ['./supplier.component.css']
})
export class SupplierComponent {
  loading: boolean = false;
  importer: any;
  country:any;
  supplier: any;

  constructor(private fb: FormBuilder, 
    private _supplierServices: SupplierService) { }


  ngOnInit(): void {
    this.loadProvider();
  }

  loadProvider() {
    this.loading = true;
    this._supplierServices.getProvider().subscribe(res => {
      this.supplier = res;
      this.loading = false;
    });
    
    
  }

}
