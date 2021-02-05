import { parse } from "@babel/core";

export default class Planet {
  constructor(year,month,day) {
    let n = new Date();
    this.currentYear = n.getFullYear();
    this.birthday = new Date(year,month,day);
    this.years = parseInt((n - this.birthday) * 0.00000000003154);

    let check = new Date(this.currentYear,month,day);

    let check2 = (check - n > 0 ? this.currentYear-1 : this.currentYear)
    let lastbirthday = new Date(check2,month,day);

    this.daysSince = parseInt((n - lastbirthday) / (1000*60*60*24));
  }

}