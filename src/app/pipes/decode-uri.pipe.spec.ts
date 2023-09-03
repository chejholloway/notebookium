import { DecodeURIPipe } from './decode-uri.pipe';

describe('DecodeURIPipe', () => {
  it('should create and instance', () => {
    const pipe = new DecodeURIPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('DecodeURIPipe', () => {
  let pipe: DecodeURIPipe;

  beforeEach(() => {
    pipe = new DecodeURIPipe();
  });

  it('Should return the value decoded', () => {
    const word = '%C3%A9%C3%A0';
    expect(pipe.transform(word)).toEqual(decodeURI(word));
  });

  it('Should return the value unchanged', () => {
    expect(pipe.transform(1)).toEqual(1);
  });
});
