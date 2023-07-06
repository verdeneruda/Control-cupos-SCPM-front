import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router } from '@angular/router';
import { Notification } from 'src/app/interfaces/notification';
import { NotifyService } from 'src/app/services/notification.service';



@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['rol-permiso', 'mensaje', 'aplica', 'accion'];
  dataSource = new MatTableDataSource<Notification>();
  notify: any
  loading: boolean = false;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private notifyServices: NotifyService ,
              private fb: FormBuilder,
              private _snackBar: MatSnackBar,
              private router: Router) {
}

ngOnInit(): void {
  this.listNotify();
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


  listNotify() {
    this.loading = true;
    this.notifyServices.listNotify().subscribe(data => {
      this.notify = data;
      this.dataSource.data = data;
      this.loading = false;
    });
    
}


}
