import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { map } from 'rxjs/operators';

import { ProfileDto } from '../../../../../modules/profile/types/profile-dto/profile-dto.interface';
import { AppStore } from '../../../../../store/app.store';
import { AppState } from '../../../../../types/app-state';

import { SaveProfileChanges } from './profile-edit.actions';

@Injectable()
export class ProfileEditStore {
  constructor(
    private appStore: AppStore,
    private store: Store<AppState>
  ) {}

  public getProfileEditState() {
    return this.appStore.getAppState().pipe(map(state => state.profileEditState));
  }

  public isSaving() {
    return this.getProfileEditState().pipe(map(state => state.isSaving));
  }

  public saveChanges(profileDto: ProfileDto) {
    return this.store.dispatch(new SaveProfileChanges(profileDto));
  }
}
