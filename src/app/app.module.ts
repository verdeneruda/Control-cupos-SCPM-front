
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AuthInterceptor } from './auth.interceptor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// requiere instalacion npm i @auth0/angular-jwt
import { JwtModule } from '@auth0/angular-jwt';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { RegisterComponent } from './register/register.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { ToolbarComponent } from './toolbar/toolbar.component';
import {MatIconModule} from '@angular/material/icon';
import { SearchLicenceComponent } from './search-licence/search-licence.component';
import { EditLicenceComponent } from './edit-licence/edit-licence.component';
import { AddSubstanceComponent } from './add-substance/add-substance.component';
import { UpdateYearComponent } from './update-year/update-year.component';
import { DiscountsComponent } from './discounts/discounts.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatTableModule} from '@angular/material/table';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { AddLicenseModule } from './pages/add-license/add-license.module';
import { AddLicenseComponent } from './pages/add-license/add-license.component';
import { ToolbarModule } from './toolbar/toolbar.module';
import { AdministracionComponent } from './pages/administracion/administracion.component';


export function tokenGetter() {
  return localStorage.getItem('token');
}


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    ToolbarComponent,
    SearchLicenceComponent,
    EditLicenceComponent,
    AddLicenseComponent,
    AddSubstanceComponent,
    UpdateYearComponent,
    DiscountsComponent,
    AdministracionComponent,
  ],
  imports: [
    
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
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
    MatTableModule,
    HttpClientModule,
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['*'],
        disallowedRoutes: ['*']
      }
    }),

  ],
  providers: [
    AuthGuard,
    AuthService,
    {
    provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
