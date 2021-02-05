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
  test('Creating the planet object with a birthday that has yet to happen this year', () => {
    let planet2 = new Planet(1999,12,24,true);
    expect(planet2.daysSince).toEqual(128);
  });
  test('Creating the planet object with a birthday that has already happened this year', () => {
    let planet3 = new Planet(1999,0,1,false);
    expect(planet3.daysSince).toEqual(35);
  });
  
  test('should set planetAge and planetNext to age on planet Mercury and next birthday on Mercury in Earth date', () => {
    planet.mercury();
    expect(planet.planetAge).toEqual();
    expect(planet.planetNext).toEqual();
  })
});