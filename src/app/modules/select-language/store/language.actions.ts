import {Action} from '@ngrx/store';
import {Language} from '../types/language';

export enum LanguageActionTypes {
    SetLanguage         = '[Language] SetLanguage'
}

export class SetLanguage implements Action {
    readonly type = LanguageActionTypes.SetLanguage;
    constructor(public language: Language) {}
}

export type LanguageAction = SetLanguage;