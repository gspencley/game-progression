import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, delay, map, switchMap, tap } from 'rxjs/operators';

import { Update } from '../../../../../modules/profile/store/profile.actions';
import { ProfileStore } from '../../../../../modules/profile/store/profile.store';
import { ProfileDto } from '../../../../../modules/profile/types/profile-dto/profile-dto.interface';
import { Profile } from '../../../../../modules/profile/types/profile/profile.interface';
import { ProfileEditService } from '../services/profile-edit.service';

import {
  ProfileEditActions,
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
    ofType(ProfileEditActions.SAVE),
    map((action: SaveProfileChanges) => action.profileDto),
    switchMap((profileDto: ProfileDto) =>
      this.profileEditService.updateProfile(profileDto).pipe(
        map((profile: Profile) => new SaveProfileChangesSuccess(profile)),
        catchError((error: HttpErrorResponse) => of(new SaveProfileChangesError(error)))
      )
    )
  );

  @Effect()
  public saveChangesSuccess = this.actions$.pipe(
    ofType(ProfileEditActions.SAVE_SUCCESS),
    map((action: SaveProfileChangesSuccess) => action.profile),
    switchMap((profile: Profile) => of(new Update(profile)))
  );
}
