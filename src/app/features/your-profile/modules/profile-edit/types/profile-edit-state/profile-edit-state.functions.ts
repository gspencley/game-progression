import { ProfileEditState } from './profile-edit.state.interface';

export function createProfileEditState(): ProfileEditState {
  return {
    isSaving: false,
    error: null
  };
}
