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
    expect(planet.years).toEqual(21);
    expect(planet.planetAge).toEqual(0);
    expect(planet.planetNext).toEqual(0);
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
  test('should set planetAge and planetNext to age on planet Mercury and next birthday on Mercury in Earth date', () => {
    planet.mercury();
    expect(planet.planetAge).toEqual();
    expect(planet.planetNext).toEqual();
  })
});