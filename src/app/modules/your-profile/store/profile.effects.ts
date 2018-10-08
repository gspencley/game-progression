import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { ProfileService } from '../services/profile.service';
import { of } from 'rxjs';
import { Profile } from '../types/profile';
import { LoadProfile, LoadProfileSuccess, ProfileActionTypes } from './profile.actions';
import { filter, map, switchMap, tap, withLatestFrom } from 'rxjs/operators';
import { ProfileStore } from './profile.store';

@Injectable()
export class ProfileEffects {
  constructor(private actions: Actions, private profileService: ProfileService, private profileStore: ProfileStore) {
  }

  @Effect()
  loadProfile = this.actions.pipe(
    ofType(ProfileActionTypes.Load),
    withLatestFrom(this.profileStore.getProfile()),
    map(([action, profile]) => profile),
    filter((profile: Profile) => profile.id === 0),
    tap(() => {
      console.log('Going to Load The Profile Now...');
    }),
    switchMap(() =>
      this.profileService.getProfile().pipe(
        switchMap((profile: Profile) => of(new LoadProfileSuccess(profile)))
      )
    )
  );
  /*
      @Effect()
      initializeProfile = this.actions.pipe(
          ofType(ProfileActionTypes.Initialize),
          tap(() => { console.log('Initialize Profile'); }),
          withLatestFrom(this.profileStore.getProfile()),
          map(([action, profile]) => profile),
          filter((profile: Profile) => profile.id === 0),
          switchMap(() => of(new LoadProfile()))
      );*/
}