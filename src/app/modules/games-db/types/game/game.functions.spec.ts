import { Platform } from '../../../platforms/types/platform/platform.interface';
import { GameResponse } from '../game-response/game-response.interface';

import {
  getNumberOfFinishedGames,
  getNumberOfUnfinishedGames,
  getTotalNumberOfHoursToComplete,
  transformGameResponseArrayToGames,
  transformGameResponseToGame
} from './game.functions';
import { Game } from './game.interface';

describe('Game Functions', () => {
  let platforms: Platform[] = [];
  let gameData = {};

  beforeEach(() => {
    platforms = [
      { id: 1, name: 'PS4'},
      { id: 2, name: 'X-Box 360'}
    ];

    gameData = {
      dateCreated: '2018-09-11T14:07:46+00:00',
      name: 'God of War',
      image: 'https://howlongtobeat.com/gameimages/38050_God_of_War.jpg',
      priority: 8,
      numberOfHoursPlayed: 2,
      numberOfHoursToComplete: 19.5,
      isComplete: false
    };
  });

  describe('transformGameResponseToGame', () => {
    it('Should map platformId to Platform', () => {
      const response: GameResponse = {
        ...gameData as GameResponse,
        id: 1,
        platformId: 1
      };

      expect(transformGameResponseToGame(response, platforms)).toEqual({
        ...gameData,
        id: 1,
        platform: platforms[0]
      });
    });
  });

  describe('transformGameResponseArrayToGames', () => {

    it('should return array of Game', () => {
      const gameResponse = [
        { ...gameData, id: 1, platformId: 2 },
        { ...gameData, id: 2, platformId: 1 }
      ];

      const expected = [
        { ...gameData, id: 1, platform: platforms[1] },
        { ...gameData, id: 2, platform: platforms[0]}
      ];

      expect(transformGameResponseArrayToGames(gameResponse as GameResponse[], platforms)).toEqual(expected as Game[]);
    });
  });

  describe('getTotalNumberOfHoursToComplete', () => {
    it('Should return sum of all Game.numberOfHoursToComplete', () => {
      const games = [
        { ...gameData, id: 1, numberOfHoursToComplete: 12 },
        { ...gameData, id: 2, numberOfHoursToComplete:  6 },
        { ...gameData, id: 3, numberOfHoursToComplete: 24 },
        { ...gameData, id: 4, numberOfHoursToComplete: 2 }
      ];

      expect(getTotalNumberOfHoursToComplete(games as Game[])).toBe(44);
    });
  });

  describe('getNumberOf Functions', () => {
    let games = [];

    beforeEach(() => {
      games = [
        { ...gameData, id: 1, isComplete: true },
        { ...gameData, id: 2, isComplete: false },
        { ...gameData, id: 3, isComplete: true },
        { ...gameData, id: 4, isComplete: true }
      ];
    });

    describe('getNumberOfUnfinishedGames', () => {
      it('Should return number of unfinished games', () => {
        expect(getNumberOfUnfinishedGames(games as Game[])).toBe(1);
      });
    });

    describe('getNumberOfFinishedGames', () => {
      it('Should return number of finished games', () => {
        expect(getNumberOfFinishedGames(games as Game[])).toBe(3);
      });
    });
  });
});