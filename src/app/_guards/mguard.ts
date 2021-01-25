import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { CanActivate } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class MGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        
        console.log(state.url);

        switch (state.url) {
            case "/grupos":
                return true;
                break;

            case "/empleados":
                return true;
                break;

            case "/carrusel":
                return true;
                break;
        
            default:
                this.router.navigate(['/']);
                break;
        }

    }
}