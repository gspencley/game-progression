import { Action } from '@ngrx/store';

import { createGamesState } from '../types/games-state/games-state.functions';
import { GamesState } from '../types/games-state/games-state.interface';

import { GamesActions } from './games.actions';

export function gamesReducer(state: GamesState = createGamesState(), action: Action): GamesState {
  switch (action.type) {
    case GamesActions.RETRIEVE:
      return state;
    default:
      return state;
  }
}
