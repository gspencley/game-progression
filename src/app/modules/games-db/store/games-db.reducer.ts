import { Action } from '@ngrx/store';

import { createGamesDbState } from '../types/games-db-state/games-db-state.functions';
import { GamesDbState } from '../types/games-db-state/games-db-state.interface';

import { GamesDbActions, RetrieveSuccess } from './games-db.actions';

export function gamesDbReducer(
  state: GamesDbState = createGamesDbState(),
  action: Action
): GamesDbState {
  switch (action.type) {
    case GamesDbActions.RETRIEVE_SUCCESS:
      const successAction = action as RetrieveSuccess;
      return {
        ...state,
        games: successAction.games
      };

    default:
      return state;
  }
}
