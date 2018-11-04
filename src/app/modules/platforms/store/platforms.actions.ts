import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';

import { Platform } from '../types/platform/platform.interface';

export const PlatformsActions = {
  RETRIEVE:         'PLATFORMS--RETRIEVE',
  RETRIEVE_SUCCESS: 'PLATFORMS--RETRIEVE_SUCCESS',
  RETRIEVE_ERROR:   'PLATFORMS--RETRIEVE_ERROR'
};

export class Retrieve implements Action {
  public readonly type = PlatformsActions.RETRIEVE;
  constructor(public onSuccess: Action = null) {}
}

export class RetrieveSuccess implements Action {
  public readonly type = PlatformsActions.RETRIEVE_SUCCESS;
  constructor(public platforms: Platform[], public onSuccess: Action = null) {}
}

export class RetrieveError implements Action {
  public readonly type = PlatformsActions.RETRIEVE_ERROR;
  constructor(public error: HttpErrorResponse) {}
}
