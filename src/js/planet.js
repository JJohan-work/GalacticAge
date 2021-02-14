export default class Planet {
  constructor(year,month,day,test=false) {
    this.yearCycle = {
      "mercury":87.97,
      "venus":224.7,
      "earth":365.25,
      "mars":686.97,
      "jupiter":4332.82,
      "saturn":10759.26,
      "uranus":30688.48,
      "neptune":60190
    }; //days in a planetary year
    this.belongTo = {
      "mercury":"mercurian",
      "venus":"venusian",
      "earth":"earthen",
      "mars":"martian",
      "jupiter":"jovian",
      "saturn":"saturnian",
      "uranus":"uranian",
      "neptune":"neptunian"
    }; //for when refering to planetary units i.e. jovian years

    this.now = this.getCurrentTime(test);
    this.currentYear = this.now.getFullYear();
    this.birthday = new Date(year,month,day);
    this.years = parseFloat(((this.now - this.birthday) * 0.00000000003154).toFixed(4));
    this.lifeExpectancy = parseInt(857315.91+(76.46281 - 2571795)/(1 + (this.years/21345.65)^2.236845));
  }

  getCurrentTime(test) {
    let n;
    if (test) n = new Date(2021,2,5); //sets current date as a static value for jest testing
    else n = new Date(); //sets current date as date at runtime for normal operation
    return n;
  }
  
  convertAge(planet,age=this.years) {
    return parseFloat(((age * 365.25) / this.yearCycle[planet]).toFixed(2));
  }

  getNextBirthday(planet) {
    //convert birthday into epoch time
    let nextBirthday = ((parseInt(this.convertAge(planet))+1) * this.yearCycle[planet]) * (1000*60*60*24); //calculates in milliseconds time from birth to next birthday on planet
    let dateWithTime = new Date(this.birthday.getTime() + nextBirthday);
    return new Date(dateWithTime.getFullYear(),dateWithTime.getMonth(),dateWithTime.getDate());
  }

  getLifeSpan(planet) {
    return parseFloat(this.convertAge(planet,this.lifeExpectancy).toFixed(2));
  }

  getTimeLeft(planet) {
    if ((this.getLifeSpan(planet) - this.convertAge(planet)) > 0) {
      return [parseFloat((this.getLifeSpan(planet) - this.convertAge(planet)).toFixed(2)),false];
    } else {
      return [parseFloat((this.convertAge(planet) - this.getLifeSpan(planet)).toFixed(2)),true];
    }
  }
}