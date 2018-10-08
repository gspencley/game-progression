import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { map, tap } from 'rxjs/operators';
import { AppActionTypes, Navigate } from './navigation.actions';

@Injectable()
export class NavigationEffects {
  constructor(private actions: Actions, private router: Router) {
  }

  @Effect({dispatch: false})
  navigate = this.actions.pipe(
    ofType(AppActionTypes.NAVIGATE),
    map((action: Navigate) => action.route),
    tap((route: string) => {
      console.log(route);
      this.router.navigate([route]);
    })
  );
}
