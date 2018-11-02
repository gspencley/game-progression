import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { GamesActions } from './games.actions';

@Injectable()
export class GamesEffects {
  constructor(private actions$: Actions) {}

  @Effect()
  private retrieveGames$ = this.actions$.pipe(ofType(GamesActions.RETRIEVE));
}
