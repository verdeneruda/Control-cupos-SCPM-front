import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class RoleGuard  {

  constructor(private authService: AuthService, private router: Router) { }
  
  canActivate(): boolean {
    if (this.authService.isRole() == "3" ) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
  
}
