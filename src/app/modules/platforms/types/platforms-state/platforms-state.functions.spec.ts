import { PlatformsState } from './platforms-state.interface';

describe('PlatformsState', () => {
  let platformsState: PlatformsState;

  describe('when the PlatformsState is in a certain state', () => {
    beforeEach(() => {
      platformsState = {} as PlatformsState;
    });

    it('should be true', () => {
      expect(platformsState).toEqual({} as PlatformsState);
    });
  });
});
