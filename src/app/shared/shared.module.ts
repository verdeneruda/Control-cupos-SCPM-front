import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// Components
import { SpinnerComponent } from './spinner/spinner.component';
import { ToolbarComponent } from './toolbar/toolbar.component';

// Angular Material
import {MatIconModule} from '@angular/material/icon'; 
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatRadioModule} from '@angular/material/radio';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    SpinnerComponent,
    ToolbarComponent
  ],
  imports: [
    AppRoutingModule,
    CommonModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatProgressBarModule,
    MatRadioModule,
    NgbModule,
    
  ],
  exports:[
    AppRoutingModule,
    ToolbarComponent,
    SpinnerComponent,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatButtonToggleModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatSnackBarModule,
    MatPaginatorModule,
    MatSortModule,
    MatTableModule,
    MatInputModule,
    MatProgressBarModule,
    MatRadioModule,
    NgbModule,
    
  ]
})
export class SharedModule { }
