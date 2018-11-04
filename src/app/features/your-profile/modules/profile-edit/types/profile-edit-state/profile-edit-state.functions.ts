import { ProfileEditState } from './profile-edit.state.interface';
import { ProfileSaveState } from '../profile-save-state/profile-save-state.enum';

export function createProfileEditState(): ProfileEditState {
  return {
    profileSaveState: ProfileSaveState.UNTOUCHED,
    isSaving: false,
    error: null
  };
}
