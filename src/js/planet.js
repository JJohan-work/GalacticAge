export default class Planet {
  constructor(year,month,day,test=false) {
    this.yearCycle = {"mercury":87.97,"venus":224.7,"earth":365.25,"mars":686.97,"jupiter":4332.82,"saturn":10759.26,"uranus":30688.48,"neptune":60190}; //days in a planetary year
    this.belongTo = {"mercury":"mercurian","venus":"venusian","earth":"earthen","mars":"martian","jupiter":"jovian","saturn":"saturnian","uranus":"uranian","neptune":"neptunian"}; //for when refering to planetary units i.e. jovian years

    let n;
    if (test) {n = new Date(2021,2,5);} //sets current date as a static value for jest testing
    else {n = new Date();} //sets current date as date at runtime for normal operation
    this.currentYear = n.getFullYear();

    this.birthday = new Date(year,month,day);
    this.years = parseFloat(((n - this.birthday) * 0.00000000003154).toFixed(4));

    let check = new Date(this.currentYear,month,day);
    let check2 = (check - n > 0 ? this.currentYear-1 : this.currentYear);
    let lastbirthday = new Date(check2,month,day);
    this.daysSince = parseInt((n - lastbirthday) / (1000*60*60*24));
    this.lifeExpectancy = parseInt(857315.91+(76.46281 - 2571795)/(1 + (this.years/21345.65)^2.236845));

    this.planetAge;
    this.nextPlanetBirth;
  }

  convertAge(planet,age=this.years) {
    return parseFloat(((age * 365.25) / this.yearCycle[planet]).toFixed(2));
  }

  convertNext(planet) {
    //convert birthday into epoch time
    let nextBirthday = ((parseInt(this.convertAge(planet))+1) * this.yearCycle[planet]) * (1000*60*60*24); //calculates in milliseconds time from birth to next birthday on planet
    let dateWithTime = new Date(this.birthday.getTime() + nextBirthday);
    this.nextPlanetBirth = new Date(dateWithTime.getFullYear(),dateWithTime.getMonth(),dateWithTime.getDate());
    return this.nextPlanetBirth //stripes datewithTime of its timestamp
  }

  getLifeSpan(planet) {
    this.planetAge = this.convertAge(planet,this.lifeExpectancy);
  }

  getTimeLeft() {
    return "test text";
  }
}