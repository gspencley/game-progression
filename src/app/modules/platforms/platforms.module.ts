import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { PlatformsService } from './services/platforms.service';
import { PlatformsEffects } from './store/platforms.effects';
import { PlatformsStore } from './store/platforms.store';
import { StoreModule } from '@ngrx/store';
import { platformsReducer } from './store/platforms.reducer';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,

    StoreModule.forFeature('platformsState', platformsReducer),
    EffectsModule.forFeature([PlatformsEffects])
  ],
  providers: [PlatformsService, PlatformsStore]
})
export class PlatformsModule {}
