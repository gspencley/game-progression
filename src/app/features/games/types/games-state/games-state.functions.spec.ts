import { GamesState } from './games-state.interface';

describe('GamesState', () => {
  let gamesState: GamesState;

  describe('when the GamesState is in a certain state', () => {
    beforeEach(() => {
      gamesState = {} as GamesState;
    });

    it('should be true', () => {
      expect(gamesState).toEqual({} as GamesState);
    });
  });
});
