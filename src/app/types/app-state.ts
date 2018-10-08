import {LanguageState} from '../modules/language/types/language.state';
import {NavigationState} from '../modules/navigation/types/navigation-state';
import {ProfileState} from '../modules/your-profile/types/profile-state';

export interface AppState {
    readonly languageState?: LanguageState;
    readonly navigationState?: NavigationState;
    readonly profileState?: ProfileState;
}