import { Injectable } from '@angular/core';
import { ProfileStore } from '../../../store/profile.store';
import { Profile } from '../../../types/profile.interface';
import { Store } from '@ngrx/store';
import { AppState } from '../../../../../types/app-state';
import { SaveProfileChanges } from './profile-edit.actions';

@Injectable()
export class ProfileEditStore {

  constructor(private profileStore: ProfileStore, private store: Store<AppState>) {
  }

  saveChanges(profile: Profile) {
    return this.store.dispatch(new SaveProfileChanges(profile));
  }
}
