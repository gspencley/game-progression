import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { LanguagesService } from './services/languages.service';
import { LanguagesEffects } from './store/languages.effects';
import { languagesReducer } from './store/languages.reducer';
import { LanguagesStore } from './store/languages.store';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('languagesState', languagesReducer),
    EffectsModule.forFeature([LanguagesEffects])
  ],
  providers: [LanguagesService, LanguagesStore]
})
export class LanguagesModule {}
