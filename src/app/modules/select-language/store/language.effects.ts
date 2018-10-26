import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LanguageActionTypes, LoadLanguagesSuccess } from './language.actions';
import { map, switchMap, withLatestFrom, filter } from 'rxjs/operators';
import { LanguageService } from '../services/language.service';
import { Language } from '../types/language.interface';
import { LanguageStore } from './language.store';
import { ProfileStore } from '../../your-profile/store/profile.store';

@Injectable()
export class LanguageEffects {
  constructor(private translateService: TranslateService,
              private actions$: Actions,
              private profileStore: ProfileStore,
              private languageStore: LanguageStore,
              private languageService: LanguageService) {
  }

  @Effect()
  loadLanguages = this.actions$.pipe(
    ofType(LanguageActionTypes.LoadLanguages),
    withLatestFrom(this.languageStore.getLanguages()),
    map(([action, languages]) => languages),
    filter((languages: Language[]) => languages.length === 0),
    switchMap(() => this.languageService.getLanguages().pipe(
      map((languages: Language[]) => new LoadLanguagesSuccess(languages))
    ))
  );
}
