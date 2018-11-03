import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { ProfileDto } from '../../../../../modules/profile/types/profile-dto/profile-dto.interface';
import { AppState } from '../../../../../types/app-state';

import { SaveProfileChanges } from './profile-edit.actions';

@Injectable()
export class ProfileEditStore {
  constructor(private store: Store<AppState>) {}

  public saveChanges(profileDto: ProfileDto) {
    return this.store.dispatch(new SaveProfileChanges(profileDto));
  }
}
