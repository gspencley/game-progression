import { NgModule } from '@angular/core';
import { GamesComponent } from './components/games/games.component';
import { GamesRoutesModule } from './games-routes.module';


@NgModule({
  imports: [
    GamesRoutesModule
  ],
  exports: [],
  declarations: [GamesComponent],
  providers: [],
})
export class GamesModule {
}
