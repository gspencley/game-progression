import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, withLatestFrom } from 'rxjs/operators';

import { environment } from '../../../../environments/environment';
import { PlatformsStore } from '../../platforms/store/platforms.store';
import { GameResponse } from '../types/game-response/game-response.interface';
import { transformGameResponseArrayToGames, transformGameResponseToGame } from '../types/game/game.functions';
import { Game } from '../types/game/game.interface';

@Injectable()
export class GamesDbService {
  constructor(
    private httpClient: HttpClient,
    private platformsStore: PlatformsStore
    ) {}

  public getGames(): Observable<Game[]> {
    return this.httpClient.get<GameResponse[]>(`${environment.APIEndpoint}/games`).pipe(
      withLatestFrom(this.platformsStore.getPlatforms()),
      map(([response, platforms]) => transformGameResponseArrayToGames(response, platforms))
    );
  }
}
