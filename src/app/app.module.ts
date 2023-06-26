
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthInterceptor } from './auth.interceptor';


//componentes

import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { SearchLicenceComponent } from './pages/search-licence/search-licence.component';
import { AddSubstanceComponent } from './pages/substance/add-substance/add-substance.component';
import { UpdateYearComponent } from './pages/update-year/update-year.component';
import { DiscountsComponent } from './pages/discounts/discounts.component';
import { AddLicenseComponent } from './pages/add-license/add-license.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { LogsComponent } from './pages/admin/logs/logs.component';
import { UpdateSubstanceComponent } from './pages/substance/update-substance/update-substance.component';
import { UpdateUComponent } from './pages/admin/users/update-u/update-u.component';
import { NotificationComponent } from './pages/admin/notification/notification.component';

// requiere instalacion npm i @auth0/angular-jwt
import { JwtModule } from '@auth0/angular-jwt';
import { AuthGuard } from './guards/auth.guard';
import { AuthService } from './services/auth.service';
import { DataTablesModule } from "angular-datatables";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SharedModule } from './shared/shared.module';
import { AddNotificationComponent } from './pages/admin/notification/add-notification/add-notification.component';
import { EditLicenceComponent } from './pages/edit-licence/edit-licence.component';




export function tokenGetter() {
  return localStorage.getItem('token');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SearchLicenceComponent,
    EditLicenceComponent,
    AddLicenseComponent,
    AddSubstanceComponent,
    UpdateYearComponent,
    DiscountsComponent,
    UsersComponent,
    LogsComponent,
    UpdateSubstanceComponent,
    UpdateUComponent,
    NotificationComponent,
    AddNotificationComponent,
  ],
  imports: [
    
    BrowserModule,
    DataTablesModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
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
