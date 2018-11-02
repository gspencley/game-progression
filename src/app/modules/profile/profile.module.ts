import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { ProfileService } from './services/profile.service';
import { ProfileEffects } from './store/profile.effects';
import { ProfileStore } from './store/profile.store';
import { StoreModule } from '@ngrx/store';
import { profileReducer } from './store/profile.reducer';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    TranslateModule.forChild(),
    StoreModule.forFeature('profileState', profileReducer),
    EffectsModule.forFeature([ProfileEffects])],
  providers: [ProfileService, ProfileStore]
})
export class ProfileModule {}
