import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { map, switchMap, tap, withLatestFrom } from 'rxjs/operators';

import { LanguagesService } from '../modules/languages/services/languages.service';
import { RetrieveSuccess } from '../modules/languages/store/languages.actions';
import { Retrieve } from '../modules/profile/store/profile.actions';

import { AppActions } from './app.actions';
import { Language } from '../modules/languages/types/language/language.interface';
import { of } from 'rxjs';
import { LanguagesStore } from '../modules/languages/store/languages.store';
import { ProfileStore } from '../modules/profile/store/profile.store';

@Injectable()
export class AppEffects {
  constructor(
    private actions$: Actions,
    private languagesService: LanguagesService,
    private languagesStore: LanguagesStore,
    private profileStore: ProfileStore
  ) {}

  @Effect()
  private retrieveLanguagesAndProfile$ = this.actions$.pipe(
    ofType(AppActions.RETRIEVE_LANGUAGES_AND_PROFILE),
    switchMap(() => this.languagesService.retrieve().pipe(
        map((languages: Language[]) => this.languagesStore.setLanguages(languages)),
        map(() => new Retrieve())
    ))
  );
}
