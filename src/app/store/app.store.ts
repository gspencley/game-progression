import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { AppState } from '../types/app-state';
import { RetrieveLanguagesAndProfile } from './app.actions';

@Injectable()
export class AppStore {
  constructor(private store: Store<AppState>) {}

  public getAppState(): Store<AppState> {
    return this.store;
  }

  public retrieveLanguagesAndProfile() {
    this.store.dispatch(new RetrieveLanguagesAndProfile());
  }
}
