import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

import { ProfileDto } from '../../../../../modules/profile/types/profile-dto/profile-dto.interface';
import { Profile } from '../../../../../modules/profile/types/profile/profile.interface';

export const ProfileEditActions = {
  SAVE:         'PROFILE-EDIT--SAVE',
  SAVE_SUCCESS: 'PROFILE-EDIT--SAVE_SUCCESS',
  SAVE_ERROR:   'PROFILE-EDIT--SAVE_ERROR'
};

export class SaveProfileChanges implements Action {
  public readonly type: string = ProfileEditActions.SAVE;
  constructor(public profileDto: ProfileDto) {}
}

export class SaveProfileChangesSuccess implements Action {
  public readonly type: string = ProfileEditActions.SAVE_SUCCESS;
  constructor(public profile: Profile) {}
}

export class SaveProfileChangesError implements Action {
  public readonly type: string = ProfileEditActions.SAVE_ERROR;
  constructor(public error: HttpErrorResponse) {}
}
