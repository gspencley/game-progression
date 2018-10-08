import {Injectable} from '@angular/core';
import {AppStore} from '../../../store/app.store';
import {Store} from '@ngrx/store';
import {map} from 'rxjs/operators';
import {AppState} from '../../../types/app-state';
import {ProfileState} from '../types/profile-state';
import {InitializeProfile, LoadProfile} from './profile.actions';

@Injectable()
export class ProfileStore {

    constructor(private appStore: AppStore, private store: Store<AppState>) {
    }

    getProfileStore() {
        return this.appStore.getAppState().pipe(map((state: AppState) => state.profileState));
    }

    getProfile() {
        return this.getProfileStore().pipe(map((state: ProfileState) => state.profile));
    }

    loadProfile() {
        this.store.dispatch(new LoadProfile());
    }

    initializeProfile() {
        this.store.dispatch(new InitializeProfile());
    }
}
