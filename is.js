module.exports = class dt {
    constructor() {
      this.date = new Date();
      this.xweekx = ["Sun", "Mon", "Tues", "Wednes", "Thurs", "Fri", "Satur"];
      this.xweekarx = ["الأحد", "الإثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت"];
    }
    /**Zero Start string*/
    z(x) {
      if (x.toString().length == 1) {
          return ("0" + x).toString();
      } else {
          return x.toString();
      }
  }
  /**Zero Start string*/
  z_mse(x) {
    if (x.toString().length == 1) {
        return ("00" + x).toString();
    }else if(x.toString().length == 2){
      return ("0" + x).toString();
    } else {
        return x.toString();
    }
}
    /**milli*/
    get l_mse() {
      return this.date.getMilliseconds();
    }
    /**second */
    get l_se() {
      return this.date.getSeconds();
    }
    /**minute */
    get l_mi() {
      return this.date.getMinutes();
    }
    /**24 hours */
    get l_h24() {
      return this.date.getHours();
    }
    /**12 hours */
    get l_h12() {
      return (this.date.getHours() == 0) ? 12 : (this.date.getHours() >= 12) ? this.date.getHours() - 12 : this.date.getHours();
    }
    /**AM - PM*/
    get l_ampm() {
      return (this.date.getHours() > 12) ? "PM" : "AM";
    }
    /**ص-م*/
    get l_ampmar() {
      return (this.date.getHours() > 12) ? "م" : "ص";
    }
    /**Saturday*/
    get l_weekday() {
      return z.dt.a.xweekx[this.date.getDay()] + "day";
    }
    /**Sat*/
    get l_week() {
      return z.dt.a.xweekx[this.date.getDay()].substring(0, 3);
    }
    /**السبت*/
    get l_weekar() {
      return z.dt.a.xweekarx[this.date.getDay()];
    }
    /**1-31*/
    get l_day() {
      return this.date.getDate();
    }
    /**1-12*/
    get l_mo() {
      return this.date.getMonth() + 1;
    }
    /**2019*/
    get l_yearf() {
      return this.date.getFullYear();
    }
    /**19*/
    get l_year() {
      return this.date.getFullYear() - 2000;
    }
    /**milli*/
    get u_mse() {
      return this.date.getUTCMilliseconds();
    }
    /**second */
    get u_se() {
      return this.date.getUTCSeconds();
    }
    /**minute */
    get u_mi() {
      return this.date.getUTCMinutes();
    }
    /**24 hours */
    get u_h24() {
      return this.date.getUTCHours();
    }
    /**12 hours */
    get u_h12() {
      return (this.date.getUTCHours() == 0) ? 12 : (this.date.getUTCHours() >= 12) ? this.date.getUTCHours() - 12 : this.date.getUTCHours();
    }
    /**AM - PM*/
    get u_ampm() {
      return (this.date.getUTCHours() > 12) ? "PM" : "AM";
    }
    /**ص-م*/
    get u_ampmar() {
      return (this.date.getUTCHours() > 12) ? "م" : "ص";
    }
    /**Saturday*/
    get u_weekday() {
      return z.dt.a.xweekx[this.date.getUTCDay()] + "day";
    }
    /**Sat*/
    get u_week() {
      return z.dt.a.xweekx[this.date.getUTCDay()].substring(0, 3);
    }
    /**السبت*/
    get u_weekar() {
      return z.dt.a.xweekarx[this.date.getUTCDay()];
    }
    /**1-31*/
    get u_day() {
      return this.date.getUTCDate();
    }
    /**1-12*/
    get u_mo() {
      return this.date.getUTCMonth() + 1;
    }
    /**2019*/
    get u_yearf() {
      return this.date.getUTCFullYear();
    }
    /**19*/
    get u_year() {
      return this.date.getUTCFullYear() - 2000;
    }
    get l_now_all(){
    return this.z(this.l_yearf) + "-" + this.z(this.l_mo) + "-" + this.z(this.l_day) + " " + this.z(this.l_h24) + ":" + this.z(this.l_mi) + ":" + this.z(this.l_se) + "." + this.z_mse(this.l_mse);
    }
    get l_now_short(){
    return  this.z(this.l_year) + "-" + this.z(this.l_mo) + "-" + this.z(this.l_day) + " " + this.z(this.l_h24) + ":" + this.z(this.l_mi) + ":" + this.z(this.l_se);
    }
  }
