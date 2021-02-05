import Planet from '../src/js/planet.js'

describe('Planets', () => {

  let planet;

  beforeEach(() => {
    planet = new Planet(1999,8,19,true);
  })

  test('Should create a planet object with the values of the current Year, birthday, years since birth and days since last birthday saved', () => {
    let date = new Date(1999,8,19);
    expect(planet.currentYear).toEqual(2021);
    expect(planet.birthday).toEqual(date);
    expect(planet.years).toEqual(21.3591);
  });
  test("Should set currentYear to equal the current year when the test flag is set to false", () => {
    let planet1 = new Planet(1999,5,24);
    let rightNow = new Date();
    expect(planet1.currentYear).toEqual(rightNow.getFullYear());
  })

  test('Creating the planet object with a birthday that has yet to happen this year', () => {
    let planet2 = new Planet(1999,5,24,true);
    expect(planet2.daysSince).toEqual(254);
  });
  test('Creating the planet object with a birthday that has already happened this year', () => {
    let planet3 = new Planet(1999,1,1,true);
    expect(planet3.daysSince).toEqual(32);
  });
  test('should convert age to age on a given planet', () => {
    expect(planet.convertAge("mercury")).toEqual(88.68);
    expect(planet.convertAge("venus")).toEqual(34.72);
    expect(planet.convertAge("earth")).toEqual(21.36);
    expect(planet.convertAge("mars")).toEqual(11.36);
    expect(planet.convertAge("jupiter")).toEqual(1.8);
    expect(planet.convertAge("saturn")).toEqual(0.73);
    expect(planet.convertAge("uranus")).toEqual(0.25);
    expect(planet.convertAge("neptune")).toEqual(0.13);
    expect(planet.convertAge("pluto")).toEqual(0.09);
  })
});