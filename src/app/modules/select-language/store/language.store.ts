import {Injectable} from '@angular/core';
import {AppStore} from '../../../store/app.store';
import {map} from 'rxjs/operators';
import {AppState} from '../../../types/app-state';
import {Observable} from 'rxjs';
import {LanguageState} from '../types/language.state';
import {Language} from '../types/language';
import {Store} from '@ngrx/store';
import {SetLanguage} from './language.actions';

@Injectable()
export class LanguageStore {
    constructor(private store: Store<LanguageState>, private appStore: AppStore) {
    }

    getLanguageState(): Observable<LanguageState> {
        return this.appStore.getAppState().pipe(
            map((state: AppState) => state.languageState)
        );
    }

    getLanguage() {
        return this.getLanguageState().pipe(
            map((state: LanguageState) => state.language)
        );
    }

    setLanguage(lang: Language) {
        this.store.dispatch(new SetLanguage(lang));
    }
}
