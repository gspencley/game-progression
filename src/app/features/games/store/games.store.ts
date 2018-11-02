import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppStore } from '../../../store/app.store';
import { GamesState } from '../types/games-state/games-state.interface';
import { Retrieve } from './games.actions';
import { AppState } from '../../../types/app-state';

@Injectable()
export class GamesStore {
  constructor(private appStore: AppStore, private store: Store<AppState>) {}

  public getGamesState(): Observable<GamesState> {
    return this.appStore.getAppState().pipe(map(state => state.gamesState));
  }

  public retrieve() {
    this.store.dispatch(new Retrieve());
  }
}
