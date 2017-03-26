import { WeatherModifierPipe } from './weather-modifier.pipe';

describe('WeatherModifierPipe', () => {
  it('create an instance', () => {
    const pipe = new WeatherModifierPipe();
    expect(pipe).toBeTruthy();
  });
});
