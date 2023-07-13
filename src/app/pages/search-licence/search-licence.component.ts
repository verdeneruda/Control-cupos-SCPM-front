import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { LicenseAdd } from 'src/app/interfaces/license';
import { CountryService } from 'src/app/services/country.service';
import { LicenseService } from 'src/app/services/license.service';

@Component({
  selector: 'app-search-licence',
  templateUrl: './search-licence.component.html',
  styleUrls: ['./search-licence.component.css']
})
export class SearchLicenceComponent implements OnInit {

  displayedColumns: string[] = ['Expediente', 'Nombre Importador', 'Nit Empresa', 'Pais Procedencia'];
  dataSource = new MatTableDataSource<LicenseAdd>();
  notify: any
  loading: boolean = false;

  data: any[] = [];
  exp = '';
  resol = '';
  substance: any;
  dtoptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();

  name: string | undefined;
  position: number | undefined;
  weight: number | undefined;
  symbol: string | undefined;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private _licenseService: LicenseService,
    private _paisesServices: CountryService) { }

  ngOnInit(): void {

    this.getPaises();
    this.dataLisence();
  }

  getPaises() {
    this._paisesServices.getPaisH().subscribe(
      datap => {
        this.data = datap;
        console.log(datap)
      }
    )
  }

  dataLisence() {
    this.loading = true;
    this._licenseService.getLicence().subscribe(
      data => {
        this.data = data;
        this.dataSource.data = data;
        this.loading = false;
      }
    )
  }

    // ciclo de vida Tabla
    ngAfterViewInit() {
      this.dataSource.paginator = this.paginator;
      this.paginator._intl.itemsPerPageLabel = 'Items por Pagina';
      this.dataSource.sort = this.sort;
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }

}

