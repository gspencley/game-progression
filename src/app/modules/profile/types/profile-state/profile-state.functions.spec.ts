import { ProfileState } from './profile-state.interface';

describe('ProfileState', () => {
  let profileState: ProfileState;

  describe('when the ProfileState is in a certain state', () => {
    beforeEach(() => {
      profileState = {} as ProfileState;
    });

    it('should be true', () => {
      expect(profileState).toEqual({} as ProfileState);
    });
  });
});
