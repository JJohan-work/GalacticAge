import mercuryPic from '../assets/images/mercury.svg';
import venusPic from '../assets/images/venus.svg';
import earthPic from '../assets/images/earth.svg';
import marsPic from '../assets/images/mars.svg';
import jupiterPic from '../assets/images/jupiter.svg';
import saturnPic from '../assets/images/saturn.svg';
import uranusPic from '../assets/images/uranus.svg';
import neptunePic from '../assets/images/neptune.svg';

export default class Display {
  constructor() {
    this.imageSelector = {
      "0":mercuryPic,
      "1":venusPic,
      "2":earthPic,
      "3":marsPic,
      "4":jupiterPic,
      "5":saturnPic,
      "6":uranusPic,
      "7":neptunePic
    };
    this.planetName = {
      "0":"mercury",
      "1":"venus",
      "2":"earth",
      "3":"mars",
      "4":"jupiter",
      "5":"saturn",
      "6":"uranus",
      "7":"neptune"
    };
    this.belongTo = {
      "0":"mercurian",
      "1":"venusian",
      "2":"earthen",
      "3":"martian",
      "4":"jovian",
      "5":"saturnian",
      "6":"uranian",
      "7":"neptunian"
    };
    this.position = 2;
  }

  changePlanet(direction) {
    if (direction && this.position < 7) {
      this.position = this.position + 1;
    } else if (!direction && this.position > 0) {
      this.position = this.position - 1;
    }
  }

  getPlanet() {
    return this.planetName[this.position];
  }

  getURL(number) {
    return this.imageSelector[number];
  }

}



// test('should create a name replacement cypher for planets and planet units', () => {
//   expect(planet.belongTo).toEqual({
//     "mercury":"mercurian",
//     "venus":"venusian",
//     "earth":"earthen",
//     "mars":"martian",
//     "jupiter":"jovian",
//     "saturn":"saturnian",
//     "uranus":"uranian",
//     "neptune":"neptunian"
//   });