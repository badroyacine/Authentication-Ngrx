import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/internal/operators';
import { AppState } from 'src/app/reducers';
import { isLoggedIn } from '../auth.selectors';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {
    
    return this.store.pipe(
      select(isLoggedIn),
      tap(loggedIn =>{
        if(!loggedIn) this.router.navigateByUrl('/login');
      })
    )

  }
}