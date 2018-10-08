import {LanguageState} from '../types/language.state';
import {LanguageAction, LanguageActionTypes, SetLanguage} from './language.actions';
import {Language} from '../types/language';

const initialState: LanguageState = {
    language: Language.EN
};

export const languageReducer = (state: LanguageState=initialState, action: LanguageAction): LanguageState => {
    switch(action.type) {
        case LanguageActionTypes.SetLanguage:
            const setAction = action as SetLanguage;
            return { ...state, language: setAction.language};
        default:
            return state;
    }
};
