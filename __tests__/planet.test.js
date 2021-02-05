import Planet from '../src/js/planet.js'

describe('Planet', () => {

  let planet;

  beforeEach(() => {
    planet = new Planet(1999,1,19);
  })

  test('Should create a planet object with the values of the current Year, birthday, years since birth and days since last birthday saved', () => {
    let date = new Date(1999,1,19);
    expect(planet.currentYear).toEqual(2021);
    expect(planet.birthday).toEqual(date);
    expect(planet.years).toEqual(21);
    expect(planet.daysSince).toBeGreaterThanOrEqual(1);
    expect(planet.daysSince).toBeLessThan(366)
  });
  test('Creating the planet object with a birthday that has yet to happen this year', () => {
    let planet2 = new Planet(1999,12,24);
    expect(planet2.daysSince).toBeGreaterThanOrEqual(1);
    expect(planet2.daysSince).toBeLessThan(366)
  });
  test('Creating the planet object with a birthday that has already happened this year', () => {
    let planet3 = new Planet(1999,0,1);
    expect(planet3.daysSince).toBeGreaterThanOrEqual(1);
    expect(planet3.daysSince).toBeLessThan(366)
  });

});