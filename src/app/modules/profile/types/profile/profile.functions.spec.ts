import { Profile } from './profile.interface';

describe('ProfileState', () => {
  let profile: Profile;

  describe('when the Profile is in a certain state', () => {
    beforeEach(() => {
      profile = {} as Profile;
    });

    it('should be true', () => {
      expect(profile).toEqual({} as Profile);
    });
  });
});
