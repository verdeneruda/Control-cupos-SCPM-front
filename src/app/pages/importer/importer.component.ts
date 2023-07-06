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
import { ImporterService } from 'src/app/services/importer.service';
import { Importer } from 'src/app/interfaces/importer';
declare var window: any;

@Component({
  selector: 'app-importer',
  templateUrl: './importer.component.html',
  styleUrls: ['./importer.component.css']
})
export class ImporterComponent {

  formModal: any;
  importer: any;
  subscription!: Subscription;
  loading: boolean = false;

    //tabla
    displayedColumns: string[] = ['id', 'nombreImportador', 'tipoImportador', 'estado','accion'];
    dataSource = new MatTableDataSource<Importer>();


  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _importer: ImporterService ,
    private fb: FormBuilder,
    private router: Router,
    private _snackBar: MatSnackBar) {
      
      }

      ngOnInit(): void {

        this.loadImporter();
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
    
      loadImporter() {
        this.loading = true;
        this._importer.getImporter().subscribe(res => {
          this.importer = res;
          this.dataSource.data = res;
          this.loading = false;
        });
      }
    
      deleteImporter(id:number){
        console.log(id)
      }
    


}
