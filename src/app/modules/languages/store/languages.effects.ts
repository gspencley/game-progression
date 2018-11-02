import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, withLatestFrom } from 'rxjs/operators';

import { LanguagesService } from '../services/languages.service';
import { Language } from '../types/language/language.interface';

import { LanguagesActions, RetrieveSuccess } from './languages.actions';

@Injectable()
export class LanguagesEffects {
  constructor(
    private actions$: Actions,
    private languagesService: LanguagesService
  ) {}

  @Effect()
  private retrieveLanguages$ = this.actions$.pipe(
    ofType(LanguagesActions.RETRIEVE),
    switchMap(() => this.languagesService.retrieve().pipe(
      map((languages: Language[]) => new RetrieveSuccess(languages))
    ))
  );
}
