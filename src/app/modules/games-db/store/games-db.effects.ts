import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { GamesDbActions, RetrieveError, RetrieveSuccess } from './games-db.actions';
import { GamesDbService } from '../services/games-db.service';

@Injectable()
export class GamesDbEffects {
  constructor(
    private actions$: Actions,
    private gamesDbService: GamesDbService
  ) {}

  @Effect()
  private retrieveGamesDb$ = this.actions$.pipe(
    ofType(GamesDbActions.RETRIEVE),
    switchMap(() => this.gamesDbService.getGames().pipe(
      map(games => new RetrieveSuccess(games)),
      catchError(error => of(new RetrieveError(error)))
    ))
  );
}
