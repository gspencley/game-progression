import { Integer } from '../../../../types/integer/integer.functions';
import { getPlatformById } from '../../../platforms/types/platform/platform.functions';
import { Platform } from '../../../platforms/types/platform/platform.interface';
import { GameResponse } from '../game-response/game-response.interface';

import { Game } from './game.interface';

export function transformGameResponseArrayToGames(response: GameResponse[], platforms: Platform[]): Game[] {
  return response.map(gameResponse => transformGameResponseToGame(gameResponse, platforms));
}

export function transformGameResponseToGame(response: GameResponse, platforms: Platform[]): Game {
  return {
    id: Integer(response.id),
    platform: getPlatformById(response.platformId, platforms),
    dateCreated: response.dateCreated,
    image: response.image,
    isComplete: response.isComplete,
    name: response.name,
    priority: response.priority,
    numberOfHoursPlayed: Integer(response.numberOfHoursPlayed),
    numberOfHoursToComplete: Integer(response.numberOfHoursToComplete)
  };
}

export function getTotalNumberOfHoursToComplete(games: Game[]): number {
  return games.reduce((val, game) =>  val + game.numberOfHoursToComplete, 0);
}

export function getNumberOfUnfinishedGames(games: Game[]): number {
  return games.reduce((val, game) => game.isComplete === false ? val + 1 : val, 0);
}

export function getNumberOfFinishedGames(games: Game[]): number {
  return games.reduce((val, game) => game.isComplete ? val + 1 : val, 0);
}