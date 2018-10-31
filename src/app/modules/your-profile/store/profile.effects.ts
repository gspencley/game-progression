import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../types/profile.interface';
import {
  LoadProfileError,
  LoadProfileSuccess,
  ProfileActionTypes,
  UpdateLanguage
} from './profile.actions';
import { catchError, filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { ProfileStore } from './profile.store';
import { Language } from '../../select-language/types/language.interface';
import { TranslateService } from '@ngx-translate/core';
import { of } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class ProfileEffects {
  constructor(private actions$: Actions,
              private profileService: ProfileService,
              private profileStore: ProfileStore,
              private translateService: TranslateService) {
  }

  @Effect()
  loadProfile = this.actions$.pipe(
    ofType(ProfileActionTypes.Load),
    withLatestFrom(this.profileStore.getProfile()),
    map(([action, profile]) => profile),
    filter((profile: Profile) => profile.id === 0),
    switchMap(() =>
      this.profileService.getProfile().pipe(
        map((profile: Profile) => new LoadProfileSuccess(profile)),
        catchError((error: HttpErrorResponse) => of(new LoadProfileError(error)))
      )
    )
  );


  @Effect({dispatch: false})
  updateLanguage = this.actions$.pipe(
    ofType(ProfileActionTypes.UpdateLanguage),
    map((action: UpdateLanguage) => action.language),
    tap((language: Language) => this.translateService.use(language.code))
  );
}
