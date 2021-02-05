import Planet from '../src/js/planet.js'

describe('Planet', () => {

  let planet;

  beforeEach(() => {
    planet = new Planet("1999.09.19");
  })

  test('Should create a planet object with values for age in days and age in epoch time', () => {
    expect(planet.age).toEqual(7810);
    expect(planet.epochAge).toEqual(937724400);
    expect()
  })

});