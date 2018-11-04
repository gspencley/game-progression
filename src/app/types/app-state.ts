import { GamesState } from '../features/games/types/games-state/games-state.interface';
import { ProfileEditState } from '../features/your-profile/modules/profile-edit/types/profile-edit-state/profile-edit.state.interface';
import { LanguagesState } from '../modules/languages/types/languages-state/languages-state.interface';
import { ProfileState } from '../modules/profile/types/profile-state/profile-state.interface';
import { GamesDbState } from '../modules/games-db/types/games-db-state/games-db-state.interface';
import { PlatformsState } from '../modules/platforms/types/platforms-state/platforms-state.interface';

export interface AppState {
  readonly languagesState: LanguagesState;
  readonly profileEditState: ProfileEditState;
  readonly profileState: ProfileState;
  readonly gamesState: GamesState;
  readonly gamesDbState: GamesDbState;
  readonly platformsState: PlatformsState;
}
