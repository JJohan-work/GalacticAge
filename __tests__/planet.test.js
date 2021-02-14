import Planet from '../src/js/planet.js'

describe('Planets', () => {
  let planet;
  let realplanet;
  beforeEach(() => {
    planet = new Planet(1999,8,19,true);
    realplanet = new Planet(1999,8,19,false);
  })
  test('should create a replacement cypher for planet names to earth days in a planet year', () => {
    expect(planet.yearCycle).toEqual({
      "mercury":87.97,
      "venus":224.7,
      "earth":365.25,
      "mars":686.97,
      "jupiter":4332.82,
      "saturn":10759.26,
      "uranus":30688.48,
      "neptune":60190
    });
  });
    test('should create a name replacement cypher for planets and planet units', () => {
    expect(planet.belongTo).toEqual({
      "mercury":"mercurian",
      "venus":"venusian",
      "earth":"earthen",
      "mars":"martian",
      "jupiter":"jovian",
      "saturn":"saturnian",
      "uranus":"uranian",
      "neptune":"neptunian"
    });
  });
  test('should set now of planet object to the test date while test flag is true', () => {
    let date = new Date(2021,2,5);
    expect(planet.now).toEqual(date);
  });
  test(`should set now of planet object to the realtime date while test flag is false`, () => {
    let date = new Date();
    expect(realplanet.now).toEqual(date);
  });
  test('should set currentYear of planet object to current realtime year when test flag is false', () => {
    let rightNow = new Date();
    expect(planet.currentYear).toEqual(rightNow.getFullYear());
  });
  test('Should create a planet object with the values of the current Year, birthday, years since birth and days since last birthday saved', () => {
    let date = new Date(1999,8,19);
    expect(planet.birthday).toEqual(date);
  });
    test('Should set years of planet object to a floating point number of the years since the given birthday', () => {
    expect(planet.years).toEqual(21.3591);
  });
    test(`Should set lifeExpectancy of planet object with the average life expectancy calculated from given birthday`, () => {
    expect(planet.lifeExpectancy).toEqual(76);
  });
  test("Should return realtime timestamp while test flag is set to false", () => {
    let rightNow = new Date();
    expect(planet.getCurrentTime(false)).toEqual(rightNow);
  });
  test("Should return preset timestamp value while test flag is set to true", () => {
    expect(planet.getCurrentTime(true)).toEqual(new Date(2021,2,5));
  });
  test("Should get year from inputed Date object", () => {
    expect(planet.getYear(planet.now)).toEqual(2021);
    });
  test('should convert age to age on mercury', () => {
    expect(planet.convertAge("mercury")).toEqual(88.68);
    });
    test('should convert age to age on venus', () => {
    expect(planet.convertAge("venus")).toEqual(34.72);
    });
    test('should convert age to age on earth', () => {
    expect(planet.convertAge("earth")).toEqual(21.36);
  });
  test('should convert age to age on mars', () => {
    expect(planet.convertAge("mars")).toEqual(11.36);
  });
  test('should convert age to age on jupiter', () => {
    expect(planet.convertAge("jupiter")).toEqual(1.8);
  });
  test('should convert age to age on saturn', () => {
    expect(planet.convertAge("saturn")).toEqual(0.73);
  });
  test('should convert age to age on uranus', () => {
    expect(planet.convertAge("uranus")).toEqual(0.25);
  });
  test('should convert age to age on neptune', () => {
    expect(planet.convertAge("neptune")).toEqual(0.13);
  })


  test('should find next earth date of birthday on mercury', () => {
    let date = new Date(2021,1,24);
    expect(planet.getNextBirthday("mercury")).toEqual(date);
  })
    test('should find next earth date of birthday on venus', () => {
    let date = new Date(2021,2,31);
    expect(planet.getNextBirthday("venus")).toEqual(date);
  })
    test('should find next earth date of birthday on earth', () => {
    let date = new Date(2021,8,18);
    expect(planet.getNextBirthday("earth")).toEqual(date);
  })
    test('should find next earth date of birthday on mars', () => {
    let date = new Date(2022,3,14);
    expect(planet.getNextBirthday("mars")).toEqual(date);
  })
    test('should find next earth date of birthday on jupiter', () => {
    let date = new Date(2023,5,10);
    expect(planet.getNextBirthday("jupiter")).toEqual(date);
  })
    test('should find next earth date of birthday on saturn', () => {
    let date = new Date(2029,2,4);
    expect(planet.getNextBirthday("saturn")).toEqual(date);
  })
    test('should find next earth date of birthday on uranus', () => {
    let date = new Date(2083,8,26);
    expect(planet.getNextBirthday("uranus")).toEqual(date);
  })
    test('should find next earth date of birthday on neptune', () => {
    let date = new Date(2164,6,5);
    expect(planet.getNextBirthday("neptune")).toEqual(date);
  })

  test('should return the years left to live on mercury based on the estimated lifespan and the current age', () => {
    expect(planet.getTimeLeft("mercury")).toEqual([226.87,false]);
  })
  test('should return the years left to live on venus based on the estimated lifespan and the current age', () => {
    expect(planet.getTimeLeft("venus")).toEqual([88.82,false]);
  })
  test('should return the years left to live on earth based on the estimated lifespan and the current age', () => {
    expect(planet.getTimeLeft("earth")).toEqual([54.64,false]);
  })
  test('should return the years left to live on mars based on the estimated lifespan and the current age', () => {
    expect(planet.getTimeLeft("mars")).toEqual([29.05,false]);
  })
  test('should return the years left to live on jupiter based on the estimated lifespan and the current age', () => {
    expect(planet.getTimeLeft("jupiter")).toEqual([4.61,false]);
  })
  test('should return the years left to live on saturn based on the estimated lifespan and the current age', () => {
    expect(planet.getTimeLeft("saturn")).toEqual([1.85,false]);
  })
  test('should return the years left to live on uranus based on the estimated lifespan and the current age', () => {
    expect(planet.getTimeLeft("uranus")).toEqual([0.65,false]);
  })
  test('should return the years left to live on neptune based on the estimated lifespan and the current age', () => {
    expect(planet.getTimeLeft("neptune")).toEqual([0.33,false]);
  })
   test('should return the years past the livespan on mercury based on the estimated lifespan and the current age', () => {
    let oldplanet = new Planet(1904,8,19,true);
    expect(oldplanet.getTimeLeft("mercury")).toEqual([165.72,true]);
  })
  test('should return the years past the livespan on earth based on the estimated lifespan and the current age', () => {
    let oldplanet = new Planet(1904,8,19,true);
    expect(oldplanet.getTimeLeft("earth")).toEqual([39.91,true]);
  })

});