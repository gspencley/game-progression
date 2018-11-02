import { createProfile } from '../profile/profile.functions';

import { ProfileState } from './profile-state.interface';

export function createProfileState(): ProfileState {
  return {
    profile: createProfile()
  };
}
