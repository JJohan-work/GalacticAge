import { parse } from "@babel/core";

export default class Planet {
  constructor(year,month,day,test=false) {
    this.yearCycle = {"mercury":87.97,"venus":224.7,"earth":365.25,"mars":686.67,"jupiter":4331.865,"saturn":10760.265,"uranus":30684.6525,"neptune":60189.5475,"pluto":90797.4975}

    let n = 0;
    if (test) {n = new Date(2021,2,5);} //sets current date as a static value for jest testing
    else {n = new Date();} //sets current date as current date for normal operation
    this.currentYear = n.getFullYear();
    this.birthday = new Date(year,month,day);
    this.years = parseFloat(((n - this.birthday) * 0.00000000003154).toFixed(4));

    let check = new Date(this.currentYear,month,day);
    let check2 = (check - n > 0 ? this.currentYear-1 : this.currentYear)
    let lastbirthday = new Date(check2,month,day);
    this.daysSince = parseInt((n - lastbirthday) / (1000*60*60*24));
  }

  convertAge(planet) {

  }

  // convertNext(planet) {

  // }

}