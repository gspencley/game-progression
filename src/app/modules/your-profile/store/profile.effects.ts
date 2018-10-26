import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../types/profile';
import { LoadProfileSuccess, ProfileActionTypes, UpdateLanguage } from './profile.actions';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { ProfileStore } from './profile.store';
import { Language } from '../../select-language/types/language.interface';
import { TranslateService } from '@ngx-translate/core';

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
        // TODO: catchError() - preemptive STFU Katie, I know & I'll get to it :P
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
