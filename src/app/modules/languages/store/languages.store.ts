import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppStore } from '../../../store/app.store';
import { AppState } from '../../../types/app-state';
import { Language } from '../types/language/language.interface';
import { LanguagesState } from '../types/languages-state/languages-state.interface';

import { Retrieve, RetrieveSuccess } from './languages.actions';

@Injectable()
export class LanguagesStore {
  constructor(private appStore: AppStore, private store: Store<AppState>) {}

  public getLanguagesState(): Observable<LanguagesState> {
    return this.appStore.getAppState().pipe(map(state => state.languagesState));
  }

  public getLanguages(): Observable<Language[]> {
    return this.getLanguagesState().pipe(map(state => state.languages));
  }

  public isLoaded(): Observable<boolean> {
    return this.getLanguages().pipe(
      map((languages: Language[]) => languages.length > 1)
    );
  }

  public setLanguages(languages: Language[]) {
    this.store.dispatch(new RetrieveSuccess(languages));
  }

  public retrieve() {
    this.store.dispatch(new Retrieve());
  }
}
