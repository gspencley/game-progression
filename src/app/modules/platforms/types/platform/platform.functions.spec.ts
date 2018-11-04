import { Platform } from './platform.interface';
import { getPlatformById } from './platform.functions';

describe('Platform functions', () => {
  describe('getPlatformById', () => {

    let platforms: Platform[] = [];

    beforeEach(() => {
      platforms = [
        {id: 1, name: 'PS4'},
        {id: 2, name: 'X-Box 360'}
      ];
    });

    it('should return Platform with id', () => {
      expect(getPlatformById(1, platforms)).toEqual({id: 1, name: 'PS4'});
    });
  });
});
