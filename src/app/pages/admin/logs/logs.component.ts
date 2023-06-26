import { Component } from '@angular/core';
import { Subject } from 'rxjs';
import { LogsService } from 'src/app/services/logs.service';

@Component({
  selector: 'app-logs',
  templateUrl: './logs.component.html',
  styleUrls: ['./logs.component.css']
})
export class LogsComponent {

  dtoptions: DataTables.Settings = {};
  dtTrigger:Subject<any>=new Subject<any>();
  logs: any;
  loading: boolean = false;

  constructor(private logsServices: LogsService ) { }


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
  }

  listLogs() {
    this.loading=true
    this.logsServices.getListLogs().subscribe(res => {
      this.loading=false
      this.logs = res;
      this.dtTrigger.next(null);
    });
}

}
