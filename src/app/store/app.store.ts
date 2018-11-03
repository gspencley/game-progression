import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../types/app-state';

import { Initialize } from './app.actions';

@Injectable()
export class AppStore {
  constructor(private store: Store<AppState>) {
  }

  public getAppState(): Store<AppState> {
    return this.store;
  }

  public initialize() {
    this.store.dispatch(new Initialize());
  }
}
