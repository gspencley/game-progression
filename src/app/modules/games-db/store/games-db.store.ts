import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppStore } from '../../../store/app.store';
import { AppState } from '../../../types/app-state';
import { GamesDbState } from '../types/games-db-state/games-db-state.interface';

import { Retrieve } from './games-db.actions';
import { Game } from '../types/game/game.interface';

@Injectable()
export class GamesDbStore {
  constructor(private appStore: AppStore, private store: Store<AppState>) {}

  public getGamesDbState(): Observable<GamesDbState> {
    return this.appStore.getAppState().pipe(map(state => state.gamesDbState));
  }

  public getGames(): Observable<Game[]> {
    return this.getGamesDbState().pipe(map(state => state.games));
  }

  public retrieve() {
    this.store.dispatch(new Retrieve());
  }
}
