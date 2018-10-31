import { Injectable } from '@angular/core';
import { AppStore } from '../../../store/app.store';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';
import { AppState } from '../../../types/app-state';
import { ProfileState } from '../types/profile-state.interface';
import { InitializeProfile, LoadProfile, UpdateLanguage, UpdateProfile } from './profile.actions';
import { Language } from '../../select-language/types/language.interface';
import { Profile } from '../types/profile.interface';
import { Observable } from 'rxjs';

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

  getLanguageId(): Observable<number> {
    return this.getProfile().pipe(
      map((profile: Profile) => profile.languageId)
    );
  }

  updateLanguage(language: Language) {
    this.store.dispatch(new UpdateLanguage(language));
  }

  updateProfile(profile: Profile) {
    this.store.dispatch(new UpdateProfile(profile));
  }
}
