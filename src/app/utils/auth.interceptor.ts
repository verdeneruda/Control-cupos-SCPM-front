import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService,
        private router: Router) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {
        const token = localStorage.getItem('token');

        if (this.authService.isLoggedIn()) {
            const authReq = req.clone({
                headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
            return next.handle(authReq)
                .pipe(
                    tap(
                        () => { },
                        error => {
                            if (error.status === 401) {
                                this.authService.logout();
                                this.router.navigate(['/login']);
                            }
                        }
                    )
                );
        } else {
            this.authService.logout();
            this.router.navigate(['/login']);
            return next.handle(req);
        }
    }
}