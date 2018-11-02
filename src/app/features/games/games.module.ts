import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';

import { GamesComponent } from './components';
import { GamesRoutingModule } from './games-routing.module';
import { GamesService } from './services/games.service';
import { GamesEffects } from './store/games.effects';
import { GamesStore } from './store/games.store';
import { UiModule } from '../../modules/ui/ui.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EffectsModule.forFeature([GamesEffects]),
    GamesRoutingModule,
    UiModule
  ],
  declarations: [GamesComponent],
  exports: [],
  providers: [GamesService, GamesStore]
})
export class GamesModule {}
