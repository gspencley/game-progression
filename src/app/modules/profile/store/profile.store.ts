import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';

import { AppStore } from '../../../store/app.store';
import { AppState } from '../../../types/app-state';
import { Language } from '../../languages/types/language/language.interface';
import { ProfileState } from '../types/profile-state/profile-state.interface';
import { Profile } from '../types/profile/profile.interface';

import { Retrieve, Update, UpdateLanguage } from './profile.actions';

@Injectable()
export class ProfileStore {
  constructor(
    private appStore: AppStore, 
    private store: Store<AppState>
  ) {}

  public getProfileState(): Observable<ProfileState> {
    return this.appStore.getAppState().pipe(map(state => state.profileState));
  }

  public getProfile(): Observable<Profile> {
    return this.getProfileState().pipe(map((state: ProfileState) => state.profile));
  }

  public getLanguage(): Observable<Language> {
    return this.getProfile().pipe(map((profile: Profile) => profile.language));
  }

  public retrieve() {
    this.store.dispatch(new Retrieve());
  }

  public updateLanguage(language: Language) {
    this.store.dispatch(new UpdateLanguage(language));
  }

  public updateProfile(profile: Profile) {
    this.store.dispatch(new Update(profile));
  }
}
