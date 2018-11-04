import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { GamesDbStore } from '../../../../modules/games-db/store/games-db.store';
import { getTotalNumberOfHoursToComplete } from '../../../../modules/games-db/types/game/game.functions';

@Injectable()
export class DashboardService {
  constructor(private gamesDbStore: GamesDbStore) {}

  public getHoursRemaining(): Observable<number> {
    return this.gamesDbStore.getGames().pipe(
      map(games => getTotalNumberOfHoursToComplete(games))
    );
  }

}