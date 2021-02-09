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
    expect(planet.lifeExpectancy).toEqual(76);
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
  })
  test('should find next earth date of birthday on a given planet', () => {
    let date1 = new Date(2021,1,24);
    let date2 = new Date(2021,2,31);
    let date3 = new Date(2021,8,18);
    let date4 = new Date(2022,3,14);
    let date5 = new Date(2023,5,10);
    let date6 = new Date(2029,2,4);
    let date7 = new Date(2083,8,26);
    let date8 = new Date(2164,6,5);
    expect(planet.convertNext("mercury")).toEqual(date1);
    expect(planet.convertNext("venus")).toEqual(date2);
    expect(planet.convertNext("earth")).toEqual(date3);
    expect(planet.convertNext("mars")).toEqual(date4);
    expect(planet.convertNext("jupiter")).toEqual(date5);
    expect(planet.convertNext("saturn")).toEqual(date6);
    expect(planet.convertNext("uranus")).toEqual(date7);
    expect(planet.convertNext("neptune")).toEqual(date8);
  })


});