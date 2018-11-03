import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { Retrieve as RetrieveLanguages } from '../modules/languages/store/languages.actions';
import { Retrieve as RetrieveProfile } from '../modules/profile/store/profile.actions';

import { AppActions, InitializeLanguages, InitializeProfile } from './app.actions';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
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
    switchMap(() => of(new RetrieveProfile()))
  );
}
