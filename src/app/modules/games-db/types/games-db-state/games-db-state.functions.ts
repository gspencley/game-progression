import { GamesDbState } from './games-db-state.interface';

export function createGamesDbState(): GamesDbState {
  return {
    games: []
  };
}
