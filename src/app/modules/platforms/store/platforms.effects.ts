import { Injectable } from '@angular/core';
import { ofType, Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, filter, map, switchMap, tap } from 'rxjs/operators';

import { PlatformsService } from '../services/platforms.service';

import { PlatformsActions, Retrieve, RetrieveError, RetrieveSuccess } from './platforms.actions';

@Injectable()
export class PlatformsEffects {
  constructor(
    private actions$: Actions,
    private platformsService: PlatformsService
  ) {}

  @Effect()
  private retrievePlatforms$ = this.actions$.pipe(
    ofType(PlatformsActions.RETRIEVE),
    switchMap((action: Retrieve) => this.platformsService.getPlatforms().pipe(
      map(platforms => new RetrieveSuccess(platforms, action.onSuccess)),
      catchError(error => of(new RetrieveError(error)))
    ))
  );

  @Effect()
  private retrieveSuccess$ = this.actions$.pipe(
    ofType(PlatformsActions.RETRIEVE_SUCCESS),
    filter((action: RetrieveSuccess) => action.onSuccess !== null),
    switchMap(action => of(action.onSuccess))
  )
}
