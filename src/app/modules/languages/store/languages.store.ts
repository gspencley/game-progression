import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { AppStore } from '../../../store/app.store';
import { AppState } from '../../../types/app-state';
import { Language } from '../types/language/language.interface';
import { LanguagesState } from '../types/languages-state/languages-state.interface';

import { Retrieve } from './languages.actions';

@Injectable()
export class LanguagesStore {
  constructor(private appStore: AppStore, private store: Store<AppState>) {}

  public getLanguagesState(): Observable<LanguagesState> {
    return this.appStore.getAppState().pipe(map(state => state.languagesState));
  }

  public getLanguages(): Observable<Language[]> {
    return this.getLanguagesState().pipe(map(state => state.languages));
  }

  public retrieve() {
    return this.store.dispatch(new Retrieve());
  }
}
