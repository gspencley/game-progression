import { HttpErrorResponse } from '@angular/common/http';

export interface ProfileEditState {
  readonly isSaving: boolean;
  readonly error: HttpErrorResponse;
}
