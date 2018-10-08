import {NavigationState} from '../modules/navigation/types/navigation-state';
import {ProfileState} from '../modules/your-profile/types/profile-state';
import {LanguageState} from '../modules/select-language/types/language.state';

export interface AppState {
    readonly languageState?: LanguageState;
    readonly navigationState?: NavigationState;
    readonly profileState?: ProfileState;
}