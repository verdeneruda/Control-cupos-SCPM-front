import { Component, OnInit, ViewChild } from '@angular/core';
import { DiscountsService } from '../../services/discounts.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { License } from '../../interfaces/license';
import { Discounts } from '../../interfaces/discounts';
import { MatTableDataSource } from '@angular/material/table';
import { Subject, Subscription } from 'rxjs';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-discounts',
  templateUrl: './discounts.component.html',
  styleUrls: ['./discounts.component.css']
})
export class DiscountsComponent implements OnInit {

  discounts!: Discounts[]
  loading: boolean = false;

  expediente!: string;
  resolucion!: number;
  licenses: License[] = [];
  suscription!: Subscription;

  constructor(private discountsServices: DiscountsService ,
    private fb: FormBuilder,
    private _snackBar: MatSnackBar,
    private router: Router,
    private aRoute: ActivatedRoute) {


    }

  ngOnInit(): void {

  }

  onSearch() {
    this.loading = true;
    this.discountsServices.getLicenseDiscount(this.expediente, this.resolucion).subscribe(data => {
      this.licenses = data;
      this.loading = false;
    })
  }

  onClean(){
    this.licenses = []
  }


  onSaveDiscount(){

  }

}
