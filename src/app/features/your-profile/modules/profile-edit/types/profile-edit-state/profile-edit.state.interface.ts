import { HttpErrorResponse } from '@angular/common/http';

import { ProfileSaveState } from '../profile-save-state/profile-save-state.enum';

export interface ProfileEditState {
  readonly profileSaveState: ProfileSaveState;
  readonly isSaving: boolean;

  readonly error: HttpErrorResponse;
}
