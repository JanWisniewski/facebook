import {MyDatePipe} from './my-date.pipe';

describe('MyDatePipe', () => {
  let pipe: MyDatePipe = null;

  beforeEach(() => {
    pipe = new MyDatePipe();
  });

  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should works', () => {
    const input = 'Sun Oct 03 2222 10:14:18 GMT+0200 (czas środkowoeuropejski letni)';
    const output = pipe.transform(input);
    expect(output).toEqual('3 października 2222, 10:14');
  });

  it('should return empty string for falsy values', () => {
    const inputs = ['', undefined, null, 0, false, NaN];
    inputs.forEach((input) => {
      const output = pipe.transform(input as string);
      expect(output).toEqual('');
    });
  });

  it('should return empty string for non date-strings', () => {
    const input = 'ciasteczko';
    const output = pipe.transform(input as string);
    expect(output).toEqual('');
  });
});
