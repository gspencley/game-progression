import { Integer } from './integer.functions';

describe('Integer', () => {
  it('Should return a number if value is a string', () => {
    expect(Integer('3')).toBe(3);
  });

  it('Should return value if value is integer', () => {
    expect(Integer(5)).toBe(5);
  });
});
