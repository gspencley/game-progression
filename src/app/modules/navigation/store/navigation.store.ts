import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppStore} from '../../../store/app.store';
import {AppState} from '../../../types/app-state';
import {map, tap} from 'rxjs/operators';
import {Navigate} from './navigation.actions';
import {Observable} from 'rxjs';
import {NavigationState} from '../types/navigation-state';

@Injectable()
export class NavigationStore {

    constructor(private store: Store<NavigationStore>, private appStore: AppStore) {
    }

    getNavigationState(): Observable<NavigationState> {
        return this.appStore.getAppState().pipe(
            map((state: AppState) => state.navigationState)
        );
    }

    getActiveRoute(): Observable<string> {
        return this.getNavigationState().pipe(
            map((state: NavigationState) => state.activeRoute)
        );
    }

    navigate(route: string) {
        this.store.dispatch(new Navigate(route));
    }
}
