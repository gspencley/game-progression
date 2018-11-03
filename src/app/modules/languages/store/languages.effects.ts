import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { filter, map, switchMap, tap } from 'rxjs/operators';

import { LanguagesService } from '../services/languages.service';
import { Language } from '../types/language/language.interface';

import { LanguagesActions, Retrieve, RetrieveSuccess, UseLanguage } from './languages.actions';
import { LanguageCode } from '../types/language/language-code.enum';
import { TranslateService } from '@ngx-translate/core';

@Injectable()
export class LanguagesEffects {
  constructor(
    private actions$: Actions,
    private languagesService: LanguagesService,
    private translateService: TranslateService
  ) {}

  @Effect()
  private retrieveLanguages$ = this.actions$.pipe(
    ofType(LanguagesActions.RETRIEVE),
    switchMap((action: Retrieve) => this.languagesService.retrieve().pipe(
      map((languages: Language[]) => new RetrieveSuccess(languages, action.onSuccess))
    ))
  );

  @Effect()
  private retrieveSuccess$ = this.actions$.pipe(
    ofType(LanguagesActions.RETRIEVE_SUCCESS),
    filter((action: RetrieveSuccess) => action.dispatchNext !== null),
    switchMap((action: RetrieveSuccess) => of(action.dispatchNext))
  );

  @Effect({dispatch: false})
  private useLanguage$ = this.actions$.pipe(
    ofType(LanguagesActions.UPDATE_LANGUAGE),
    map((action: UseLanguage) => action.languageCode),
    tap((languageCode: LanguageCode) => this.translateService.use(languageCode))
  );
}
