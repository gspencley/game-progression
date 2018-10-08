import {Injectable} from '@angular/core';
import {Store} from '@ngrx/store';
import {AppState} from '../types/app-state';

@Injectable()
export class AppStore {

    constructor(private store: Store<AppState>) {}

    getAppState(): Store<AppState> {
        return this.store;
    }
}
