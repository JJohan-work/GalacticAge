export default class Planet {
  constructor(year,month,day,test=false) {
    this.yearCycle = {"mercury":87.97,"venus":224.7,"earth":365.25,"mars":686.97,"jupiter":4332.82012875,"saturn":10759.265,"uranus":30688.48762,"neptune":60190};
    this.belongTo = {"mercury":"mercurian","venus":"venusian","earth":"earthen","mars":"martian","jupiter":"jovian","saturn":"saturnian","uranus":"uranian","neptune":"neptunian"};

    let n = 0;
    if (test) {n = new Date(2021,2,5);} //sets current date as a static value for jest testing
    else {n = new Date();} //sets current date as current date for normal operation
    this.currentYear = n.getFullYear();
    this.birthday = new Date(year,month,day);
    this.years = parseFloat(((n - this.birthday) * 0.00000000003154).toFixed(4));

    let check = new Date(this.currentYear,month,day);
    let check2 = (check - n > 0 ? this.currentYear-1 : this.currentYear);
    let lastbirthday = new Date(check2,month,day);
    this.daysSince = parseInt((n - lastbirthday) / (1000*60*60*24));
    this.lifeExpectancy = parseInt(857315.91+(76.46281 - 2571795)/(1 + (this.years/21345.65)^2.236845));
  }

  convertAge(planet,age=this.years) {
    return parseFloat(((age * 365.25) / this.yearCycle[planet]).toFixed(2));
  }

  convertNext(planet) {
    //convert birthday into epoch time
    let nextBirthday = ((parseInt(this.convertAge(planet))+1) * this.yearCycle[planet]) * (1000*60*60*24); //calculates in milliseconds time from birth to next birthday on planet
    let dateWithTime = new Date(this.birthday.getTime() + nextBirthday);
    return new Date(dateWithTime.getFullYear(),dateWithTime.getMonth(),dateWithTime.getDate()); //stripes datewithTime of its timestamp
  }

  life(planet) {
    return `You are expected to live for ${this.lifeExpectancy} earth years. If you lived on ${planet} you would be ${this.convertAge(planet,this.lifeExpectancy)-this.convertAge(planet)>0 ? `${(this.convertAge(planet,this.lifeExpectancy)-this.convertAge(planet)).toFixed(1)} ${this.belongTo[planet]} years over` : `${(this.convertAge(planet,this.convertAge(planet))-this.lifeExpectancy).toFixed(1)} ${this.belongTo[planet]} years under`} your earth life expectancy.`;
  }
}