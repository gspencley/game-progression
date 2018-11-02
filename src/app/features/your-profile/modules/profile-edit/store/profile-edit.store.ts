import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { Profile } from '../../../../../modules/profile/types/profile/profile.interface';
import { AppState } from '../../../../../types/app-state';

import { SaveProfileChanges } from './profile-edit.actions';

@Injectable()
export class ProfileEditStore {
  constructor(private store: Store<AppState>) {}

  public saveChanges(profile: Profile) {
    return this.store.dispatch(new SaveProfileChanges(profile));
  }
}
