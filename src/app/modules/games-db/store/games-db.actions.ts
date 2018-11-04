import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Game } from '../types/game/game.interface';

export const GamesDbActions = {
  RETRIEVE:         'GAMES_DB--RETRIEVE',
  RETRIEVE_SUCCESS: 'GAMES_DB--RETRIEVE_SUCCESS',
  RETRIEVE_ERROR:   'GAMES_DB--RETRIEVE_ERROR'
};

export class Retrieve implements Action {
  public readonly type = GamesDbActions.RETRIEVE;
}

export class RetrieveSuccess implements  Action {
  public readonly type = GamesDbActions.RETRIEVE_SUCCESS;
  constructor(public games: Game[]) {}
}

export class RetrieveError implements Action {
  public readonly type = GamesDbActions.RETRIEVE_ERROR;
  constructor(public error: HttpErrorResponse) {}
}
