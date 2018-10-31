import { Profile } from './profile.interface';
import { ProfileEditStateInterface } from '../modules/profile-edit/types/profile-edit-state.interface';

export interface ProfileState {
  readonly profile: Profile;
  readonly profileEditState: ProfileEditStateInterface;
}
