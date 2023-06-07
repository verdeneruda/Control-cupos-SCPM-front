import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-add-substance',
  templateUrl: './add-substance.component.html',
  styleUrls: ['./add-substance.component.css']
})
export class AddSubstanceComponent implements OnInit {
  data: any[] = []; 


  constructor(private authService: AuthService ) { }

  ngOnInit(): void {
    this.dataSubstance();
  }

  dataSubstance () {
    this.authService.getSubstance().subscribe(
      data => {
        this.data = data;
        console.log(this.data)
      }
    )

  }

}
