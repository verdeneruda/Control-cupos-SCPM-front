import { Component } from '@angular/core';
import { substance } from 'src/app/interfaces/substance';
import { SubstanceService } from '../../../services/substance.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-update-substance',
  templateUrl: './update-substance.component.html',
  styleUrls: ['./update-substance.component.css']
})
export class UpdateSubstanceComponent {

  public dataId!:number;
  public listSubstance!: substance
  substance: any;
  substanceId : any;
  loading: boolean = false;

  constructor(private substanceService: SubstanceService ,
              private fb: FormBuilder,
              private router: Router,
              private activatedroute: ActivatedRoute) { }


ngOnInit(): void {
  this.activatedroute.paramMap.subscribe((param:Params)=>{
    this.dataId = param['get']('id');
    
  })
  this.substanceService.getSubstanceId(this.dataId).subscribe((data:substance) => {
    this.listSubstance = data;
  });
}

// funcion que edita la sustancia

updatedSubstance() {
    this.loading = true;

    this.substanceService.editSubstance(this.listSubstance).subscribe(response => {
      this.loading = false;
      alert('Sustancia Actualizada.')
      this.router.navigate(["/add-substance"])
    })
  
  
}

public editSubstanceForm: FormGroup = this.fb.group({
  id: ['', Validators.required],
  editSustancia1 : ['', Validators.required ],
  editSubpartida: ['', [Validators.required, Validators.min(1)] ],
  editTipo:['', [Validators.required] ],
  editDescripcion:['', Validators.required ],
})

}
