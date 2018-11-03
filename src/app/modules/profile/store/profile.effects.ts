import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { TranslateService } from '@ngx-translate/core';
import { filter, map, switchMap, tap } from 'rxjs/operators';

import { LanguagesStore } from '../../languages/store/languages.store';
import { Language } from '../../languages/types/language/language.interface';
import { ProfileService } from '../services/profile.service';
import { Profile } from '../types/profile/profile.interface';

import { ProfileActions, Retrieve, RetrieveSuccess, Update, UpdateLanguage } from './profile.actions';
import { Action } from '@ngrx/store';
import { of } from 'rxjs';

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
    switchMap((action: Retrieve) =>
      this.profileService.getProfile().pipe(
        map((profile: Profile) => new RetrieveSuccess(profile, action.onSuccess))
    ))
  );

  @Effect({ dispatch: false })
  private updateLanguage$ = this.actions$.pipe(
    ofType(ProfileActions.UPDATE_LANGUAGE),
    map((action: UpdateLanguage) => action.language),
    tap((language: Language) => this.translateService.use(language.code))
  );

  @Effect({ dispatch: false })
  private update$ = this.actions$.pipe(
    ofType(ProfileActions.UPDATE),
    map((action: Update) => action.profile),
    tap((profile: Profile) => this.translateService.use(profile.language.code))
  );

  @Effect()
  private retrieveSuccess$ = this.actions$.pipe(
    ofType(ProfileActions.RETRIEVE_SUCCESS),
    filter((action: RetrieveSuccess) => action.onSuccess !== null),
    map((action: RetrieveSuccess) => action.onSuccess),
    switchMap((onSuccess: Action) => of(onSuccess))
  );
}
