import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { LicenseService } from 'src/app/services/license.service';

@Component({
  selector: 'app-search-licence',
  templateUrl: './search-licence.component.html',
  styleUrls: ['./search-licence.component.css']
})
export class SearchLicenceComponent implements OnInit {

  data: any[] = []; 
  exp = '';
  resol = '';
  loading: boolean = false;

  substance: any;
  dtoptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  
  name: string | undefined;
  position: number | undefined;
  weight: number | undefined;
  symbol: string | undefined;
  PeriodicElement: String = '';

  constructor(private licenseService: LicenseService ) { }

  ngOnInit(): void {
    this.dtoptions = {
      pagingType: 'simple_numbers',
      language:{
        searchPlaceholder:'Buscar',
        lengthMenu: 'Mostrar _MENU_ registros por pagina',
        search: 'Buscar',
        info: 'Mostrando la pagina _PAGE_ de _PAGES_'
      },

    };
    this.dataLisence();

  }

  dataLisence () {
    this.loading = true;
    this.licenseService.getLicence().subscribe(
      data => {
        this.data = data;
        this.loading = false;
        this.dtTrigger.next(null);
      }
    )

  }

}

