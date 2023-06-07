import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-search-licence',
  templateUrl: './search-licence.component.html',
  styleUrls: ['./search-licence.component.css']
})
export class SearchLicenceComponent implements OnInit {

  data: any[] = []; 
  exp = '';
  resol = '';
  
  name: string | undefined;
  position: number | undefined;
  weight: number | undefined;
  symbol: string | undefined;
  PeriodicElement: String = '';

  constructor(private authService: AuthService ) { }

  ngOnInit(): void {
    this.dataLisence();

  }

  dataLisence () {
    this.authService.getLicence().subscribe(
      data => {
        this.data = data;
        console.log(this.data)
      }
    )

  }





}

