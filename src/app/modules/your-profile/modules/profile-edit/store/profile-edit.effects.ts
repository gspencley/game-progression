import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProfileStore } from '../../../store/profile.store';
import { ProfileEditActionTypes, SaveProfileChanges, SaveProfileChangesError, SaveProfileChangesSuccess } from './profile-edit.actions';
import { catchError, map, switchMap, tap } from 'rxjs/operators';
import { Profile } from '../../../types/profile.interface';
import { ProfileEditService } from '../services/profile-edit.service';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ProfileEditEffects {
  constructor(private profileStore: ProfileStore,
              private profileEditService: ProfileEditService,
              private actions$: Actions) {
  }

  @Effect()
  saveChanges = this.actions$.pipe(
    ofType(ProfileEditActionTypes.Save),
    map((action: SaveProfileChanges) => action.profile),
    switchMap((profile: Profile) => this.profileEditService.updateProfile(profile).pipe(
      map(() => new SaveProfileChangesSuccess(profile)),
      catchError((error: HttpErrorResponse) => of(new SaveProfileChangesError(error)))
    ))
  );

  @Effect({ dispatch: false })
  saveChangesSuccess = this.actions$.pipe(
    ofType(ProfileEditActionTypes.SaveSuccess),
    map((action: SaveProfileChangesSuccess) => action.profile),
    tap((profile: Profile) => this.profileStore.updateProfile(profile))
  );
}