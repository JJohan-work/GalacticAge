import Display from '../src/js/display.js';
import Planet from '../src/js/planet.js';

describe('Display Constructor', () => {
  let display;
  beforeEach(() => {
    display = new Display();
  })
  test('should create object imageSelector in display (Note: Jest currently looks at a placeholder name in __mock__ for svg files)', () => {
    const selectortest = {
      "0":'test-file-stub',
      "1":'test-file-stub',
      "2":'test-file-stub',
      "3":'test-file-stub',
      "4":'test-file-stub',
      "5":'test-file-stub',
      "6":'test-file-stub',
      "7":'test-file-stub'
    };
    expect(display.imageSelector).toEqual(selectortest);
  });
  test('should create object planetName in display', () => {
    const planetName = {
      "0":"mercury",
      "1":"venus",
      "2":"earth",
      "3":"mars",
      "4":"jupiter",
      "5":"saturn",
      "6":"uranus",
      "7":"neptune"
    };
    expect(display.planetName).toEqual(planetName);
  });
  test('should create object belongTo in display', () => {
    const belongTo = {
      "0":"Mercurian",
      "1":"Venusian",
      "2":"Earth",
      "3":"Martian",
      "4":"Jovian",
      "5":"Saturnian",
      "6":"Uranian",
      "7":"Neptunian"
    };
    expect(display.belongTo).toEqual(belongTo);
  });
  test('should set position to 2 in display', () => {
    expect(display.position).toEqual(2);
  });
});

describe('Display Functions', () => {
  let display;
  beforeEach(() => {
    display = new Display();
  })
  test('should increment position in display object by 1 when given true', () => {
    const positionBefore = display.position;
    display.changePlanet(true);
    expect(display.position).toEqual(positionBefore+1);
  });
  test('should increment position in display object by -1 when given false', () => {
    const positionBefore = display.position;
    display.changePlanet(false);
    expect(display.position).toEqual(positionBefore-1);
  });
  test('should return planet unit name as dictated by display.position', () => {
    expect(display.getUnit()).toEqual("Earth");
  });
  test('should return name of planet as dictated by display.position', () => {
    expect(display.getPlanet()).toEqual("earth");
  });
  test('should return image URL of planet as dictated by a given number (Note: Jest currently looks at a placeholder name in __mock__ for svg files)', () => {
    expect(display.getURL(2)).toEqual('test-file-stub');
  });
});
