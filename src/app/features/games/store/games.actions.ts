import { Action } from '@ngrx/store';

export const GamesActions = {
  RETRIEVE: 'GAMES--RETRIEVE'
};

export class Retrieve implements Action {
  public readonly type = GamesActions.RETRIEVE;
}
