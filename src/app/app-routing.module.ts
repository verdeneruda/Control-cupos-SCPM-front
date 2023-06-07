import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SearchLicenceComponent } from './search-licence/search-licence.component';
import { EditLicenceComponent } from './edit-licence/edit-licence.component';
import { AddSubstanceComponent } from './add-substance/add-substance.component';
import { UpdateYearComponent } from './update-year/update-year.component';
import { DiscountsComponent } from './discounts/discounts.component';
import { AuthGuard } from './guards/auth.guard';
import { AddLicenseComponent } from './pages/add-license/add-license.component';
import { AdministracionComponent } from './pages/administracion/administracion.component';



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
    path: 'register', 
    component: RegisterComponent 
  },
  { 
    path: 'search-licence', component: SearchLicenceComponent, canActivate: [AuthGuard]  },
  { 
    path: 'edit-licence', component: EditLicenceComponent, canActivate: [AuthGuard]  },
  { 
    path: 'add-license', component: AddLicenseComponent, canActivate: [AuthGuard]  },
  { 
    path: 'add-substance', component: AddSubstanceComponent, canActivate: [AuthGuard]  },
  { 
    path: 'update-year', component: UpdateYearComponent, canActivate: [AuthGuard]  },
  { 
    path: 'discounts', component: DiscountsComponent, canActivate: [AuthGuard]  },
  { 
    path: 'administration', component: AdministracionComponent, canActivate: [AuthGuard]  },
  {
    path: '**', redirectTo: 'login'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
