import { HttpErrorResponse } from '@angular/common/http';

export interface ProfileEditState {
  readonly error: HttpErrorResponse;
}
