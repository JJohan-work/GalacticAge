import Planet from '../src/js/planet.js'

describe('Planets', () => {
  let planet;
  beforeEach(() => {
    planet = new Planet(1999,8,19,true);
  })

  test('Should create a planet object with the values of the current Year, birthday, years since birth and days since last birthday saved', () => {
    let date = new Date(1999,8,19);
    let rightNow = new Date();
    let year = rightNow.getFullYear();
    expect(planet.currentYear).toEqual(year);
    expect(planet.birthday).toEqual(date);
    expect(planet.years).toEqual(21.3591);
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

  test('should return the years left to live on mercury based on the estimated lifespan and the current age, can only be called after getting getLifeSpan', () => {
    expect(planet.getTimeLeft("mercury")).toEqual(226.87);
  })
  test('should return the years left to live on venus based on the estimated lifespan and the current age, can only be called after getting getLifeSpan', () => {
    expect(planet.getTimeLeft("venus")).toEqual(1.85);
  })
  test('should return the years left to live on earth based on the estimated lifespan and the current age, can only be called after getting getLifeSpan', () => {
    expect(planet.getTimeLeft("earth")).toEqual(54.64);
  })
  test('should return the years left to live on mars based on the estimated lifespan and the current age, can only be called after getting getLifeSpan', () => {
    expect(planet.getTimeLeft("mars")).toEqual(1.85);
  })
  test('should return the years left to live on jupiter based on the estimated lifespan and the current age, can only be called after getting getLifeSpan', () => {
    expect(planet.getTimeLeft("jupiter")).toEqual(1.85);
  })
  test('should return the years left to live on saturn based on the estimated lifespan and the current age, can only be called after getting getLifeSpan', () => {
    expect(planet.getTimeLeft("saturn")).toEqual(1.85);
  })
  test('should return the years left to live on uranus based on the estimated lifespan and the current age, can only be called after getting getLifeSpan', () => {
    expect(planet.getTimeLeft("uranus")).toEqual(1.85);
  })
  test('should return the years left to live on neptune based on the estimated lifespan and the current age, can only be called after getting getLifeSpan', () => {
    expect(planet.getTimeLeft("neptune")).toEqual(1.85);
  })

});