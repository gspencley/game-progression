import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { Retrieve as RetrieveLanguages, UseLanguage } from '../modules/languages/store/languages.actions';
import { Retrieve as RetrieveProfile } from '../modules/profile/store/profile.actions';

import { AppActions, InitializeLanguages, InitializeProfile, UseProfileLanguage } from './app.actions';
import { ProfileStore } from '../modules/profile/store/profile.store';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private profileStore: ProfileStore
  ) {}

  @Effect()
  private initialize$ = this.actions$.pipe(
    ofType(AppActions.INITIALIZE),
    switchMap(() => of(new InitializeLanguages()))
  );

  @Effect()
  private initializeLanguages$ = this.actions$.pipe(
    ofType(AppActions.INITIALIZE_LANGUAGES),
    switchMap(() => of(new RetrieveLanguages(new InitializeProfile())))
  );

  @Effect()
  private initializeProfile$ = this.actions$.pipe(
    ofType(AppActions.INITIALIZE_PROFILE),
    switchMap(() => of(new RetrieveProfile(new UseProfileLanguage())))
  );

  @Effect()
  private useProfileAction$ = this.actions$.pipe(
    ofType(AppActions.USE_PROFILE_LANGUAGE),
    withLatestFrom(this.profileStore.getProfile()),
    map(([action,profile]) => profile),
    switchMap((profile) => of(new UseLanguage(profile.language.code)))
  )
}
