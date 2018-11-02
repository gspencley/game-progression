import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap, tap } from 'rxjs/operators';

import { ProfileStore } from '../../../../../modules/profile/store/profile.store';
import { Profile } from '../../../../../modules/profile/types/profile/profile.interface';
import { ProfileEditService } from '../services/profile-edit.service';

import {
  ProfileEditActionTypes,
  SaveProfileChanges,
  SaveProfileChangesError,
  SaveProfileChangesSuccess
} from './profile-edit.actions';

@Injectable()
export class ProfileEditEffects {
  constructor(
    private profileStore: ProfileStore,
    private profileEditService: ProfileEditService,
    private actions$: Actions
  ) {}

  @Effect()
  public saveChanges = this.actions$.pipe(
    ofType(ProfileEditActionTypes.Save),
    map((action: SaveProfileChanges) => action.profile),
    switchMap((profile: Profile) =>
      this.profileEditService.updateProfile(profile).pipe(
        map(() => new SaveProfileChangesSuccess(profile)),
        catchError((error: HttpErrorResponse) => of(new SaveProfileChangesError(error)))
      )
    )
  );

  @Effect({ dispatch: false })
  public saveChangesSuccess = this.actions$.pipe(
    ofType(ProfileEditActionTypes.SaveSuccess),
    map((action: SaveProfileChangesSuccess) => action.profile),
    tap((profile: Profile) => this.profileStore.updateProfile(profile))
  );
}
