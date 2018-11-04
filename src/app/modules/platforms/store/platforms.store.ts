import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppStore } from '../../../store/app.store';
import { AppState } from '../../../types/app-state';
import { PlatformsState } from '../types/platforms-state/platforms-state.interface';

import { Retrieve } from './platforms.actions';
import { Platform } from '../types/platform/platform.interface';

@Injectable()
export class PlatformsStore {
  constructor(private appStore: AppStore, private store: Store<AppState>) {}

  public getPlatformsState(): Observable<PlatformsState> {
    return this.appStore.getAppState().pipe(map(state => state.platformsState));
  }

  public getPlatforms(): Observable<Platform[]> {
    return this.getPlatformsState().pipe(map(state => state.platforms));
  }

  public retrieve() {
    this.store.dispatch(new Retrieve());
  }
}
