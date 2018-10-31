import { Action } from '@ngrx/store';
import { Profile } from '../../../types/profile.interface';
import { HttpErrorResponse } from '@angular/common/http';

export enum ProfileEditActionTypes {
  Save          = '[ProfileEdit] Save',
  SaveSuccess   = '[ProfileEdit] SaveSuccess',
  SaveError     = '[ProfileEdit] SaveError'
}

export class SaveProfileChanges implements Action {
  readonly type: string = ProfileEditActionTypes.Save;
  constructor(public profile: Profile) {}
}

export class SaveProfileChangesSuccess implements Action {
  readonly type: string = ProfileEditActionTypes.SaveSuccess;
  constructor(public profile: Profile) {}
}

export class SaveProfileChangesError implements Action {
  readonly type: string = ProfileEditActionTypes.SaveError;
  constructor(public error: HttpErrorResponse) {}
}

export type ProfileEditAction = SaveProfileChanges | SaveProfileChangesSuccess | SaveProfileChangesError;
