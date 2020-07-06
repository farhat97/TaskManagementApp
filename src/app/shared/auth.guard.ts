import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import { LoginService } from './login.service';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanActivate {
    
    constructor(private router: Router, private loginService: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        debugger;
        const currentUser = this.loginService.currentUserValue;

        if(currentUser) {
            return true;
        }

        // redirect to login if not logged in
        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url }});
        return false;
    }

}