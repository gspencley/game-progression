import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../../types/app-state';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Navigate } from './navigation.actions';
import { AppStore } from '../app.store';
import { NavigationState } from '../../types/navigation/navigation-state.interface';

@Injectable()
export class NavigationStore {

  constructor(private appStore: AppStore, private store: Store<AppState>) {
  }


  getNavigationStore(): Observable<NavigationState> {
    return this.appStore.getAppState().pipe(map((state: AppState) => state.navigationState));
  }

  getActiveRoute(): Observable<string> {
    return this.getNavigationStore().pipe(map((state: NavigationState) => state.activeRoute));
  }

  navigate(route: string) {
    this.store.dispatch(new Navigate(route));
  }
}
