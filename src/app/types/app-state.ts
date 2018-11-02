import { GamesState } from '../features/games/types/games-state/games-state.interface';
import { ProfileEditState } from '../features/your-profile/modules/profile-edit/types/profile-edit.state.interface';
import { LanguagesState } from '../modules/languages/types/languages-state/languages-state.interface';
import { ProfileState } from '../modules/profile/types/profile-state/profile-state.interface';

export interface AppState {
  readonly languagesState: LanguagesState;
  readonly profileEditState: ProfileEditState;
  readonly profileState: ProfileState;
  readonly gamesState: GamesState;
}
