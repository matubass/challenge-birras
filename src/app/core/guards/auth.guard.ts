import { AuthService } from '@auth0/auth0-angular';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,
              private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if(this.authService.isAuthenticated$) {
      return true;
    } else {
      this.authService.loginWithRedirect().subscribe(
        resp => {
          this.router.navigate(route.url);
        }
      );
    }
  }
}
