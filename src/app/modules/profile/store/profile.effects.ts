import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { catchError, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { LanguagesStore } from '../../languages/store/languages.store';
import { Language } from '../../languages/types/language/language.interface';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../types/profile/profile.interface';

import { ProfileActions, RetrieveSuccess, UpdateLanguage } from './profile.actions';

@Injectable()
export class ProfileEffects {
  constructor(
    private profileService: ProfileService,
    private languagesStore: LanguagesStore,
    private translateService: TranslateService,
    private actions$: Actions
  ) {}

  @Effect()
  private retrieveProfile$ = this.actions$.pipe(
    ofType(ProfileActions.RETRIEVE),
    withLatestFrom(this.languagesStore.getLanguages()),
    map(([action, languages]) => languages),
    switchMap((languages) => this.profileService.getProfile(languages).pipe(
      map((profile: Profile) => new RetrieveSuccess(profile))
    ))
  );

  @Effect({ dispatch: false })
  public updateLanguage$ = this.actions$.pipe(
    ofType(ProfileActions.UPDATE_LANGUAGE),
    map((action: UpdateLanguage) => action.language),
    tap((language: Language) => this.translateService.use(language.code))
  );
}
