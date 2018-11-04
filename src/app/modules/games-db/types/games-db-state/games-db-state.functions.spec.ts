import { GamesDbState } from './games-db-state.interface';

describe('GamesDbState', () => {
  let gamesDbState: GamesDbState;

  describe('when the GamesDbState is in a certain state', () => {
    beforeEach(() => {
      gamesDbState = {} as GamesDbState;
    });

    it('should be true', () => {
      expect(gamesDbState).toEqual({} as GamesDbState);
    });
  });
});
