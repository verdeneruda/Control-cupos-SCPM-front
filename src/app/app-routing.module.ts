import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { SearchLicenceComponent } from './pages/search-licence/search-licence.component';
import { EditLicenceComponent } from './pages/edit-licence/edit-licence.component';
import { UpdateYearComponent } from './pages/update-year/update-year.component';
import { DiscountsComponent } from './pages/discounts/discounts.component';
import { AuthGuard } from './guards/auth.guard';
import { AddLicenseComponent } from './pages/add-license/add-license.component';
import { UsersComponent } from './pages/admin/users/users.component';
import { LogsComponent } from './pages/admin/logs/logs.component';
import { UpdateUComponent } from './pages/admin/users/update-u/update-u.component';
import { RoleGuard } from './guards/role.guard';
import { NotificationComponent } from './pages/admin/notification/notification.component';
import { AddNotificationComponent } from './pages/admin/notification/add-notification/add-notification.component';
import { AddSubstanceComponent } from './pages/substance/add-substance/add-substance.component';
import { SubstanceComponent } from './pages/substance/substance.component';
import { AddImporterComponent } from './pages/importer/add-importer/add-importer.component';
import { ImporterComponent } from './pages/importer/importer.component';
import { SupplierComponent } from './pages/supplier/supplier.component';
import { AddSupplierComponent } from './pages/supplier/add-supplier/add-supplier.component';




const routes: Routes = [
  { 
    path: '', 
    component: LoginComponent
  },
  { 
    path: 'login', 
    component: LoginComponent 
  },
  { 
    path: 'search-licence', component: SearchLicenceComponent, canActivate: [AuthGuard]  
  },
  { 
    path: 'edit-licence', component: EditLicenceComponent, canActivate: [AuthGuard]  
  },
  { 
    path: 'add-license', component: AddLicenseComponent, canActivate: [AuthGuard]  
  },
  { 
    path: 'add-substance/:id', component: AddSubstanceComponent, canActivate: [AuthGuard]  
  },
  { 
    path: 'add-substance', component: AddSubstanceComponent, canActivate: [AuthGuard]  
  },
  { 
    path: 'substance', component: SubstanceComponent, canActivate: [AuthGuard]  
  },
  { 
    path: 'add-importer/:id', component: AddImporterComponent, canActivate: [AuthGuard]  
  },
  { 
    path: 'importer', component: ImporterComponent, canActivate: [AuthGuard]  
  },
  { 
    path: 'add-importer', component: AddImporterComponent, canActivate: [AuthGuard]  
  },
  { 
    path: 'update-year', component: UpdateYearComponent, canActivate: [AuthGuard]  
  },
  { 
    path: 'supplier', component: SupplierComponent, canActivate: [AuthGuard]  
  },
  { 
    path: 'add-supplier/id:', component: AddSupplierComponent, canActivate: [AuthGuard]  
  },
  { 
    path: 'add-supplier', component: AddSupplierComponent, canActivate: [AuthGuard]  
  },
  { 
    path: 'discounts', component: DiscountsComponent, canActivate: [AuthGuard]  
  },
  { 
    path: 'users', 
    component: UsersComponent,  canActivate: [AuthGuard, RoleGuard]
  },
  { 
    path: 'notification', 
    component: NotificationComponent,  canActivate: [AuthGuard, RoleGuard]
  },
  { 
    path: 'add-notification', 
    component: AddNotificationComponent,  canActivate: [AuthGuard, RoleGuard]
  },
  { 
    path: 'update-users/:id', 
    component: UpdateUComponent,  canActivate: [AuthGuard]
  },
  { 
    path: 'logs', 
    component: LogsComponent, canActivate: [AuthGuard, RoleGuard] 
  },
  {
    path: '**', redirectTo: 'login'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
