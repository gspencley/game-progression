import { Injectable } from '@angular/core';
import { AppStore } from '../../../store/app.store';
import { map } from 'rxjs/operators';
import { AppState } from '../../../types/app-state';
import { Observable } from 'rxjs';
import { LanguageState } from '../types/language.state';
import { LanguageCode } from '../types/language-code.enum';
import { Store } from '@ngrx/store';
import { LoadLanguages, SetLanguage } from './language.actions';
import { Language } from '../types/language.interface';

@Injectable()
export class LanguageStore {
  constructor(private store: Store<LanguageState>, private appStore: AppStore) {
  }

  getLanguageState(): Observable<LanguageState> {
    return this.appStore.getAppState().pipe(
      map((state: AppState) => state.languageState)
    );
  }

  getLanguages(): Observable<Language[]> {
    return this.getLanguageState().pipe(map((state: LanguageState) => state.languages));
  }

  getLanguage(): Observable<Language> {
    return this.getLanguageState().pipe(
      map((state: LanguageState) => state.language)
    );
  }

  setLanguage(lang: LanguageCode) {
    this.store.dispatch(new SetLanguage(lang));
  }

  loadLanguages() {
    this.store.dispatch(new LoadLanguages());
  }
}
