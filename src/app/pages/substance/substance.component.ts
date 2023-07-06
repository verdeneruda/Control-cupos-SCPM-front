import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject, Subscription } from 'rxjs';
import { SubstanceService } from '../../services/substance.service';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Substance } from 'src/app/interfaces/substance';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
declare var window: any;

@Component({
  selector: 'app-substance',
  templateUrl: './substance.component.html',
  styleUrls: ['./substance.component.css']
})
export class SubstanceComponent {

  formModal: any;
  substance: any;
  subscription!: Subscription;
  loading: boolean = false;

  //tabla
  displayedColumns: string[] = ['sustancia', 'subpartida', 'tipo', 'descripcion','accion'];
  dataSource = new MatTableDataSource<Substance>();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _substanceService: SubstanceService ,
              private fb: FormBuilder,
              private router: Router,
              private _snackBar: MatSnackBar) {
                
                }

  ngOnInit(): void {
    
    this.LoadSubstance();

  }

  // ciclo de vida Tabla
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.paginator._intl.itemsPerPageLabel='Items por Pagina';
    this.dataSource.sort = this.sort;
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  LoadSubstance() {
    this.loading = true;
    this._substanceService.getSubstance().subscribe(res => {
      this.substance = res;
      this.dataSource.data = res;
      this.loading = false;
    });
  }

  deleteSubstance(id:number){
    console.log(id)
  }

}
