import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';

import { LanguagesService } from '../services/languages.service';
import { Language } from '../types/language/language.interface';

import { LanguagesActions, Retrieve, RetrieveSuccess } from './languages.actions';

@Injectable()
export class LanguagesEffects {
  constructor(
    private actions$: Actions,
    private languagesService: LanguagesService
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
  )

}
