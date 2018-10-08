import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { LanguageAction, LanguageActionTypes } from './language.actions';
import { Language } from '../types/language';
import { map, tap } from 'rxjs/operators';

@Injectable()
export class LanguageEffects {
  constructor(private translateService: TranslateService, private actions: Actions) {
  }

  @Effect({dispatch: false})
  setLanguage = this.actions.pipe(
    ofType(LanguageActionTypes.SetLanguage),
    map((action: LanguageAction) => action.language),
    tap((language: Language) => this.translateService.use(language))
  );
}
