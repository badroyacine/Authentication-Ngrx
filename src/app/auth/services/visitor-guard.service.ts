import { Injectable } from '@angular/core';
import { Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/reducers';
import { Store, select } from '@ngrx/store';
import { isLoggedOut } from 'src/app/auth/auth.selectors';
import { tap } from 'rxjs/internal/operators';

@Injectable({
  providedIn: 'root'
})

export class VisitorGuard {

  constructor(
    private store: Store<AppState>,
    private router: Router
  ) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Promise<boolean> | Observable<boolean> {

    return this.store.pipe(
      select(isLoggedOut),
      tap(loggedOut =>{
        if(!loggedOut) this.router.navigateByUrl('/home');
      })
    )

  }
}