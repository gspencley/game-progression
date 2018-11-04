import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { GamesDbService } from './services/games-db.service';
import { GamesDbEffects } from './store/games-db.effects';
import { gamesDbReducer } from './store/games-db.reducer';
import { GamesDbStore } from './store/games-db.store';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    StoreModule.forFeature('gamesDbState', gamesDbReducer),
    EffectsModule.forFeature([GamesDbEffects])
  ],
  providers: [GamesDbService, GamesDbStore]
})
export class GamesDbModule {}
